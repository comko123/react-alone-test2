import { useDispatch, useSelector } from "react-redux"
import {infoUser} from "../data"
import { addStyle,removeStyle,deduplicationStyle} from "../store"
 const userSeasonStyle = (...rest) =>{
return(<>
<h3>{rest[0]}</h3>
<form onSubmit = {e=>{e.preventDefault()
console.log(rest[4][rest[2]])}}>
<input type="submit" value = "제출"/><br/>
{rest[1].map((clothing,index)=>{
return (<div key = {index}>{clothing}<input type ="checkbox" value = {clothing} onClick ={e=>
  {if(e.target.checked){
    rest[3](addStyle({list:rest[2], value:e.target.value}))
    rest[3](deduplicationStyle({list:rest[2], value:e.target.value}))
  }
    else{
      rest[3](removeStyle({list:rest[2], value:e.target.value})) 
    }
}}/> <br/></div>)})}</form></>)}

export default function  Information() {
    const userInfo = Object.keys(infoUser)
    const selector = useSelector(item=>item)
    const {addStyleList} = selector
    const selectData = Object.keys(addStyleList)
    const dispatch = useDispatch()
    return (<><h3>내정보 수정하기</h3>
<h5>마이페이지&gt;내정보 수정하기</h5>
{userInfo.map((item,index)=>{
    return <div key={index}>
    {userSeasonStyle(userInfo[index],infoUser[item],selectData[index],dispatch,addStyleList)}
</div>})}
<br/></>)}