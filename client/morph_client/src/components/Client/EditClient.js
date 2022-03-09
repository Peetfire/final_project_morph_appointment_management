
import * as React from "react";
import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import { fontSize, width } from "@mui/system";
import { TextField, Button, MenuItem} from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import format from "date-fns/format";
import { TimePicker } from "@mui/lab";
const EditClient = ({singleClientData,}) => {
const [pageToDispaly, setPageToDisplay] = useState("loading");
const [clientId,setClientid]= useState("")
const [payload,setPayload] = useState("")
  
useEffect(() => {
  if(Object.keys(singleClienttData).length !== 0){
     setPageToDisplay("content")

  }
}, [singleClientData]);

// const clients = providerClients.map(client => {
//   return{
//       value: client.id,
//       label: client.firstName + " " + client.lastName
//   }
// })


// const locations = locationData.map(location => {
//   return{
//       value: location.id,
//       label: location.name
//   };
// })

// const therapists = therapistData.map(therapist => {
//   return{
//       value: therapist.id,
//       label: therapist.firstName + " " + therapist.lastName,
//       name: therapist.serviceType
//   }
// })

if(pageToDispaly === "loading"){
  return <div>Loading...</div>
}
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
      <form onSubmit={handleUpdateClick}>
      <div className="display-panel">
          <div>
          <h2 >Edit Client</h2>
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
              InputProps={{style: {fontSize: 18}}}
              label="Client name"
              defaultValue={singleAppointmentData.client.id}
              value={clientId}
              select
              onChange={handleClientChange}
              // size="small"
          >
              {clients.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                      {option.label}
                  </MenuItem>
              ))}
          </TextField>
          </div>
          <div>
          <TextField
              // sx={{
              // // boxShadow: 5, // theme.shadows[1]
              // color: "secondary.main", // theme.palette.primary.main
              // borderRadius: 2,
              // // m: 0.5, // margin: theme.spacing(1)
              // p: {
              //     // xs: 0.4, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
              // },
              // }}
              InputProps={{style: {fontSize: 18}}}
              label="Appointment Type"
              value={aptType}
              // size="small"
          >
              data goes here
          </TextField>
          </div>
          <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                  sx={{
                      boxShadow: 5, // theme.shadows[1]
                      color: "secondary.main", // theme.palette.primary.main
                      borderRadius: 2,
                      m: 0.5, // margin: theme.spacing(1)
                      p: {
                          xs: 0.4, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
                      },
                  }}
                  InputProps={{style: {fontSize: 18}}}
                  size="small"
                  label="Date"
                  inputFormat="dd/MM/yyyy"
                  value={dateValue}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
              />
          </LocalizationProvider>
          </div>
          <div id="timeWrapper">
              <div id="startTime">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <TimePicker
                          
                          InputProps={{style: {fontSize: 18}}}
                          label="Start Time"
                          value={startValue}
                          minutesStep={15}
                          onChange={handleStartTimeChange}
                          renderInput={(params) => <TextField {...params} />}
                      />   
                  </LocalizationProvider>
              </div>
              <div id="endTime" >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <TimePicker
                          InputProps={{style: {fontSize: 18}}}
                          label="End Time"
                          value={endValue}
                          minutesStep={15}
                          onChange={handleEndTimeChange}
                          renderInput={(params) => <TextField {...params} />}
                      />
                  </LocalizationProvider>
              </div>
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
              InputProps={{style: {fontSize: 18}}}
              label="Therapist"
              defaultValue={singleAppointmentData.provider.id}
              value={providerId}

              // size="small"
              select
              onChange={handleTherapistChange}
          >
              {therapists.map((option) => (
                  <MenuItem key={option.value} value={option.value} name={option.value}>
                      {option.label}
                  </MenuItem>
              ))}
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
              InputProps={{style: {fontSize: 18}}}
              label="Location"
              defaultValue={singleAppointmentData.location.id}
              value={locationId}
              // size="small"
              select
              onChange={handleLocationChange}
          >
              {locations.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                      {option.label}
                  </MenuItem>
              ))}
          </TextField>
          </div>
      </div>
      <div>
          <Button 
              style={{width: 100}}
              sx={{
                  mt:3,
                  mr:4,
                  mb:2,
              }}
              variant="contained" 
              onClick={handleCancleClick}
              size="large"
          >Cancle</Button>
          <Button 
              style={{width: 100}}
              sx={{
                  mt:3,
                  ml:4,
                  mb:2,
              }}
              variant="contained" 
              onClick={handleUpdateClick}
              size="large"
          >Update</Button>
      </div>
      </form>
      </Box>
      </div>
      
  );
  function handleClientChange(newValue){
      setClientId(newValue);
  }

  function handleUpdateClick(){
      const st = format(new Date(startValue), "hh:mm")
      const et = format(new Date(endValue), "hh:mm")
      const cId = String(clientId)
      const payload = {
          client: {id:clientId},
          firstName :{id:providerId},
          lastName: a,
          date: dateValue,
          startTime: st,
          endTime: et,
          location: {id:locationId},
          room: {id: 1}
      }
      console.log(payload)
      console.log(aptId)
      updateAppointment(payload, aptId);

  }
  function handleCancelClick(){
      setPage("Single Appointment")
  }


  function handleTherapistChange(event){
      setProviderId(event.taget.value)
      for(const therapist of therapists){
          if(therapist.value === event.target.value){
              setAptType(therapist.name)
          }
      }
  }

  

  function handleEndTimeChange(newValue){
      setEndValue(newValue)
  }
}
}

export default EditClient