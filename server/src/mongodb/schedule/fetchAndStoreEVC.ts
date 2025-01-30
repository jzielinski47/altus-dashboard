import { EVCModel } from "../schemas/evc";

async function fetchAndStoreEVC() {
  console.log(`[${new Date().toISOString()}] Fetching EVC data...`);
  const url = `https://api.openchargemap.io/v3/poi?latitude=52.2297&longitude=21.0122&distance=510&maxresults=1000&key=${process.env.OPEN_CHARGE_MAP_API_KEY}`;
  const options = { method: "GET", headers: { Accept: "application/json" } };

  try {
    const res = await fetch(url, options);
    const data = await res.json();

    if (!data || !Array.isArray(data)) {
      console.error("Invalid EVC data received");
      return;
    }

    const bulkOps = data.map((evc) => ({
      updateOne: {
        filter: { stationId: evc.ID },
        update: {
          $set: {
            uuid: evc.UUID,
            operatorName: evc.OperatorInfo?.Title,
            usageType: {
              isPayAtLocation: evc.UsageType?.IsPayAtLocation,
              isMembershipRequired: evc.UsageType?.IsMembershipRequired,
              isAccessKeyRequired: evc.UsageType?.IsAccessKeyRequired,
              title: evc.UsageType?.Title,
            },
            statusType: {
              isOperational: evc.StatusType?.IsOperational,
              title: evc.StatusType?.Title,
            },
            addressInfo: {
              title: evc.AddressInfo?.Title,
              addressLine1: evc.AddressInfo?.AddressLine1,
              addressLine2: evc.AddressInfo?.AddressLine2,
              town: evc.AddressInfo?.Town,
              stateOrProvince: evc.AddressInfo?.StateOrProvince,
              postcode: evc.AddressInfo?.Postcode,
              country: {
                isoCode: evc.AddressInfo?.Country?.ISOCode,
                title: evc.AddressInfo?.Country?.Title,
              },
              latitude: evc.AddressInfo?.Latitude,
              longitude: evc.AddressInfo?.Longitude,
            },
            connections: evc.Connections?.map((conn: any) => ({
              connectionType: {
                formalName: conn.ConnectionType?.FormalName,
                title: conn.ConnectionType?.Title,
              },
              statusType: {
                isOperational: conn.StatusType?.IsOperational,
                title: conn.StatusType?.Title,
              },
              level: {
                isFastChargeCapable: conn.Level?.IsFastChargeCapable,
                title: conn.Level?.Title,
                comments: conn.Level?.Comments,
              },
              amps: conn.Amps,
              voltage: conn.Voltage,
              powerKW: conn.PowerKW,
              currentType: {
                description: conn.CurrentType?.Description,
                title: conn.CurrentType?.Title,
              },
              quantity: conn.Quantity,
              comments: conn.Comments,
            })),
            usageCost: evc.UsageCost,
            numberOfPoints: evc.NumberOfPoints,
            dateLastVerified: evc.DateLastVerified,
            dateCreated: evc.DateCreated,
            dateLastStatusUpdate: evc.DateLastStatusUpdate,
          },
        },
        upsert: true,
      },
    }));

    const result = await EVCModel.bulkWrite(bulkOps);
    console.log(
      `Successfully processed ${data.length} EVC stations. Modified: ${result.modifiedCount}, Upserted: ${result.upsertedCount}`
    );
  } catch (err) {
    console.error("Error fetching EVC data:", err);
    throw err;
  }
}

export default fetchAndStoreEVC;
