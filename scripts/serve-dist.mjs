// scripts/serve-dist.mjs
import http from "http";
import sirv from "sirv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve dist/ and PREFER actual files/folders (no SPA rewrite here)
const serve = sirv(path.resolve(__dirname, "../dist"), {
  single: false,   // <- IMPORTANT: do NOT force index.html for all routes
  dev: true,
});

const PORT = 5051;
http.createServer((req, res) => serve(req, res)).listen(PORT, () => {
  console.log(`Serving dist at http://localhost:${PORT}`);
});
