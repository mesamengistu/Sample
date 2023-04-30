const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Just inside the server");
  switch (req.url) {
    case "/favicon.ico": { 
      return;
    }
    case "/": {
      console.log(req.url);
      res.end("Welocme to our home page");
      break;
    }
    case "/about": {
      console.log(req.url);
      res.end("this is short history about our page");
      break;
    }
    default: {
      console.log(req.url);
      res.end(`<h1>Opps</h1/>
      <p>We cant find your page</p>
      <a href="/"> back to home page </a>`);
      break;
    }
  }
});
server.listen(3000);
