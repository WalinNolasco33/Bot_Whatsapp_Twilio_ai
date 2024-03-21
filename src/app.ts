import "dotenv/config";
import { Twilio } from "twilio";
let twilid_id: string;
let twilid_sk: string;
let twilioNumber: string;
let myNumber: string;
let client: Twilio;
if (
  process.env.TWILID_ID &&
  process.env.TWILID_SK &&
  process.env.TWILIONUMBER &&
  process.env.MYNUMBER
) {
  twilid_id = process.env.TWILID_ID;
  twilid_sk = process.env.TWILID_SK;
  twilioNumber = process.env.TWILIONUMBER;
  myNumber = process.env.MYNUMBER;

  client = new Twilio(twilid_id, twilid_sk);
} else {
  throw new Error("Crea una intancia de Twilio!!");
}

import express from "express";
import routes from "./routes/routes";
const app = express();
app.use(express.json());
app.use("/", routes);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`La API funciona en el path: http://localhost:${PORT}`);
});

export { twilid_id, twilid_sk, twilioNumber, myNumber, client };
