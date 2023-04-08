type StatusProp = {
    status:  'loading'| 'success' | 'error' //union of string literals
}

export const Status = (props: StatusProp)=>{
    let message;
    if(props.status==="loading"){
        message = "Loading..."
    }
    else if(props.status ==="success"){
        message = "Data fetched successfully"
    }
    else if(props.status === "error"){
        message = "Error fetching Data"
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}