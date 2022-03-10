import * as React from "react";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { fontSize, width } from "@mui/system";
import { TextField, Button} from "@mui/material";
import {withStyles, styled} from "@mui/styles";
import {TextFieldProps} from "@material-ui/core"

const SingleClient = ({singleClientData,setPage}) => {
     // Get data to fill in fields
  // Get data to fill in fields
  const [pageToDispaly, setPageToDisplay] = useState("loading")
  useEffect(() => {
      if(Object.keys(singleClientData).length !== 0){
         
          setPageToDisplay("content")
      }
  }, [singleClientData]);

  // display loading if data is not there yet
  if(pageToDispaly === "loading"){
      return <div>Loading...</div>
  }
  // Show the stuff!
  if(pageToDispaly === "content"){
      return (
          <div>
          <Box
          style={{width: 550}}
          sx={{
              boxShadow: 10, // theme.shadows[1]
              color: "primary.main", // theme.palette.primary.main
              m: "auto", // margin: theme.spacing(1)
              p: {
              xs: 2, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
              },
              zIndex: "tooltip", // theme.zIndex.tooltip
              minWidth: 100,
              "& .MuiTextField-root": { m: 1, width: "20ch" },
          }}
          noValidate
          autoComplete="off"

          // className="provider-container"
          >
          <div className="display-panel">
              <div>
              <h2>Client Details</h2>
              </div>
              <div>
              <TextField
                  // sx={{
                      
                  //     boxShadow: 5, // theme.shadows[1]
                  //     color: "secondary.main", // theme.palette.primary.main
                  //     borderRadius: 2,
                  //     m: 0.5, // margin: theme.spacing(1)
                  //     p: {
                  //         xs: 0.4, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                  //     },
                  // }}
                  InputLabelProps={{style: {fontSize: 18} }}  // shift lable to right a wee bit!
                  InputProps={{style: {fontSize: 18}}}
                  label="Client name"
                  defaultValue={singleClientData.firstName + " " + singleClientData.lastName}
                  disabled={true}
              >
                  data goes here
              </TextField>
              </div>
              <div>
              <TextField
                  className="disabledInput"
                  // sx={{
                      
                  //     boxShadow: 5, // theme.shadows[1]
                  //     color: "secondary.main", // theme.palette.primary.main
                  //     borderRadius: 2,
                  //     m: 0.5, // margin: theme.spacing(1)
                  //     p: {
                  //         xs: 0.4, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                  //     },
                  // }}
                  InputLabelProps={{style: {fontSize: 18} }}  // shift lable to right a wee bit!
                  InputProps={{style: {fontSize: 18}}}
                  label="Date of Birth"
                  defaultValue={singleClientData.dob}
                  disabled
              >
                  data goes here
              </TextField>
              </div>
              <div>
              <TextField
                  // sx={{
                  // boxShadow: 5, // theme.shadows[1]
                  // color: "secondary.main", // theme.palette.primary.main
                  // borderRadius: 2,
                  // m: 0.5, // margin: theme.spacing(1)
                  // p: {
                  //     xs: 0.4, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                  // },
                  // }}
                  InputLabelProps={{style: {fontSize: 18} }}  // shift lable to right a wee bit!
                  InputProps={{style: {fontSize: 18}}}
                  label="Phone Number"
                  defaultValue={singleClientData.phone}
                  disabled
              >
                  data goes here
              </TextField>
              </div>
              <div>
              <TextField
                  // style={{width: 150}}
                  // sx={{
                  // boxShadow: 5, // theme.shadows[1]
                  // color: "secondary.main", // theme.palette.primary.main
                  // borderRadius: 2,
                  // m: 0.5, // margin: theme.spacing(1)
                  // p: {
                  //     xs: 0.4, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                  // },
                  // }}
                  InputLabelProps={{style: {fontSize: 18} }}  // shift lable to right a wee bit!
                  InputProps={{style: {fontSize: 18}}}
                  label="Email"
                  defaultValue={singleClientData.email}
                  disabled
              >
                  data goes here
              </TextField>

              </div>
          </div>
          <div>
              <Button 
                  style={{width: 100}}
                  sx={{
                      mr:4,
                      mt:3,
                      mb:2,
                  }}
                  variant="contained" 
                  onClick={handleEditClick}
                  size="large"
              >Edit</Button> 
               <Button 
                  style={{width: 100}}
                  sx={{
                      ml:4,
                      mt:3,
                      mb:2,
                  }}
                  variant="contained" 
                  onClick={handleEditClick}
                  size="large"
              >Cancel</Button>
          </div>
          
          </Box>
          </div>
      );
      function handleEditClick(){
          setPage("Edit Client")
      }
  }
}

export default SingleClient