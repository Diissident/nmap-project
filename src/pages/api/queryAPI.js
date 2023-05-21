import FigureModel from "../../../backend/model";
import mongoose from "mongoose";
import config from "../../../config";
import Nmapper  from "@/nmapScan";

async function queryAPI(req, res) {
  const { target, requestType, portRange, maxRetries } = req.body;

  try {
    const { openPorts, nmapInput, nmapOutput } = await Nmapper({
      target,
      requestType,
      portRange,
      maxRetries,
    });

    await mongoose.connect(config.db.uri);
    const figure = new FigureModel({
      target,
      requestType,
      portRange,
      maxRetries,
      input: nmapInput,
      output: nmapOutput,
    });
    await figure.save();
    await mongoose.disconnect();

    res.json({ openPorts });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error performing Nmap scan");
  }
};

export default queryAPI;



