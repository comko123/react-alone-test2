import axios from"axios"
import React,{useMemo, useState}from"react"
import { useEffect } from "react"
import {wheather,userLoginInfo}from"../data"

class ruby {
    constructor(lowTemp,highTemp,email){
        this.lowTemp = lowTemp
        this.highTemp = highTemp
        this.email = email
    }}

const Imp2 = ({content,link}) => {
    const [pending,setPending] = useState(true)
    const [regist,setRegist] = useState({})
    useMemo(()=>{
        (async()=>{
            const rubyLan = new ruby(wheather.lowTemp,wheather.highTemp,userLoginInfo.email)
            setRegist(await(await axios.post(link,rubyLan)).data)
           if(Object.keys(regist).length === 1){
            setPending(false)}})()
    },[])
    useEffect(()=>{
        if(Object.keys(regist).length === 2){
            alert(regist.errorMessage)
        }
    },[regist])
return(<>
<h1>{content}</h1>
{wheather.rain?<h4>외출시 우산을 챙기세요</h4>:null}
{pending?<h3>loading...</h3>
:
<div>
<h4> 최저 온도 </h4>    
<img src = {regist.clothesList[0]}/>
<h4> 최고 온도 </h4>
<img src = {regist.clothesList[1]}/>
</div>}</>)}
export default React.memo(Imp2)