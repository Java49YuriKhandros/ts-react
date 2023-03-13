import React from 'react';

type AlertProps = {
    type: "warning" | "info" | "error";
    message: string
}

export  const  Alert: React.FC<AlertProps> = ({type, message})=> {
    let backGround: 'red' | 'green' | 'yellow';
    // if (type == "error") {
    //     backGround = 'red';
    // }else if (type == "info"){
    //     backGround = 'green';
    // }else {
    //     backGround = "Yellow";
    // }
    switch (type){
     case "error": backGround = 'red'; break;
     case "info": backGround = 'green'; break;
     case "warning": backGround = "yellow"
    }
    return <p style={{backgroundColor: backGround}}>{message}</p>
}