import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Map = ({ data }) => {
  const apiKey = 'AIzaSyCm9_dwuffyZXhbwrBLls55wgmFJabZros'
  return (
    <section id="map">
      <h2>
        <FaMapMarkerAlt /> Find us
      </h2>
      <iframe
        className="map"
        frameBorder="0"
        sandbox="allow-scripts allow-same-origin allow-popups"
        title={data.schema.name}
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:${
          data.page.googlePlaceId
        }&key=${apiKey}`}
        allowFullScreen
      />
    </section>
  )
}

export default Map
