import React from 'react'
import { UserList } from '../components/UserList'

const Users = () => {
  const user=[
    {
      key:1,
      name:"Striver",
      id:"u1",
      places:5,
      image:'https://yt3.googleusercontent.com/mO-SCDJLJ7R2lEgVQ8kPB9a5stxPm9xyMQUcEW7Ik7nbKeKfYSOQFI8iSMqKRD8gdGH8WtHKBA=s900-c-k-c0x00ffffff-no-rj'
    },
    {
      key:2,
      name:"Aish Rai",
      id:"u2",
      places:50,
      image:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRYNYxE6EmNfH7RSw4pkFU0lpr-FptbvDX0z9QTe4Toiwi_QmM'
    },
    {
      key:3,
      name:"Mukesh Ambani",
      id:"u3",
      image:"https://rilstaticasset.akamaized.net/sites/default/files/2022-09/mukesh-ambani.png",
      places:25
    }
  ]
  return (
    <div>
      <UserList user={ user } />
    </div>
  )
}

export default Users