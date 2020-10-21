import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      table: {
        minWidth: 650,
      },
    },
  }));

const Form = () =>{
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    // Axios.get('http://localhost:3049/select').then(
    //   (response) => {
    //     setUserDetails(response.data);
    //   }
    // );
  });

  const submitData = () => {
    Axios.post('http://localhost:3049/register', 
    {fname: firstname,lname: lastname});
      setUserDetails(
        [
          ...userDetails,
          {
            FirstName : firstname,
            LastName : lastname
          }
        ]
      );
  }
  const classes = useStyles();
 

    return(
        <div>
            <h1>WelCome To User Registeration</h1>
            <form className={classes.root}>
            <TextField id="standard-basic" label="First Name" name="fname" onChange={(e) => {
              setFirstName(e.target.value)
            }} /><br />
            <TextField id="standard-basic" label="Last Name" name="lname" onChange={(e) => {
              setLastName(e.target.value)
            }}  /><br />
            <Button variant="contained" color="primary" href="#contained-buttons" onClick={submitData}>
                Submit
            </Button>
            </form>
            <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow >
                <TableCell>FullName </TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">UserName</TableCell>
                <TableCell align="right">Created At</TableCell>
                <TableCell align="right">Updated At</TableCell>
                <TableCell align="right">Active Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody> 
              {
                userDetails.map(
                  (val) => ( <TableRow key={val.FirstNam}> 
                        <TableCell >{val.FirstName}</TableCell>
                        <TableCell align="right">{val.LastName}</TableCell>
                        <TableCell align="right">{val.username}</TableCell>
                        <TableCell align="right">{val.createdAt}</TableCell>
                        <TableCell align="right">{val.updatedAt}</TableCell>
                        <TableCell align="right">{val.isActive}</TableCell>
                        </TableRow>
                  )
                )
              }
              </TableBody>
              </Table>
            </TableContainer>
        </div>
    )
}

export default Form;