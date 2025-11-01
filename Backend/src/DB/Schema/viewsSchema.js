import mongoose from "mongoose";

const countryViewSchema = new mongoose.Schema({
  country: String,
  views: { type: Number, default: 1 },
});

const pageViewSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  totalViews: { type: Number, default: 1 },
  countries: [countryViewSchema],
});

export default mongoose.model("PageView", pageViewSchema);
