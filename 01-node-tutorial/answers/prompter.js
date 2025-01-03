const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
    const decode = new StringDecoder("utf-8");
    let body = "";
    req.on("data", function (data) {
        body += decode.write(data);
    });
    req.on("end", function () {
        body += decode.end();
        const body1 = decodeURI(body);
        const bodyArray = body1.split("&");
        const resultHash = {};
        bodyArray.forEach((part) => {
            const partArray = part.split("=");
            resultHash[partArray[0]] = partArray[1];
        });
        callback(resultHash);
    });
};
let item = "";
// here, you could declare one or more variables to store what comes back from the form.
let guess = "Guess shows here.";
let randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber) // need for testing number
// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
/*const form = () => {
    return `
  <body>
  <p>Enter a guess between 1 and 100.</p>
  <p>${guess}</p>
  <form method="POST">
  <input name="guess" type="number" min="1" max="100" step="1"></input>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};*/
const form = () => {
    return `
  <body style="background-color:${item}; color:black">
  <p>${item}</p>
  <form method="POST">
  <input name="item"></input>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
}

const server = http.createServer((req, res) => {
    console.log("req.method is ", req.method);
    console.log("req.url is ", req.url);

    if (req.method === "POST") {
        getBody(req, (body) => {
            console.log("The body of the post is ", body);
            // here, you can add your own logic
            item = body["item"]
            console.log(item)
            const userGuess = parseInt(body["guess"], 10)
            guess = `You guessed ${userGuess}. `
            if (userGuess === randomNumber) {
                guess += "Congratulations you found the number."
            } else if (userGuess < randomNumber) {
                guess += "Try guessing higher.";
            } else {
                guess += "Try guessing lower."
            }
            // Your code changes would end here
            res.writeHead(303, {
                Location: "/",
            });
            res.end();
        });
    } else {
        res.end(form());
    }
});
server.on("request", (req) => {
    console.log("event received: ", req.method, req.url);
});
server.listen(3000);
console.log("The server is listening on port 3000.");
