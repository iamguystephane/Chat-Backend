import app from "./app.js";

const PORT = process.env.PORT || 1000;

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);