type AlertProps = {
    message: string;
    severity?: string; //info, warning, success, error
    onClose?: () => void
}

function Alert(props: AlertProps){

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
}

export default Alert;