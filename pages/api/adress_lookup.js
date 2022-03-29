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

  const reqUrl =
    baseUrl +
    encodeURI(
      `?query=${query}&country=SE&limit=1&access_key=${process.env.POSITIONSTACK_APIKEY}`
    );

  const request = await fetch(reqUrl);
  const response = await request.json();

  if (response.error) {
    res.json(response);

    return;
  }

  res.json({
    latitude: response.data[0].latitude,
    longitude: response.data[0].longitude,
  });

  return;
}
