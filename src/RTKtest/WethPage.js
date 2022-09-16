/*eslint-disable*/
import { useSelector } from "react-redux"
const WethPage = () => {
    const selector = useSelector(G=>G)
    const text = selector.orUser;
    return(<div style = {{"textAlign" : "center"}} >
    <h1 style = {{"backgroundColor":"aqua"}}>Weth Page</h1> 
    <br/>
    <h1 style = {{"backgroundColor":"orange"}}>{!!text.title?text.title:text.a}</h1>
   </div>)
} 
export default WethPage