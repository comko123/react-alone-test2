/*eslint-disable*/
import './test.moudule.scss'
import React, { useState,useEffect} from 'react'
import {Outlet,Link,useParams} from "react-router-dom"
import { catergory,stateData,productManne ,synthesisProduct} from '../data'

  const serverOutp = (...rest) => {
    const productInformatin = new synthesisProduct(rest[0],rest[1],rest[2],rest[3],rest[4],rest[5],rest[6],rest[7])
    console.log(productInformatin)
  } 
  
const userState = (...rest) => {
  return <Link key={rest[0]} to = {`${rest[0]}/${rest[0]}`} onClick={()=>{rest[2](rest[0])}} 
  style = {rest[1]===rest[0]?
    {backgroundColor: "cornflowerblue"}:
    {backgroundColor: "white"}}>{rest[3]}</Link>
}

const productState = (...rest) => {
  return <span key={rest[0]} className='productState' onClick={()=>rest[2](rest[0])} 
  style = {rest[1]===rest[0]?
    {backgroundColor: "rgb(183, 115, 196)"}:
    {backgroundColor: "white"}}>{rest[3]}</span>
}

const categoryFunction = (...rest) => {
  return rest[0].map((item,index)=>{return(
  <li className='listChild' 
  onClick={()=>rest[2](item)} 
  style = {rest[1]===item?
    {backgroundColor: "rgb(247, 179, 211)"}:
    {backgroundColor: "white"}}
  key={index}>{item}</li>)})}
  
export default function InputTest({price}) {
  const [product,setProduct] = useState(null)
  const [productName,setProductName] = useState("")
  const [listColor,setListColor] = useState(null)
  const [childListColor,setChildListColor] = useState(null)
  const [color ,setColor] = useState(null)
  const [ctg,setCtg] = useState(null)
  const [showImages, setShowImages] = useState([])
  const [area,setArea] =useState("")
  const imageUrlLists = [...showImages]

  const {state} = useParams()
useEffect(()=>{return()=>{
  URL.revokeObjectURL(imageUrlLists);
}},[])

  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i])
      imageUrlLists.push(currentImageUrl)}
    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10)}
    setShowImages(imageUrlLists)
  }

  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id))}
  return (
    <div className='member'>
<fieldset className='zeroFds'>
  <legend><h1>이미지</h1></legend>
  <label htmlFor="input-file" className="addButtonLabel">업로드 </label>
        <input type="file" id="input-file" multiple  className="addButton"
        onChange={(e)=>handleAddImages(e)}/>
      <div className="contanier">
      {showImages.map((image, id) => (
        <div className="imageConta" key={id}>
        <img src={image} alt={`${image}-${id}`} />
        <button  onClick={() => handleDeleteImage(id)}>X</button>
        </div>))}</div><br/></fieldset>
     
<fieldset className='zero-oneFds'>
  <legend><h3 className='hteg'>제품 이름</h3></legend>
<input type = "text" placeholder='제품 이름을 입력 해주세요.' className='productName' id="prnm" onBlur={e=>setProductName(e.target.value)}/>
</fieldset>

<div className='contanier2'>
  <div className='contanier3'>
<fieldset className="firstFds">
  <legend><h3>{color===`buy`?"구매":color===`sell`?"판매":color===`give`?"나눔":
  color===`recive`?"대여":"상태를 선택해 주세요."}</h3></legend>
      {Object.keys(stateData).map(item=>userState(item,color,setColor,stateData[item]))}
    <br/><br/><Outlet></Outlet> {state==="give"||!!!state?null :<>₩</>}<br/><br/>
</fieldset>

        <fieldset className="thirdFds">
      <legend><h3>카테고리</h3></legend>
      <br/>
    <div className='category'>

      <ul>
        {Object.keys(catergory).map((item,index)=>{
          return<li className='list' key={index} 
          onClick = {()=>{setCtg(item);setListColor(item);}} style ={listColor===item?{backgroundColor:"rgb(247, 179, 211)"}:{backgroundColor:"white"}}>
          {item}
          </li>})}</ul>
          
      <ul className='childList'>
          {!!ctg?
          ctg==="가전제품"?categoryFunction(catergory.가전제품,childListColor,setChildListColor):
          ctg==="도서"?categoryFunction(catergory.도서,childListColor,setChildListColor):
          categoryFunction(catergory.의류,childListColor,setChildListColor):null}
      </ul></div>  </fieldset></div>

     <fieldset className="secondFds">
     <legend><h3>제품 상태</h3></legend>
     {Object.keys(productManne).map(item=>productState(item,product,setProduct,productManne[item]))}
     <br/><br/></fieldset></div>

          <fieldset className='fourseFds'>
            <legend><h3>상세 설명</h3></legend>
          <textarea cols="54" rows="10" onBlur={e=>setArea(e.target.value)}/>
          </fieldset><br/>

          <div className='btnBox'>
<input type = "button" value = "등록 하기" className='otpBtn' onClick={()=>{
  if(state==="give"){
    if(!!!productName||!!!imageUrlLists.length||!!!state||!!!product||!!!ctg||!!!childListColor||!!!area){
      alert("선택 혹은 입력하지 않은 정보가 있습니다.")}
    else{serverOutp(productName,imageUrlLists,state,null,product,ctg,childListColor,area)}}
  else{
    if(!!!productName||!!!imageUrlLists.length||!!!state||!!!price||!!!product||!!!ctg||!!!childListColor||!!!area){
    alert("선택 혹은 입력하지 않은 정보가 있습니다.")}
    else{serverOutp(productName,imageUrlLists,state,price,product,ctg,childListColor,area)}}}}/></div></div>)}
