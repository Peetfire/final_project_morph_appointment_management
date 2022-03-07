import { TextField } from "@mui/material";
import * as React from "react";
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

export default function SingleViewComponent({ providerData }) {
  return (
    <Box
      sx={{
        boxShadow: 10, // theme.shadows[1]
        color: "primary.main", // theme.palette.primary.main
        m: 7, // margin: theme.spacing(1)
        p: {
          xs: 2, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
        },
        zIndex: "tooltip", // theme.zIndex.tooltip
        minWidth: 100,


      }}
      // className="provider-container"
    >
      <div className="display-panel">
        <div>
          <h2>Appointment Details</h2>
        </div>
        <div>
          <TextField label="Client name" placeholder="data">
            data goes here
          </TextField>
        </div>
        <div>
          <TextField
            sx={{
              boxShadow: 10, // theme.shadows[1]
              color: "secondary.main", // theme.palette.primary.main
              borderRadius: 2,
              m: 1, // margin: theme.spacing(1)
              p: {
                xs: 0.3, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
              },
            }}
            label="Date"
            placeholder="data"
          >
            data goes here
          </TextField>
        </div>
        <div>
          <TextField label="Start" placeholder="data">
            data goes here
          </TextField>
        </div>
        <div>
          <TextField label="End" placeholder="data">
            data goes here
          </TextField>
        </div>
        <div>
          <TextField label="End" placeholder="data">
            data goes here
          </TextField>
        </div>
        <div>
          <TextField label="Provider" placeholder="data">
            data goes here
          </TextField>
        </div>
        {/* <div>
          <TextField label="Location" placeholder="data">
            data goes here
          </TextField>
        </div> */}
      </div>
    </Box>
  );
}
