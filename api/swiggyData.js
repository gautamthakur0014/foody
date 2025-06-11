
import fetch from "node-fetch";

export default async function handler(req, res) {
  const swiggyURL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  try {
    const response = await fetch(swiggyURL, {
      headers: {
        "User-Agent": "Mozilla/5.0", // mimic a browser
        Accept: "application/json",
      },
    });

    const data = await response.json();
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Swiggy data" });
  }
}
