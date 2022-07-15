import React from 'react'; 
import { Name ,Email , Phoneno ,Submit, Message } from './form' ;


export const Contactform = ()=>{ 
        return(
            <>
            <div classname="contactform">
            <div className="container py-5">  
            <div><Name />   </div>
            <div><Email />  </div>
            <div><Phoneno  placeholder="Type your no."/></div>
            <div><Message /> </div>
           <div> <Submit letsubmit={true}/></div>
            </div>
            </div> 
            </>
        )

}