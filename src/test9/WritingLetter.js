import axios from "axios"
import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"

const WritingLetter = () => {
    const parms = useParams()
    const [content,setContet] = useState({})
    console.log(parms)
    useEffect(()=>{
        (async()=>{
            try {
    setContet(await(await axios(`https://jsonplaceholder.typicode.com/posts/${parms.index}`)).data)  
            } catch(error){console.log(error)}})()},[parms])
const {title,body} = content
return(<>
<h1>{title}</h1>
<br/>
<h3>{body}</h3>
<hr/>
<h4> 댓글 </h4>
<Outlet></Outlet>
</>)}
export default WritingLetter
//게시글 삭제및 수정 기능 구현 필요