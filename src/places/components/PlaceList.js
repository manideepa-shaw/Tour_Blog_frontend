import React from 'react'

import "./PlaceList.css"
import { PlaceItem } from './PlaceItem'
import Card from "../../shared/components/UIElements/Card"
export const PlaceList = (props) => {
    if(props.items.length===0)
    {
        return (
            <div className="place-list center">
            <Card>
            <h2>No Places Found!!! Maybe create one?</h2>
            <button>Share Place</button>
            </Card>
            </div>
          )
    }
    return(
        <ul className='place-list'>
            {
                props.items.map(place => <PlaceItem key={place.id} 
                id={place.id}
                image={place.imageUrl}
                title={place.title}
                description={place.description}
                address={place.address}
                creatorID={place.Creator}
                coordinates={place.location}
                /> )
            }
            { console.log("Passing : "+props.items[0].location.lat ) }
            
        </ul>
    )
}
