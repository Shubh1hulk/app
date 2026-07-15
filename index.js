const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((_, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "App is running" }));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
