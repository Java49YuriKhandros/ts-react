import React, { useEffect } from 'react';
import { Alert } from './Alert';

type InputProps = {
    inputId: string;
    inputProcess: (value: string)=> string;
}
export const Input: React.FC<InputProps> = ({inputId, inputProcess}) => {
    let inputElement: HTMLInputElement | null 
    const [flAlert, setFlag] = React.useState(false);
    const [message, setMessage] = React.useState('');
    function processGo(): void {
        setFlag(false);
        const messageRet: string = inputProcess(inputElement!.value);
        if (messageRet == '') {
            inputElement!.value = '';
        }else{
            setFlag(true);
            setMessage(messageRet);
        }
        
    }
useEffect(()=> {
    inputElement = document.getElementById(inputId) as HTMLInputElement;
})

    return (
    <div>
        <input id={inputId}/>
        <button onClick={processGo}>GO</button>
    {flAlert && <Alert type={'error'} message={message}/>}
    </div>)
}