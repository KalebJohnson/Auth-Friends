import React from 'react';
import FadeIn from 'react-fade-in';


const Card = ({ friend }) => {

  return (
     <FadeIn transitionDuration='4000' delay='250'>
        <div style = {{width:'40rem', backgroundColor:'darkGrey', border:'2px solid black', borderRadius:'.5rem', display:'flex', justifyContent:'center', alignItems:"center", flexDirection:'column', margin:'1rem', padding:'.5rem'}}>
        <h3>Name: {friend.name} </h3>
        <p>Age: {friend.age} </p>
        <p>Email: {friend.email} </p>
        </div>
    </FadeIn> 
  );
};

export default Card;