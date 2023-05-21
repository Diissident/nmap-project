import FigureModel from "../../../backend/model";
import mongoose from "mongoose";
import config from "../../../config";

async function getHistory(req, res) {
  try {
    await mongoose.connect(config.db.uri);

    const figures = await FigureModel.find();

    res.status(200).json(figures);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la récupération de l'historique");
  } finally {
    await mongoose.disconnect();
  }
};

 export default getHistory;
