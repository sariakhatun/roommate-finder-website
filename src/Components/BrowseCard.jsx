import React from 'react';
import { useNavigate } from 'react-router';

const BrowseCard = ({room,index}) => {
    console.log(room,index)
    let navigate = useNavigate()
    let {availability,contactInfo,description,lifestyle,location,rent,roomType,title,_id} = room
    return (
       
    );
};

export default BrowseCard;