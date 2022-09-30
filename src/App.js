import { useState } from "react"
import InputTest from "./test/InputTest"
import MothPage from "./RTKtest/MothPage"
import WethPage from "./RTKtest/WethPage"
import {Routes,Route} from "react-router-dom"
import PublicPage from "./RTKtest/PublicPage"
import NumberFormat from 'react-number-format'
import PravitePage from "./RTKtest/PravitePage"
import HomePage from "./test3/HomePage"
import MyClothing from "./refactoring/MyClothing"
import Information from "./refactoring/Information"
import TestCookie from "./test4/TestCookie"
import {ReactQueryDevtools} from "react-query/devtools"
import Location from "./test5/Location"
const priceData = (event,setPrice) => {setPrice(event.target.value)}
export default function App() {
const [price , setPrice] = useState(null);
return (<>
<ReactQueryDevtools initialIsOpen={true}/>
    <Routes>
    <Route path="/" element={<PublicPage/>}/>
    <Route path="/moth" element={<MothPage/>}/>
    <Route path="/weth" element={<WethPage/>}/>
    <Route path="/shop" element={<HomePage/>}/>
    <Route path="/reft" element={<MyClothing/>}/>
    <Route path="/refa" element={<Information/>}/>
    <Route path="/cookie" element={<TestCookie/>}/>
    <Route path="/loca" element={<Location/>}/>
    <Route path="/test" element={<InputTest price = {price}/>}>
    <Route path = "buy/:state" element={ <NumberFormat thousandSeparator={true} className="price" placeholder="구매가격" onBlur={(e)=>{priceData(e,setPrice)}}/>}/>
    <Route path = "sell/:state" element={<NumberFormat thousandSeparator={true} className="price" placeholder="판매가격" onBlur={(e)=>priceData(e,setPrice)}/>}/>
    <Route path = "give/:state" element={<h4> 나눔을 선택 하셨습니다.</h4>}/>
    <Route path = "recive/:state" element={<NumberFormat thousandSeparator={true} className="price" placeholder="대여비용" onBlur={(e)=>priceData(e,setPrice)}/>}/>
      </Route>
    <Route path="/pravite" element={<PravitePage/>}/>
    </Routes>
      </>
  )
}