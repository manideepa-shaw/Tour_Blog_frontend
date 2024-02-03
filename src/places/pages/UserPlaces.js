import React from 'react'
import { useParams } from 'react-router-dom'

import { PlaceList } from '../components/PlaceList'

export const UserPlaces = () => {
  const place=[
    {
      id:"p1",
      title:"Empire State Building",
      description:"One of the famous sky-scrapers in the world.",
      imageUrl:"https://static.toiimg.com/photo/71579199/empire-state-building.jpg?width=748&resize=4",
      address:"20 W 34th St., New York, NY 10001, United States",
      location:{
        lat:40.7484405,
        lon:-73.9882393
      },
      creator:"u1"
    },
    {
      id:"p2",
      title:"Empire State Building",
      description:"One of the famous sky-scrapers in the world.",
      imageUrl:"https://static.toiimg.com/photo/71579199/empire-state-building.jpg?width=748&resize=4",
      address:"20 W 34th St., New York, NY 10001, United States",
      location:{
        lat:40.7484405,
        lon:-73.9882393
      },
      creator:"u2"
    }
  ]
  
  const userId= useParams().userId;
  const filteredData = place.filter(p => p.creator==userId)

  return (
    <PlaceList items={filteredData}/>
  )
}
