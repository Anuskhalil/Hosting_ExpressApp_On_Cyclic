import express from "express"; // new JS if you do not keep mjs so it will not work bcs it is ES6.

const app = express();  // it is an handle => app
const port = process.env.PORT || 3000;  //Development mein 3000 available hota hein => Environment var ka number

app.get("/", (req, res) => {
  console.log("🚀 ~ file: server.mjs:7 ~ app.get ~ req:", req);
  res.send({ message: "Hello World! by Anus Khalil" });
});

app.get("/name/:myName", (req, res) => {
  const name = req.params.myName;

  console.log("🚀 ~ file: server.mjs:13 ~ app.get ~ name:", name);

  res.send({ message: `Hello World! by ${name}` });
});

app.listen(port, () => { // Port => In and out way 
  console.log(`Example app listening on port ${port}`);
});


//Google Compute Engine => not reccommended for small startups bcs it not maintainable, it pays charges per hours, and it is not scalable
// Aws => ES2 instance

// orcastration system