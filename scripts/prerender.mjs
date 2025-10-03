// scripts/prerender.mjs
import http from "http";
import { mkdir, writeFile, access } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";
import sirv from "sirv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, "../dist");
const PORT = 5050;

// Put your routes here:
const ROUTES = [
  "/",
  "/contact",
  "/devis",
  "/services",
  "/services/depigeonnage",
  "/services/desinsectisation-moustiques",
  "/services/desinsectisation-termites",
  "/a-propos",
];

function log(step, detail = "") {
  console.log(`[prerender] ${step}${detail ? " → " + detail : ""}`);
}

async function ensureDistExists() {
  try {
    await access(DIST_DIR);
  } catch {
    throw new Error(`dist/ not found at ${DIST_DIR}. Run "npm run build" first.`);
  }
}

// sirv with SPA fallback ("single: true" rewrites to index.html)
function startServer() {
  return new Promise((resolve) => {
    const serve = sirv(DIST_DIR, { single: true, dev: true });
    const server = http.createServer((req, res) => serve(req, res));
    server.listen(PORT, () => {
      log("server", `serving ${DIST_DIR} at http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function saveHtml(route, html) {
  const clean = route.replace(/^\//, "");
  const outDir = route === "/" ? DIST_DIR : path.join(DIST_DIR, clean);
  const outPath =
    route === "/"
      ? path.join(DIST_DIR, "index.html")
      : path.join(outDir, "index.html");

  await mkdir(outDir, { recursive: true });
  await writeFile(outPath, html, "utf8");
  log("write", `${route} -> ${path.relative(DIST_DIR, outPath)}`);
}

async function prerender() {
  await ensureDistExists();
  const server = await startServer();
  const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

  try {
    for (const route of ROUTES) {
      const url = `http://localhost:${PORT}${route}`;
      log("visit", url);

      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "networkidle0" });

      const title = await page.title();
      log("title", `${route} => "${title}"`);

      const html = await page.content();
      await saveHtml(route, html);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
    log("done");
  }
}

prerender().catch((e) => {
  console.error(e);
  process.exit(1);
});
