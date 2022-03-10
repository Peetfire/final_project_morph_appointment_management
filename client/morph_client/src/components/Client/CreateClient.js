
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
import { updateClient } from "../../service";
const CreateClient = ({}) => {
    
    const [pageToDispaly, setPageToDisplay] = useState("loading");
    const [clientId, setClientId] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName,setLastName]= useState("")
    const [email,setEmail]=  useState("")
    const [dateOfBirth,setDateOfBirth] = useState("")
    const [phoneNumber,setPhoneNUmber] = useState("")
    
    
    
    useEffect(() => {
        if(Object.keys().length !== 0){
        
            setPageToDisplay("content");
       
          
           
        }
    }, [singleClientData]);

   const handleCancelClick=()=>{
      setPage("Single Client")
    }
    const handleAddClick=()=>{
        setPage("Add Client")
      }
    const handleSubmit=(event)=>{
      event.preventDefault()
      const payload = {
        
        firstName: firstName,
        lastName: lastName,
        dob: dateOfBirth,
        phone: phoneNumber,
        email:email

    } 
  
    CreateClient(payload, clientId);
    
    setPage("Single Client")
    }
    
    
    
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
            <form onSubmit = {handleSubmit}>
            <div className="display-panel">
                <div>
                <h2 >Edit Client</h2>
                </div>
                
                <div>
                <TextField
                    onChange={(e)=>setFirstName(e.target.value)}
                    InputProps={{style: {fontSize: 18}}}
                    label="First Name"
                    
                    // size="small"
                >
                    data goes here
                </TextField>
                </div>
                <div>
                <TextField
                    onChange={(e)=>setLastName(e.target.value)}
                    InputProps={{style: {fontSize: 18}}}
                    label="Last name"
                   
                    // size="small"
                >
                    data goes here
                </TextField>
                </div>
                <div>
                 <TextField
                    onChange={(e)=>setDateOfBirth(e.target.value)}
                    InputProps={{style: {fontSize: 18}}}
                    label="Date of Birth"
                   
                    // size="small"
                >
                    data goes here
                </TextField>
                </div>
                <div>
                <TextField
                      onChange={(e)=>setPhoneNUmber(e.target.value)}
                    InputProps={{style: {fontSize: 18}}}
                    label="Phone"
                  
                    // size="small"
                >
                    data goes here
                </TextField>
                </div>
                <div>
                <TextField
                  onChange={(e)=>setEmail(e.target.value)}
                    InputProps={{style: {fontSize: 18}}}
                    label="email"
                   
                    // size="small"
                >
                    data goes here
                </TextField>
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
                    onClick={handleCancelClick}
                    size="large"
                >Cancel</Button>
                <Button 
                  type="submit"
                    style={{width: 100}}
                    sx={{
                        mt:3,
                        ml:4,
                        mb:2,
                    }}
                    variant="contained" 
                    
                    size="large"
                ></Button>
            </div>
           
            </div>
            </form>
            </Box>
            </div>
           
            
        );
    

    
        
        
    
        
       
    
    }
    }

export default EditClient