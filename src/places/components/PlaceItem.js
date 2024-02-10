import React, { useState } from 'react'
import Card from "../../shared/components/UIElements/Card"
import Button from "../../shared/components/FormElements/Button"
import "./PlaceItem.css"
import { Modal } from '../../shared/components/UIElements/Modal'

export const PlaceItem = (props) => {
  const [showMap, setshowMap] = useState(false)
  const openMap = ()=> setshowMap(true)
  const closeMap = ()=> setshowMap(false)
  return (
    <React.Fragment>
    <Modal show={showMap} onCancel={closeMap} header={props.address} contentClass="place-item__modal-content" footerClass="place-item__modal-actions" footer={ <Button onClick={closeMap}> CLOSE </Button> 
  } >
    <div className="map-container" style={{padding: "5px"}}>
      {/* <h2>THE MAP!</h2> */}
      <iframe title="map" width="100%" height="100%"

          src={'https://maps.google.com/maps?q=' + props.coordinates.lat.toString() + ',' + props.coordinates.lng.toString() + '&t=&z=15&ie=UTF8&iwloc=&output=embed'}></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=5a33be79e53caf0a07dfec499abf84b7b481f165'></script> 
    </div>
    </Modal> 
    <li className="place-item">
        <Card className="place-item__content">
        <div className="place-item__image">
            <img src={props.image} alt={props.title} />
            { console.log(props.image) }
        </div>
        <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3> {props.address} </h3>
            <p> {props.description} </p>
        </div>
        <div className="place-item__actions">
            <Button inverse onClick={openMap}>VIEW ON MAP</Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
        </div>
        </Card>
    </li>
    </React.Fragment>
  )
}
