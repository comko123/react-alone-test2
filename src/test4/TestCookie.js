import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const TestCookie = () => {
  const fog = () => {
    window.addEventListener('beforeunload',()=>{ sessionStorage.setItem("b","value")})
}
    useEffect(() => {
        console.log('1')
        return() => {
        sessionStorage.setItem("a","value")
          fog()
      }
      }, [])
      const navi = useNavigate()
return <>
<h1>clean up</h1><br/>
<input type = "button" value = "제출" onClick = {()=>navi('/refa')}/>
</>
}
export default TestCookie