import nc from "next-connect";
import dbConnect from "../../../backend/config/dbConnect";
import {
  newAddress,
  getAddresses,
} from "../../../backend/controllers/AddressController";

const handler = nc();

dbConnect();

handler.post(newAddress);
handler.get(getAddresses);

export default handler;
