import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerSvg from "../assets/marker.svg";

// export default function Map({ latitude, longitude }) {
//   const hasChoosenAddress = latitude != null && longitude != null;
//   const defaultLat = 63.0331902;
//   const defaultLon = 18.0652439;

//   const markerIcon = new Icon({
//     iconUrl: markerSvg.src,
//     iconSize: [32, 32],
//   });

//   return (
//     <>
//       {console.log("in component", latitude, longitude)}
//       <MapContainer
//         center={[latitude ?? defaultLat, longitude ?? defaultLon]}
//         zoom={hasChoosenAddress ? 13 : 5}
//         style={{ width: "100%", height: "500px" }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {hasChoosenAddress && (
//           <Marker position={[latitude, longitude]} icon={markerIcon} />
//         )}
//       </MapContainer>
//     </>
//   );
// }

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
