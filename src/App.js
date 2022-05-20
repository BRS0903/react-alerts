import React, { useReducer } from "react";
import { AlertReducer } from "./AlertReducer";
import AlertsExample from "./Components/AlertsExample";
import {  
  Grid,
} from "@mui/material";
import AlertManager from "./Components/AlertManager";
function App() {
  const [alerts, alertsDispatch] = useReducer(AlertReducer, []);
  console.log(alerts)
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={6}>
          <AlertsExample alertsDispatch={alertsDispatch} />
        </Grid>
        <Grid item xs={6}>
         <AlertManager alerts={alerts}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
