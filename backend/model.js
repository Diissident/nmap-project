import mongoose from "mongoose";
import figureSchema from "./figure.js";

const FigureModel = mongoose.models.Figure || mongoose.model("Figure", figureSchema);

export default FigureModel;
