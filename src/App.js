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
import Location from "./test5/Location"
import Arraytest from "./test6/Arraytest"
import Findtest from "./test6/Findtest"
import Chat from "./test7/chat"
import Crypto from "./test8/crypto"
import Border from "./test9/Border"
import Comment from "./test9/Comment"
import Write from "./test9/Write"
import WritingLetter from "./test9/WritingLetter"
import Imp from "./test6/Imp"
import Imp1 from "./test7/Imp1"
import Imp2 from "./test8/Imp2"
const priceData = (event,setPrice) => {setPrice(event.target.value)}
export default function App() {
const [price , setPrice] = useState(null)
return (<>
    <Routes>
    <Route path="/" element={<PublicPage/>}/>
    <Route path="/imp" element={<Imp/>}/>
    <Route path="/imp1" element={<Imp1/>}/>
    <Route path="/imp2" element={<Imp2/>}/>
    <Route path="/arr" element={<Arraytest/>} /> 
    <Route path="/moth" element={<MothPage/>}/>
    <Route path="/weth" element={<WethPage/>}/>
    <Route path="/shop" element={<HomePage/>}/>
    <Route path="/reft" element={<MyClothing/>}/>
    <Route path="/refa" element={<Information/>}/>
    <Route path="/cookie" element={<TestCookie/>}/>
    <Route path="/loca" element={<Location/>}/>
    <Route path="/find" element={<Findtest/>}/>
    <Route path="/test" element={<InputTest price = {price}/>}>
    <Route path = "buy/:state" element={ <NumberFormat thousandSeparator={true} className="price" placeholder="구매가격" onBlur={(e)=>{priceData(e,setPrice)}}/>}/>
    <Route path = "sell/:state" element={<NumberFormat thousandSeparator={true} className="price" placeholder="판매가격" onBlur={(e)=>priceData(e,setPrice)}/>}/>
    <Route path = "give/:state" element={<h4> 나눔을 선택 하셨습니다.</h4>}/>
    <Route path = "recive/:state" element={<NumberFormat thousandSeparator={true} className="price" placeholder="대여비용" onBlur={(e)=>priceData(e,setPrice)}/>}/>
    </Route>
    <Route path="/border" element={<Border/>}>
    <Route path=":index" element={null}/>
    </Route>
    <Route path="/detail/:index" element={<WritingLetter/>}>
      <Route path="comment" element={<Comment/>}/>
      </Route>
      <Route path="/detail/write" element={<Write/>}/>
    <Route path="/pravite" element={<PravitePage/>}/>
    <Route path="/chatTest" element={<Chat/>}/>
    <Route path="/crypto" element={<Crypto/>}/>
    </Routes></>)}