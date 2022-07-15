import React from "react";

     
//  conditional rendering of components 

// By if else 

export const Loggedin = (props)=> {
    if(props.notloggedin) {
        return (
            <div>Not Logged in</div>
        )
    }
    else {
        return (
        <div>logged in</div>
        )
    }
} 

export const Name = (props)=> {
    if(props.showname) {
        return (
            <>Not Correct name</>

        )
    } else {
        return (
            <><input type="Text"  placeholder="Name" /> </>
        )
    }
}  

export const Email = (props)=> {
    if(props.email) {
        return (
        <>Not Correct mail</> 
        )
    }
    else {
        return (
            <>
        <input type="email" placeholder="Email" /> 
        </>
        )
    }
}       


// conditional rendering By Ternary opretor  


export const Phoneno = (props)=> {
    return props.number
    ? (
        <>not correct no</> 
      )
    : (
      <><input type="number" placeholder={props.placeholder} /></>       
    )
}

export const Message = (props)=> {

    return props.message
    ? (       
      <>No message reqired</>     
    )
    : (
        <>
         <textarea  placeholder={props.placeholder}/>  
        </> 
      )
}

export const Submit = (props)=> { 

    return props.letsubmit
    ? ( 
    <button className="btn btn-secondary">Submit</button>
      )
    : (
      <div></div>
      )
}


Phoneno.defaultProps = {
    placeholder : "Phone no"
}


Message.defaultProps = {
    placeholder : "Message"
}

