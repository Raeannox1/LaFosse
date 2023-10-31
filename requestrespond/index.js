const http = require("http");

const server = http.createServer((request, respond) => {
  // respond.statusCode = 200;
  //     respond.setHeader("Content-Type", "text/html");
  //   respond.end("<img src='https://img.freepik.com/premium-vector/stay-positive-emoji-hand-drawn-design-element-smiley-face-doodle-yellow-symbol-smiling-emoticon-scribble-happy-face-sticker_642540-791.jpg?w=2000>");
  console.log(request.method);
  console.log(request.url);

  if (request.method === "GET" && request.url === "/") {
    respond.end(" Done :)");
  } else {
    respond.end("NO :(");
  }
});

server.listen(3000, () => console.log("Server running on port 3000 :)"));

//* MOCKING HTTP REQUESTS
