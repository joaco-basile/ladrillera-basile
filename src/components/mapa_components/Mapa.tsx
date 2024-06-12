import React, { useState } from 'react';
import { APIProvider, ControlPosition, Map } from '@vis.gl/react-google-maps';

import { PlaceAutocompleteClassic } from './Autocomplete';
import { CustomMapControl } from './Mapa_control';
import MapHandler from './Map_handler';


export default function Mapa() {
  const api = import.meta.env.PUBLIC_MAPS_KEY

  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);

  return (
    <APIProvider apiKey={api}>
      <Map
        style={{ width: '1000px', height: '1000px' }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />
      <CustomMapControl
        controlPosition={ControlPosition.TOP}
        onPlaceSelect={setSelectedPlace}
      />
      <MapHandler place={selectedPlace} />
    </APIProvider>
  )
}