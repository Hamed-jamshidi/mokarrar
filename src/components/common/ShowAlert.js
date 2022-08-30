import React, { useEffect } from "react";
import Alert from "@material-ui/lab/Alert";
function ShowAlert(message, type = "success") {
    useEffect(() => {
        const interval = setInterval(() => {
         return <Alert severity="success">{message}</Alert>
        }, 1000);
        return () => clearInterval(interval);
      }, []);
}
export default ShowAlert;
