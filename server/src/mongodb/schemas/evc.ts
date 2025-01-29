import mongoose from "mongoose";

/* 
  EVC - Electric Vechicle Charger[s]
  via. Open Charge Map API
*/

const EVCSchema = new mongoose.Schema(
  {
    stationId: {
      type: Number,
      required: true,
      unique: true,
    },
    uuid: String,
    operatorName: String,
    usageType: {
      isPayAtLocation: Boolean,
      isMembershipRequired: Boolean,
      isAccessKeyRequired: Boolean,
      title: String,
    },
    statusType: {
      isOperational: Boolean,
      title: String,
    },
    addressInfo: {
      title: String,
      addressLine1: String,
      addressLine2: String,
      town: String,
      stateOrProvince: String,
      postcode: String,
      country: {
        isoCode: String,
        title: String,
      },
      latitude: Number,
      longitude: Number,
    },
    connections: [{
      connectionType: {
        formalName: String,
        title: String,
      },
      statusType: {
        isOperational: Boolean,
        title: String,
      },
      level: {
        isFastChargeCapable: Boolean,
        title: String,
        comments: String,
      },
      amps: Number,
      voltage: Number,
      powerKW: Number,
      currentType: {
        description: String,
        title: String,
      },
      quantity: Number,
      comments: String,
    }],
    usageCost: String,
    numberOfPoints: Number,
    dateLastVerified: Date,
    dateCreated: Date,
    dateLastStatusUpdate: Date,
  },
  { timestamps: true }
);

export const EVCModel = mongoose.model("EVC", EVCSchema);