import crypto from 'crypto-js'
import {useState} from 'react'
const Crypto = () => {
const [state,setState] = useState("")
return(<>
<form onSubmit={e=>
         (()=>{ 
       e.preventDefault()
    console.log(state)})()}>
<input type = "text" placeholder='crypto test' onChange ={(e)=>{
    setState(crypto.AES.encrypt(e.target.value,process.env.REACT_APP_GITHUB_CLIENT_ID)+"")}}/>
<input type="submit"/>
</form></>)}
export default Crypto