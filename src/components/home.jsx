import React from "react";

export const Home = () =>{  
    // const fulldata = [{ title : "test1",
    //                 class : "one test name" ,
    //                 marks : 25
    //                 },
    //                 {title : "test2",
    //                 class :  "second test name" ,
    //                 marks : 35
    //                 },
    //                 {title : "test3",
    //                 class :  "third test name" ,
    //                 marks : 66
    //                 },
    //                 {title : "test4",
    //                 class :  "forth test name" ,
    //                 marks : 75
    //                 },
    //                 {title : "test5",
    //                 class :  "fifth test name" ,
    //                 marks : 68
    //                 } 
    //             ];
    //         //    console.log(Object.values(fulldata[2].marks)) ; 

function yoou(){
// let  inx = document.getElementById("showmarks").value; 
// let  markss = fulldata[1].marks;
// console.log(markss) 
// markss > 0 && markss < 25 ? alert("bye bye ") : markss >= 25 && markss <= 50 ? alert("above 25") : markss >= 50 && markss <= 75 ? alert("above 50") : markss >= 75 && markss <= 100 ? alert("balle balle") : alert("nothing"); 


let numbrs = 25; 
switch(numbrs){
    case  25 : alert("above 25 ");
    break;
    case  30  : alert("above 30");
    break;
    default :;

}
//  
// if (fulldata.marks >= 0) {
// console.log("byebye");
// } else if(fulldata.marks >= 25){ 
// console.log("25 se up");
// } else{
// alert("50 se up")
// }

}  
 
// yoou();

    return(
        <>
        <div> <h1 className="text-center my-2">Home page</h1>
        </div>
        <input id="showmarks" type="number"   />
        <button onClick={yoou}>fsdfsf</button>    
        </>
    )
} 