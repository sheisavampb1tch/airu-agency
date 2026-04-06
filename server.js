const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");

const rootDir = __dirname;
const port = Number(process.env.PORT) || 3000;
const host = "0.0.0.0";

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

function resolvePath(urlPath) {
  const safePath = decodeURIComponent(urlPath.split("?")[0]);
  const normalizedPath = safePath === "/" ? "/index.html" : safePath;
  const candidatePath = path.normalize(path.join(rootDir, normalizedPath));

  if (!candidatePath.startsWith(rootDir)) {
    return null;
  }

  return candidatePath;
}

function getLanAddress() {
  const networkInterfaces = os.networkInterfaces();
  const candidates = [];

  for (const [name, addresses] of Object.entries(networkInterfaces)) {
    if (!addresses) {
      continue;
    }

    for (const address of addresses) {
      const isPrivateIPv4 =
        address.family === "IPv4" &&
        !address.internal &&
        (/^192\.168\./.test(address.address) ||
          /^10\./.test(address.address) ||
          /^172\.(1[6-9]|2\d|3[0-1])\./.test(address.address));

      if (!isPrivateIPv4) {
        continue;
      }

      candidates.push({
        address: address.address,
        name: name.toLowerCase(),
      });
    }
  }

  const preferredCandidate = candidates.find(
    (candidate) =>
      !/(virtual|vmware|vbox|hyper-v|host-only|loopback|vethernet)/.test(candidate.name),
  );

  const nonGatewayCandidate = candidates.find(
    (candidate) => !candidate.address.endsWith(".1"),
  );

  const preferredNonGatewayCandidate = candidates.find(
    (candidate) =>
      !candidate.address.endsWith(".1") &&
      !/(virtual|vmware|vbox|hyper-v|host-only|loopback|vethernet)/.test(candidate.name),
  );

  return (
    preferredNonGatewayCandidate?.address ||
    nonGatewayCandidate?.address ||
    preferredCandidate?.address ||
    candidates[0]?.address ||
    null
  );
}

const server = http.createServer((req, res) => {
  const filePath = resolvePath(req.url || "/");

  if (!filePath) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extension] || "application/octet-stream";

    res.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(port, host, () => {
  const lanAddress = getLanAddress();

  console.log(`airu site is running at http://127.0.0.1:${port}`);

  if (lanAddress) {
    console.log(`phone access: http://${lanAddress}:${port}`);
  }
});
