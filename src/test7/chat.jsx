import { useRef } from "react"
import { useState } from "react"

const Chat = () => {
const [list , setList] = useState([])
const ref = useRef()
    return (<>
    {list.map(item=><div>{item}</div>)}
    <form onSubmit={e=>e.preventDefault()}>
<input type = "text" ref={ref}/><br/><input type = "submit" onClick = {
    ()=>setList(state=>[...state,ref.current.value])}/>
    </form></>)}
export default Chat