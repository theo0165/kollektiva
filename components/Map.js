export default function Map({ address }) {
  const defaultLocation = "Sweden";

  if (address != null && !address.toLowerCase().endsWith("sweden")) {
    address = address + ", Sweden";
  }

  return (
    <>
      <iframe
        width="100%"
        height="500"
        loading="lazy"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=${
          process.env.NEXT_PUBLIC_GOOGLE_API_KEY
        }&q=${encodeURIComponent(address ?? defaultLocation)},+Sweden`}
      ></iframe>
    </>
  );
}
