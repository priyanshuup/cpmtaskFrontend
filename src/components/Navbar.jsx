import React from 'react'
import { AppBar , Toolbar, styled } from '@mui/material' ;
import "../App.css"
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background : #000000;
    color: white;
`

const Tabs = styled(NavLink)`
    font-size : 20px;
    margin-right: 40px;
    color: inherit;
    text-decoration: none;
`

const Navbar = () => {
  return (
   <Header position='static'>
        <Toolbar className='navelem'>
            <Tabs className="logo" to='/'><img src="https://www.in.cpm-int.com/hubfs/CPM_Theme_2021/images/home_Page/CPM%20Logo.svg" alt="" /></Tabs>
            <Tabs to = '/'>CPM India</Tabs>
            <Tabs to= '/all'>All Users</Tabs>
            <Tabs to = '/add'>Add User</Tabs>
        </Toolbar>
   </Header>
  )
}

export default Navbar