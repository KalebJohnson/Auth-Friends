import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button } from 'antd';

const FriendForm = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", formValues)
      .then((res) => {
        console.log(res);
        props.setFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  const putForm = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put("http://localhost:5000/api/friends/1", formValues)
      .then((res) => {
        console.log(res);
        props.setFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteForm = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete("http://localhost:5000/api/friends/1", formValues)
      .then((res) => {
        console.log(res);
        props.setFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
<div>
    <form onSubmit={submitForm} style = {{display:'flex', flexDirection:'column', width:'40rem'}}>
      <input
        type="text"
        name="name"
        placeholder='Name'
        value={formValues.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        placeholder='Age'
        value={formValues.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder='Email'
        value={formValues.email}
        onChange={handleChange}
      />
      <button>Add Friend</button>
    </form>

    <form  onSubmit={putForm} >
    <input style = {{width:'20rem'}}
        type="text"
        name="name"
        placeholder='New Name for Rachel'
        value={formValues.name}
        onChange={handleChange}
      />

      <button style = {{width:'20rem'}}> New Name </button>
    </form>

    <form onSubmit={deleteForm} >
      <button style = {{width:'40rem'}}> Good bye Rachel </button>
    </form>
</div>
  );
};

export default FriendForm;