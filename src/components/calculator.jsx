import React , {useState} from 'react';

export const Mycalculator = () =>{

    const createbtns = () =>{
        const btndigits = [];

        for(let i = 1 ; i < 10 ; i++){
                btndigits.push(
                    <button key={i}>{i}</button>
                )
        }
        return btndigits;
    }
   const [text , settext] = useState('hi my name is'); 
const settonone = ()=>{
   let newtext =  text.toUpperCase();
   settext(newtext); 
}
   const changehandle = (events)=>{
       settext(events.target.value)
   }
return(
    <div className="calculator-main">
        <div className="container my-4">
            <h1 className="text-center ">Calculate Anything</h1>
            <div className="calc-body">
                <input  className="calc-display w-100 bg-dark text-white" value={text} onChange={changehandle} placeholder="0"/>
                <div className="calcall-btns row mx-0">
                <div className="col-10 calcallnumb-btns px-0">{createbtns()}</div>
                <div className="col-2 calc-opretors px-0"> 
                <button onClick={settonone} className="w-100">Del</button>
                <button className="w-100">/</button>
                <button className="w-100">+</button>
                <button className="w-100">-</button>
                <button className="w-100">*</button>
                <button className="w-100">=</button>        
                </div>    
                </div>
                    
            </div>     
            
        </div>    
    
    </div> 
)
}

