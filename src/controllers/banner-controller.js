import { getActiveBanner } from "../models/banner-model.js";
async function fetchActiveBanner(req, res) {
  try {
    const activeBanner = await getActiveBanner();
    res.json(activeBanner);
  } catch (error) {
    console.error("Error in fetchActiveBanner:", error);
    res.status(500).send("Error fetching the active banner");
  }
}

export { fetchActiveBanner };
