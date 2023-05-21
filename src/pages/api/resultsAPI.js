import FigureModel from "../../../backend/model";
import mongoose from "mongoose";
import config from "../../../config";

async function Queryresult(req, res) {
  await mongoose.connect(config.db.uri);

  try {
    const lastresult = await FigureModel.findOne().sort({ updatedAt: -1 });
    res.status(200).json(lastresult);
  } finally {
    await mongoose.disconnect();
  }
};

export default Queryresult;


