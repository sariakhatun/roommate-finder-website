import React from 'react';
import { useNavigate } from 'react-router';

const BrowseCard = ({room}) => {
    console.log(room)
    let navigate = useNavigate()
    let {availability,contactInfo,description,lifestyle,location,rent,roomType,title,_id} = room
    return (
       <div>
          
       </div>
    );
};

export default BrowseCard;