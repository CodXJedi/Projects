import express from "express";
import fs from "fs";
import url from "url";

const app = express();
const log = console.log;

app.get("/", function (req, res) {
  fs.readFile("./index.html", "utf8", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

app.get("/registration", function (req, res) {
  fs.readFile("./registration.html", "utf8", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

app.get("/users", function (req, res) {
  log("METHOD=", req.method);
  const urlObject = new URL(`http://${req.headers.host}${req.url}`);
  const nameParam = urlObject.searchParams.get("name");
  console.log("Imya polz v linke=", nameParam);
  if (nameParam) {
    let data = fs.readFileSync("./users.json", "utf-8");
    let users = JSON.parse(data);
    console.log("imya polz v json=", users);
    let take = users.find((o) => o.username === nameParam);

    if (take?.username === nameParam) {
      let page = fs.readFileSync("./users.html", "utf8");
      page = page.replace("%name%", nameParam);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(page);
    } else {
      res.writeHead(404);
      res.end("User not found");
    }
    // }
  } else {
    res.writeHead(400);
    res.end("Missing name parameter");
  }
});

app.post("/users", function (req, res) {
  log("METHOD=", req.method);
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const params = new URLSearchParams(body);
    let newUser = {
      username: params.get("username"),
      email: params.get("email"),
      password: params.get("password"),
    };

    let data = fs.readFileSync("./users.json");
    let myObject = JSON.parse(data);

    myObject.push(newUser);

    let newData2 = JSON.stringify(myObject, null, 2);
    fs.writeFile("./users.json", newData2, (err) => {
      // Error checking
      if (err) throw err;
      console.log("New data added");
    });
    res.redirect(`/users?name=${newUser.username}`);
  });
});

app.listen(3000, () => {
  log("server on port 3000");
});
