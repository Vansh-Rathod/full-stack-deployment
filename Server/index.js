import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5173"],
    // Add Other Production URL Here in the Array
    credentials: true,
  })
);

// API Route
app.get("/api/message", (req, res) => {
  res.json({ message: "Vansh Technologies from Official Server" });
});

const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Vansh Tech Server is running at http://localhost: ${PORT}`)
);
