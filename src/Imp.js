// /*eslint-disable */
import axios from "axios"
import { useMemo } from "react"
import { useEffect, useState } from "react"
const Imp = () => {
    const [regis,setRegis] = useState({})
    const [result,setResult] = useState(true)
    useMemo(()=>{
        (async()=>{
            setRegis(await(await axios('https://jsonplaceholder.typicode.com/posts/4')).data)
            setResult(false)})()},[])
            
    useEffect(()=>{
        if(Object.keys(regis).length === 2){
            alert(regis.errorMessage)
        }
        else return
    },[regis])
return(<>
 <h1>날씨 정보로 추천받기</h1>
 <form>
    <input type = "button" value="남성" 
    onClick={e=>{
        (async()=>{
            e.preventDefault()
            try {
                setRegis(await(await axios('https://jsonplaceholder.typicode.com/posts/2')).data)
                setResult(false)
            } catch(error){console.log(error)}})()}}
    /><input type = "button" value="여성"
    onClick={e=>{
        (async()=>{
            e.preventDefault()
            try {
                setRegis(await(await axios('https://jsonplaceholder.typicode.com/posts/1')).data)
                setResult(false)
            } catch(error){console.log(error)}})()}}
    />
 </form>
 <br/>
 <div>
{result?<div>loading...</div>:
Object.keys(regis).length===3?alert("fal"):
<>
<div>최저온도 <br/> {regis.title} </div><br/>
<div>최고온도 <br/>  {regis.body}</div>
</>}</div></>)}
export default Imp