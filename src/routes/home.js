import express from "express";

const router = express.Router();

// Define a route
router.get("/", (req, res) => {
  res.send("Frappé café com dança API");
});

// Export the router
export default { path: "/api", router };
