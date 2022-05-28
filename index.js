// const a = {
//     average: (a, b ) => {
//         console.log((a+b)/2);
//     },

//     percent: (a , b) => {
//         console.log((a/b)*100);
//     }
// }
// module.exports = a;
// const fs = require("fs");

// fs.readFileSync("./sample.txt", "utf-8", (errr, data ) => {
//     if(errr){
//         throw errr;
//     }
//     console.log(data);

// });

// console.log("This is next line");
// const fs = require("fs");

//  a = "this is changed sample"

// fs.writeFileSync("./sample.txt" , a );
// console.log(a);
// console.log("Heollo world");
// const os = require("os");

// console.log(os.freemem());
// console.log(os.totalmem());

//
// const pokemon  = require("pokemon");

// console.log(pokemon.random()); 
const http = require("http");
const fs = require("fs");

const PORT = 200;
const hostname = "localhost";

const home = fs.readFileSync("./index.html" , "utf-8");

const server = http.createServer((req, res ) => {
        if(req.url === "/"){
           return res.end(home);
        }
        if(req.url === "/about"){
           return res.end("<h1>This is about Page</h1>");
        }
        if(req.url === "/contact"){
           return res.end("<h1>This is contact Page</h1>");
        }
        if(req.url === "/carrers"){
           return res.end("<h1>This is carrers Page</h1>");
        }else{
            res.end("<h1> error 404 Page not Found</h1>")
        }
});
server.listen(PORT, hostname, () => {
    console.log(`this server is running on http://:${hostname}:${PORT}`);
});
