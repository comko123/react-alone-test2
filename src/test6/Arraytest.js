import axios from "axios"
import { useState,useRef } from "react"
import {useNavigate } from "react-router-dom"

const current_date = new Date()
const join_month = current_date.getMonth()+1
const getDate = current_date.getFullYear()+"년 "
+join_month+"월 "
+current_date.getDate()+"일 "
+current_date.getHours()+"시 "
+current_date.getMinutes()+"분"

class signUpData {
  constructor(...rest){
    this.userId=rest[0]
    this.password=rest[1]
    this.passoerdConfirm=rest[2]
    this.email=rest[3]
    this.nickname=rest[4]
    this.gender=rest[5]
    this.age=rest[6]
    this.height=rest[7]
    this.weight=rest[8]
    this.status="Y"
    this.category=120
    this.dropDate=0
    this.id=null
    this.regDate=getDate
    this.style=rest[9]  
  }
}
const inputTypeAndPalcehorder = {
    닉네임:["text","닉네임"],
    id:["text","ID"],
    email:["text","E-mail"],
    password:["password","비밀번호"],
    password2:["password","비밀번호 확인"]
 }
const selectUserData = {
    연령: ["10 ~ 19세","20 ~ 29세","30 ~ 39세","40 ~ 49세","50세 이상"],
    성별:["남자","여자"],
    신장: ["156 ~ 160cm","160 ~ 165cm","165 ~ 170cm","170 ~ 175cm","175이상"],
    체중: ["45 ~ 55kg","56 ~ 65kg","66 ~ 75kg","76 ~ 85kg","85kg 이상"],
    스타일:["빈티지","댄디","캐주얼","놈코어","스트릿"]
  }
 const userClientInput = {id:[],email:[],password:[],password2:[],nickname:[]}
 const userSelect = {성별:[],연령:[],신장:[],체중:[],스타일:[]}
const basicSetting = Object.keys(selectUserData)
const userSetting = Object.keys(inputTypeAndPalcehorder)
// const styleObject = Object.keys(selectUserCheck)
const signUpFunction = async(result,setResult,navigate) => {
  const {id,password,password2,email,nickname} = userClientInput
  const {성별,연령,신장,체중,스타일} = userSelect
const userInfo = new signUpData(id[0],password[0],password2[0],email[0],nickname[0],성별[0],연령[0],신장[0],체중[0],스타일)
try{  
setResult(await(await axios.post('/join',userInfo)).data)
return result&&typeof(result)==="object"?alert(result.errorMessag):typeof(result)==="string"?(alert(result),navigate(-1)):null
}
catch(e){console.log(e)}
console.log(userInfo)
}

const userInFormationRadio = (...rest) => {
return(<div key={rest[3]}><h3 style = {{"marginBottom":"0px"}}>{rest[1]}</h3>
{rest[0].map((childInformation,index)=>{
return (<div key = {index}>{childInformation}
<input type ="radio"name={rest[1]} value = {
  childInformation==="남성"||childInformation==="여성"?childInformation:index
} onClick ={(e)=>
  {
    if(!!!rest[2].length){rest[2].push(e.target.value)}
      else{
      rest[2].splice(rest[2].indexOf(e.target.value),1)
      rest[2].push(e.target.value)
    }
}}/> <br/></div>)})}</div>)
}

// const userInFormationCheckBox = (...rest) =>{
//   return(<div key = {rest[0]}>
//   <h3>{rest[0]}</h3>
//   {rest[1].map((clothing,index)=>{
//   return (<div key = {index}>{clothing}<input type ="checkbox" 
//   value = {rest[0]+`/${clothing}`} onClick ={e=>
//     {if(e.target.checked===true){
//      rest[2].push(e.target.value)  
//     rest[2].filter((element,index)=>rest[2].indexOf(element)===index)}
//       else{rest[2].splice(rest[2].indexOf(e.target.value),1)}
//   }}/> <br/></div>)})}</div>)
// }

const userInFormationInput = (...rest) => {
  return(
  <div key={rest[3]}><input type ={rest[0]} placeholder={rest[1]} onBlur={(e)=>{
  rest[2]&& rest[2].push(e.target.value)
  rest[2]&& rest[2].splice(0,rest[2].length-1)
  }}/><br/> <br/></div>)
}

  
export default function Arraytest (){
  const trans = useNavigate()
  const [result,setResult] = useState(null)
  const ref = useRef()
return(<>
  <h1>회원가입</h1>
  <form onSubmit={e=>e.preventDefault()}>
  {userSetting.map((item,index)=>userInFormationInput(inputTypeAndPalcehorder[userSetting[index]][0],item,userClientInput[item],index))}
  {basicSetting.map((item,index)=>userInFormationRadio(selectUserData[item],item,userSelect[item],index))}
  {/* {styleObject.map((item,index)=>userInFormationCheckBox(item,selectUserCheck[item],userSelect[styleObject[0]],index))} */}
  <br/>
 <input type="submit" value="가입"onClick={()=>{signUpFunction(result,setResult,trans)}}/>   
  <br/> <br/>
 <input type="button" value="홈페이지"onClick={()=>trans('/')}/>  
  </form>
  <div ref={ref} onClick = {()=>console.log(ref)}>123</div>
  </>)}