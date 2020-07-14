import React, { useState, useEffect } from "react";
import Friend from "./Friend";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from 'axios';
import Card from './Card';
import FriendForm from "./FriendForm";


const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style = {{display:'flex', flexDirection:'column'}} >
      <FriendForm setFriends={setFriends}/>
      {friends.map((friend) => {
        return <Card friend={friend} />;
      })}
    </div>
  );
};

export default Friends;