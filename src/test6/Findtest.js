import axios from "axios"
import React, { useState,useRef} from "react"

const id_find = async(setIdFind_State,setId_value,find_id_email) => {
    const data = find_id_email.current.value
    try{
    setId_value(await(await axios.post(`/login/${data}`,{email:data})
    ).data.userId)
    setIdFind_State(false) }
    catch(e){alert("이메일을 잘못입력하셨거나 가입된이메일이 아닙니다.")
    console.log(e)}}

export default function Findtest(){
const [IdFind_state,setIdFind_State]=useState(true)
const [id_value,setId_value] = useState("")
const find_id_email=useRef()
console.log(React)
    return(
    <>{IdFind_state?<><h1>ID 찾기</h1><>
    <input type="text" placeholder="E-mail" ref={find_id_email}/>
    <br/> <br/>
    <input type="submit" value="다음" onClick={()=>id_find(setIdFind_State,setId_value,find_id_email)}/>
    </></>
    :
    <><h1>가입하신 아이디는 "{id_value}" 입니다.</h1>
    <h1>*주의*</h1><h3>뒤로가기나 새로고침시 초기화면으로 돌아 갑니다.</h3>
    </>}</>)}