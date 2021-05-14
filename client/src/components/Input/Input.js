import React from 'react';
import './Input.css'
const Input=({setMessage,send,message})=>{
    return (
    <form>
        <input className='msginput' value={message} placeholder="Type your Message..."  onKeyPress={(event)=>event.key==='Enter'?send(event):null} onChange={(e)=>setMessage(e.target.value)}/>
        <button  className='msgbtn' onClick={e=>send(e)}>send</button>
    </form>)
}
export default Input;