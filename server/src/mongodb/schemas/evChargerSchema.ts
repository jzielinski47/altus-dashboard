import moongose from "mongoose";

const evChargersSchema = new moongose.Schema(
  {
    stationId: Number,
    name: String,
    latitude: Number,
    longitude: Number,
    address: String,
    country: String,
    postcode: String,
    connections: [
      {
        connectionType: String,
        power: Number,
        level: String,
        quantity: Number,
        currentType: String,
      },
    ],
    lastUpdated: Date,
  },
  { timestamps: true }
);

export const evCharger = moongose.model("EVCharger", evChargersSchema);
