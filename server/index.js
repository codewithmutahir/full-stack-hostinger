import express from "express";
import cors from "cors";
import products from "./products.json" with { type: "json" };

const app = express();

app.use(express.json());
const allowedOrigins = process.env.CLIENT_URL 
  ? process.env.CLIENT_URL.split(',').map(url => url.trim())
  : [
      "http://localhost:5174",
      "http://localhost:5173",
      "http://localhost:3000",
    ];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Root route
app.get("/", (req, res) => {
  res.json({ 
    message: "Server is running!",
    endpoints: ["/api/message", "/api/products"]
  });
});

//API message route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from mutahir's server" });
});

//API products route
app.get("/api/products", (req, res) => {
  res.json({ products: products });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
