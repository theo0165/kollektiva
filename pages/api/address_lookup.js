export default async function handler(req, res) {
  const baseUrl = "http://api.positionstack.com/v1/forward";
  const query = req.query.q ?? null;

  if (!query) {
    res.status(400).json({
      error: {
        message: "Missing query parameter: 'q'",
        code: 400,
      },
    });

    return;
  }

  const reqUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${process.env.GOOGLE_API_KEY}`;

  const request = await fetch(reqUrl);
  const response = await request.json();

  if (response.error) {
    res.json(response);

    return;
  }

  console.log(response);

  res.json(response);

  return;
}
