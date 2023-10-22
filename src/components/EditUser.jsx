import { React, useState, useEffect } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";

import { editUser, getUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  fname: "",
  lname: "",
  jobTitle: "",
  ecode: "",
  phone: "",
  email: "",
};

const EditUser = () => {
  const [user, setUser] = useState(defaultValue);
  const navigate = useNavigate();
  const {id} = useParams();

useEffect(() => {
  loadUserDetails();
},[])
  
const loadUserDetails = async () =>{
  const response = await getUser(id)
  setUser(response.data);
}
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Edit Employee</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="fname"
          value={user.fname}
        />
      </FormControl>

      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="lname"
          value={user.lname}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Job Title</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="jobTitle"
          value={user.jobTitle}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Employee Code</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="ecode"
          value={user.ecode}
        />
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value= {user.phone}
        />
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>

      

      <FormControl>
        <Button variant="contained" onClick={() => editUserDetails()}>
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
