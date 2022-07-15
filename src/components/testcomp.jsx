import React, { useState , useEffect } from "react";


export const Clock = ()=> {

    const [date, setDate] = useState(new Date());
 
        useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
            clearInterval(timerID); 
            }; 
        });

        function tick() {
            setDate(new Date());
        }

    return( 
      <div>
        <h2>It is {date.toLocaleTimeString()}.</h2> 
      </div>
    );
 

  }  
    


export const MyComponent = ()=> {   
    const [advice, setAdvice] = useState("");  

        useEffect(() => {
            const url = "https://api.adviceslip.com/advice";

            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const json = await response.json();
                    // console.log(json.slip.advice); 
                    setAdvice(json.slip.advice);
                } catch (error) {
                    console.log("error", error);
                }
            };

            fetchData();
        }, []); 

return (
    <>
        {advice} 
    </>
);

};
