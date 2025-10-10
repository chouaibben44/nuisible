// scripts/prerender.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import http from "node:http";

const { default: puppeteer } = await import("puppeteer");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONFIG ---
const DIST_DIR = path.resolve(__dirname, "../dist");
const PORT = Number(process.env.PRERENDER_PORT || 5055);

// Routes to prerender (include all new services)
const ROUTES = [
  "/",
  "/a-propos",
  "/contact",
  "/devis",
  "/confirmation",
  "/services",

  "/services/depigeonnage",
  "/services/desinsectisation-moustiques",
  "/services/desinsectisation-termites",

  // NEW
  "/services/chenille-processionnaire",
  "/services/taupe",
  "/services/demoussage",
  "/services/xylophage",
  "/services/poudrage-toiture-express",
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".mp4": "video/mp4",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Tiny static server that serves /dist and falls back to index.html
function startServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname.endsWith("/") && pathname !== "/") pathname = pathname.slice(0, -1);

    let filePath = path.join(DIST_DIR, pathname);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }
    if (!fs.existsSync(filePath)) {
      filePath = path.join(DIST_DIR, "index.html");
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = MIME[ext] || "application/octet-stream";

    const stream = fs.createReadStream(filePath);
    stream.on("open", () => {
      res.writeHead(200, { "Content-Type": type });
      stream.pipe(res);
    });
    stream.on("error", () => {
      res.writeHead(500).end("Internal Server Error");
    });
  });

  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

async function prerender() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`[prerender] dist not found at ${DIST_DIR}. Did you run the Vite build?`);
    process.exit(1);
  }

  const server = await startServer();
  const base = `http://localhost:${PORT}`;

  const executablePath = await puppeteer.executablePath?.();
  const browser = await puppeteer.launch({
    executablePath,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: "new",
  });

  try {
    const page = await browser.newPage();

    for (const route of ROUTES) {
      const url = `${base}${route}`;
      console.log(`[prerender] → ${url}`);
      try {
        await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

        // Wait for react-helmet-async tags to be committed (no waitForTimeout on old Puppeteer)
        await page.waitForSelector('head [data-rh="true"]', { timeout: 3000 }).catch(() => {});
        await sleep(120); // small settle delay

        const html = await page.content();

        const outPath =
          route === "/" ? path.join(DIST_DIR, "index.html") : path.join(DIST_DIR, route, "index.html");

        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.writeFileSync(outPath, html, "utf8");
        console.log(`[prerender] ✅ wrote ${outPath}`);
      } catch (e) {
        console.warn(`[prerender] ⚠️ failed ${url}: ${e?.message || e}`);
        // continue with other routes instead of failing whole build
      }
    }
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error("[prerender] error:", err);
  process.exit(1);
});
