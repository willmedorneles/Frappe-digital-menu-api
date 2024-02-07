import express from "express";
import { fetchActiveBanner } from "../controllers/banner-controller.js";

const router = express.Router();

router.get("/banner", fetchActiveBanner);

// Export the router
export default { path: "/api", router };
