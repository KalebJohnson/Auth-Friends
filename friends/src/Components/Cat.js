import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from './Card';
import FriendForm from "./FriendForm";


const Friends = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        setCats(res.data);
        console.log(res, "CATS")
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style = {{display:'flex', flexDirection:'column'}} >

    </div>
  );
};

export default Friends;