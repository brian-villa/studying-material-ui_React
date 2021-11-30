import React from "react"
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';


function App() {
  return (
    <>  
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World">
              
          </TextField>
        <Button variant="contained" color="primary">
            Hello World
        </Button>

       

    </>
  )
}

export default App;