import { Fragment, useState, useEffect } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";

import "./Map.css";

let markers = [
  {
    id: 1,
    name: "Marthahalli",
    position: { lat: 12.9579968, lng: 77.6719213 },
    type: 'ALL'
  },
  {
    id: 2,
    name: "Whitefield",
    position: { lat: 12.9926503, lng: 77.7516797 },
    type: 'PAPER'
  },
  {
    id: 3,
    name: "KR Puram",
    position: { lat: 13.0053204, lng: 77.6842826 },
    type: 'GLASS'
  },
  {
    id: 1,
    name: "Bommanahalli",
    position: { lat: 12.9006233, lng: 77.6110096 },
    type: 'ALL'
  },
  {
    id: 2,
    name: "Kengeri",
    position: { lat: 12.9005648, lng: 77.4692307 },
    type: 'PAPER'
  },
  {
    id: 3,
    name: "Yeshwantpur",
    position: { lat: 13.0270872, lng: 77.5251987 },
    type: 'GLASS'
  },
  {
    id: 1,
    name: "Hoodi",
    position: { lat: 12.9883843, lng: 77.700631 },
    type: 'ALL'
  },
  {
    id: 2,
    name: "Indiaranagar",
    position: { lat: 12.972939, lng: 77.6279344 },
    type: 'PAPER'
  },
  {
    id: 3,
    name: "HSR Layout",
    position: { lat: 12.9102576, lng: 77.625223 },
    type: 'GLASS'
  },
  {
    id: 3,
    name: "TRUCK1",
    position: { lat: 12.9102576, lng: 77.625223 },
    type: 'TRUCK_ON'
  },
  {
    id: 3,
    name: "TRUCK2",
    position: { lat: 12.9102576, lng: 77.685223 },
    type: 'TRUCK_ON'
  },
  {
    id: 3,
    name: "TRUCK3",
    position: { lat: 12.9602576, lng: 77.625223 },
    type: 'TRUCK_OFF'
  }
];

const markersTruck = [
  {
    id: 3,
    name: "TRUCK1",
    position: { lat: 12.9102576, lng: 77.625223 },
    type: 'TRUCK_ON'
  },
  {
    id: 3,
    name: "TRUCK2",
    position: { lat: 12.9102576, lng: 77.685223 },
    type: 'TRUCK_ON'
  },
  {
    id: 3,
    name: "TRUCK3",
    position: { lat: 12.9602576, lng: 77.625223 },
    type: 'TRUCK_OFF'
  }
];

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAkqtDS3KSBUXnomNGi3y_R6RduE5yzzPY',
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const [markerBin, setMarkerBin] = useState([])
  const [markerTrucks, setMarkerTrucks] = useState([])
  useEffect(() => {
    fetch("http://asset-logistics-srv-env.eba-vfppbrqv.us-east-1.elasticbeanstalk.com/api/WasteBins", 
          {mode:'cors'}
          ).then(response => response.json())
      .then(json => setMarkerBin(json))
      .finally(() => {
      })

      fetch("http://asset-logistics-srv-env.eba-vfppbrqv.us-east-1.elasticbeanstalk.com/api/Vehicles", 
      {mode:'cors'}
      ).then(response => response.json())
  .then(json => setMarkerTrucks(json))
  .finally(() => {
  })
  }, [])

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center">Bins on Map</h1>
        <div style={{ height: "90vh", width: "100%" }}>
          {isLoaded ? (
            <GoogleMap
              center={{ lat: 12.9539456, lng: 77.4661259 }}
              zoom={10}
              onClick={() => setActiveMarker(null)}
              mapContainerStyle={{ width: "100%", height: "90vh" }}
            >
              
              
              {markerBin.map(({ binId, address, location, latitude, longitude, type, fillPercentage }) => (
                <MarkerF
                  key={binId}
                  position={{ 'lat': parseFloat(latitude), 'lng': parseFloat(longitude) }}
                  onClick={() => handleActiveMarker(binId)}
                  icon={{
                    url:require(`../../assets/${type}.png`),
                    scaledSize: { width: 30, height: 30 }
                  }}
                >
                  {activeMarker === binId ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(binId)}>
                      <div>
                        <h3>{binId}</h3>
                        <p>{address} , {location}</p>
                        <p>Type: {type}</p>
                        <p>Percentage Filled: {fillPercentage}</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}


{/* 
              {markerTrucks.map(({ vin, licensePlate, location, logitute, latitude, state, speed }) => (
                <MarkerF
                  key={vin}
                  position={{ 'lat': parseFloat(latitude), 'lng': parseFloat(logitute) }}
                  onClick={() => handleActiveMarker(vin)}
                  icon={{
                    url:require(`../../assets/TRUCK_${state == 0 ? 'OFF' : 'ON'}.png`),
                    scaledSize: { width: 50, height: 50 }
                  }}
                >
                  {activeMarker === vin ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{licensePlate}, {vin}</p>
                        <p>Location: {location}</p>
                        <p>Speed: {speed} km/hr</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))} */}
            </GoogleMap>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default Map;