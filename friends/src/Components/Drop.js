import React from 'react';
import {  Menu, Dropdown, Button  } from 'antd';
import { Link } from 'react-router-dom';

const menu = (
  <Menu>
    <Menu.Item>
       <Button  className='antButton' type='ghost' style={{width:'100%'}}> <Link className="NavLink" to="/">Login</Link> </Button>
    </Menu.Item>

    <Menu.Item>
       <Button  className='antButton' type='ghost' style={{width:'100%'}}> <Link className="NavLink" to="/Friends">Friends List</Link> </Button>
    </Menu.Item>

    <Menu.Item>
       <Button  className='antButton' type='ghost' style={{width:'100%'}}> <Link className="NavLink" to="/catAttack">Cat Attack</Link> </Button>
    </Menu.Item>
    

  </Menu>
);

const Drop = () => {



return (
  <Dropdown overlay={menu} placement="bottomCenter" >
    <Button type='primary' style={{width:'10rem', border:'1px solid black'}} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Menu 
      </Button>
  </Dropdown>


);
}

export default Drop;