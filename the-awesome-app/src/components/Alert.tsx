import React from "react";

type AlertProps = {
    message: string;
    severity?: string; //info, warning, success, error
    onClose?: () => void
}


//React.memo ==> 16.3 , optimization, creates a memoized copy of the component
// It will regenerate(memo) when the props or state change


const Alert = React.memo((props: AlertProps) => {

    console.log("Alert rendered");

    let severity = "info";
    if(props.severity){
        severity = props.severity;
        if(props.severity === "error"){
            severity = "danger"
        }
    }

    function handleClose(){

        console.log(props.onClose);
        if(props.onClose){
            
            props.onClose();
        }

    }

    return (
        <div className={`alert alert-${severity}`}>
            <p style={{width: "95%", display: "inline-block"}}>{props.message}</p>
            <button className={`btn btn-${severity}`} onClick={handleClose}>
                <span>&times;</span>
            </button>
        </div>
    )
})

export default Alert;