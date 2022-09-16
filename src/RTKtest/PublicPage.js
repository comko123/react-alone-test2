/*eslint-disable*/
import { useSelector,useDispatch } from "react-redux"
import { inputData ,stack} from "../store"
import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const axiosing = async(payload) => {
try{payload(await(await axios(`https://jsonplaceholder.typicode.com/posts/1`)).data)}
catch(e){console.log(e)}}

const PublicPage = () => {
const [data,setData] = useState({}) 
const selector = useSelector(G=>G)
const dispatch = useDispatch()
const navigate = useNavigate()
const text = selector.orUser;
useEffect(()=>{axiosing(setData)},[])

    return(<div style = {{"textAlign" : "center"}}>
    <h1 style={{"backgroundColor":"green"}}>Public Page</h1>
    <input type = "button" value = "selector" onClick={()=>console.log(selector)}/>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <input type = "button" value = "dispatch" onClick={()=>dispatch(inputData(data))}/>
    <br/><br/>
    <h1 style = {{"backgroundColor":"orange"}}>{!!text.title?text.title:text.a}</h1>
    <input type = "button" value = "moth" onClick = {()=>navigate('moth')}/>&nbsp;&nbsp;&nbsp;
    <input type = "button" value = "prav" onClick = {()=>navigate('pravite')}/>&nbsp;&nbsp;&nbsp;
    <input type = "button" value = "weth" onClick = {()=>navigate('weth')}/>
    <br/><br/>
    <h1 style = {{"backgroundColor":"tomato"}}>Array Proporty</h1>
    <input type = "button" value = "arry" onClick = {()=>console.log(selector.orStock)}/>&nbsp;&nbsp;&nbsp;
    <input type = "button" value = "aded" onClick = {()=>dispatch(stack("string"))}/>
    </div>)
}
export default PublicPage