import {React, useState} from 'react'
import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';

import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
  width : 50%;
  margin: 5% auto 0 auto;
  & > div{
    margin-top: 20px
  }
`

const defaultValue = {
  fname: "",
  lname: "",
  jobTitle: "",
  ecode: "",
  phone: "",
  email: "",
}

const AddUser = () => {

  const [user, setUser] = useState(defaultValue)

  const navigate = useNavigate();

  const onValueChange = (e)=>{
    setUser({ ...user, [e.target.name]:e.target.value})
    console.log(user)
  }

  const addUserDetails = async ()=>{
    await addUser(user);
    navigate('/all')
  }

  return (
      <Container>
        <Typography variant='h4'>Add Employee</Typography>
        <FormControl>
          <InputLabel>First Name</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "fname" />
        </FormControl>
        <FormControl>
          <InputLabel>Last Name</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "lname" />
        </FormControl>
        <FormControl>
          <InputLabel>Job Title</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "jobTitle" />
        </FormControl>

        <FormControl>
          <InputLabel>Employee Code</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "ecode" />
        </FormControl>

        <FormControl>
          <InputLabel>Phone Number</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "phone"  />
        </FormControl>

        <FormControl>
          <InputLabel>Email</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "email" />
        </FormControl>

        

        <FormControl>
          <Button variant='contained' onClick={()=> addUserDetails()}>Add User</Button>
        </FormControl>
      </Container>
  )
}

export default AddUser