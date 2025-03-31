import express from "express";// Import the model
import Song from "../models/songModel.js";
const router = express.Router();


// Route: Fetch songs by mood
router.get("/setup-:mood", async (req, res) => {
    try {
        const mood = req.params.mood;
        const songs = await Song.find({ mood: mood });

        res.render("setup", { songs, mood });
    } catch (error) {
        res.status(500).json({ error: "Error fetching songs by mood" });
    }
});
export default router;
