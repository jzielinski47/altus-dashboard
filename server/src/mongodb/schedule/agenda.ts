import Agenda from "agenda";
import { EVCModel } from "../schemas/evc";
import mongoose from "mongoose";
import fetchAndStoreEVC from "./fetchAndStoreEVC";

const agenda = new Agenda({ mongo: mongoose.connection.db as any });



agenda.define("updateEVC", async () => {
  await fetchAndStoreEVC();
});

async function startAgenda(period: string) {
  await agenda.start();
  await agenda.every(period, "updateEVC");
  console.log("Agenda job scheduled: Update EVC every " + period + ".");
}

export { startAgenda, fetchAndStoreEVC };
