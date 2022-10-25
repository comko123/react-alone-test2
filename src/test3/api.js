import axios from "axios"

export const favorite = []

const pushing = (parameter) => {
    for(let i=0; i<6; i++){
        const favor = parameter[i]
        favorite.push(favor)
        }}

export const productAxios = async(storageBox,text) => {
const {data:{items}} = await axios("/v1/search/shop.json",
{params:{query : text ,display:30},headers:{
  "X-Naver-Client-Id": "DgxIVVws_iVRpSppgOIW",
  "X-Naver-Client-Secret": "KcFNGsYQ03"}})
  pushing(items)
  return (storageBox(items))}