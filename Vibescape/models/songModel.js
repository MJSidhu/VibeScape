import mongoose from "mongoose";
// Define Song Schema
const songSchema = new mongoose.Schema({
    title: String,
    youtubeUrl: String,
    mood: String // Happy, Sad, Energetic, etc.
});

// Create Model
const Song = mongoose.model("Song", songSchema);

export default Song;
