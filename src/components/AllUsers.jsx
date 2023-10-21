import React, { useEffect, useState } from 'react'
import { Table, TableCell, TableHead, TableRow, TableBody,Button } from '@mui/material'
import {getUsers,deleteUser} from "../service/api"
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';


const Styledtable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
  
`
const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
    font-size: 20px;
  } 
`

const TBody = styled(TableRow)`
  & > td{
    font-size: 18px;
  }
`

const AllUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getAllUsers();
  },[]);

  const getAllUsers = async()=>{
   let response=  await getUsers();
   setUsers(response.data)
  }

  const deleteUserDetails = async (id) =>{
    await deleteUser(id);
    getAllUsers();
  }

  return (
    <Styledtable>
      <TableHead>
        <THead>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Job Title</TableCell>
          <TableCell>Employee Code</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Email</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {
          users.map(user => (
            <TBody key={user._id}>
              {/* <TableCell>{user._id}</TableCell> */}
              <TableCell>{user.fname}</TableCell>
              <TableCell>{user.lname}</TableCell>
              <TableCell>{user.jobTitle}</TableCell>
              <TableCell>{user.ecode}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button variant='contained' style={{ marginRight: 10}} component = {Link} to={`/edit/${user._id}`}>Edit</Button>
                <Button variant='contained' color='secondary'onClick={() => deleteUserDetails(user._id)}>Delete</Button>
              </TableCell>
            </TBody>
          ))
        }
      </TableBody>
    </Styledtable>
  )
}

export default AllUsers