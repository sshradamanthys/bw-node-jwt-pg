import express from "express";

const app = express(); 


const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  const name = req.query.name || "World";
  res.send(`Hello, ${name}!`);
});


app.listen(PORT, () => console.log(`listening on port ${PORT}`));