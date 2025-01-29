import { Request, Response, Router } from "express";
import { isAuthenticated } from "../utils/middlewares";

const router = Router();

/* 
  EVC - Electric Vechicle Charger[s]
  via. Open Charge Map API
*/

async function fetchAndStoreEVC() {
  const url = `https://api.openchargemap.io/v3/poi?key=${process.env.OPEN_CHARGE_MAP_API_KEY}`;
  const options = { method: "GET", headers: { Accept: "application/json" } };
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

router.get("/api/dashboard", isAuthenticated, (req: Request, res: Response) => {
  res.send({ msg: "dashboard" });
});

export default router;
