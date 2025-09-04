const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, "public")));

// Dummy API for products
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "iPhone 14", price: 79999 },
    { id: 2, name: "Samsung Galaxy S23", price: 74999 },
    { id: 3, name: "Sony Headphones", price: 4999 },
    { id: 4, name: "HP Laptop", price: 59999 }
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Amazon Clone running at http://localhost:${PORT}`);
});

