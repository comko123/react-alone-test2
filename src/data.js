export const catergory = {
    가전제품:["청소","가구","주방","pc","기타"],
    도서:["소설","만화","전공","교과","기타"],
    의류:["상의","하의","신발","모자","기타"]
}
export const stateData = {buy:"판매",sell:"구매",give:"나눔",recive:"대여"}
export const productManne = {notuse:"미사용",someuse:"거의 새 것",use:"중고"}
export class synthesisProduct{
    constructor(...rest){
      this.productName=rest[0];
      this.productImage=rest[1];
      this.userState=rest[2];
      this.userPrice=rest[3];
      this.productState=rest[4];
      this.catergory1=rest[5];
      this.catergory2=rest[6];
      this.productDetails=rest[7];
    }}
export const infoUser = {
    봄:["청바지","맨투맨","셔츠/블라우스","후드티","가디건"],
    여름:["반바지","반팔 티셔츠","셔츠/블라우스","민소매티셔츠","청바지"],
    가을:["청바지","맨투맨","셔츠/블라우스","후드티","니트/스웨터"],
    겨울:["청바지","코트","패딩","후드티","니트/스웨터"],
}
// 스타일:["빈티지","댄디","캐주얼","놈코어","스트릿"]
export const userClothingRegistration = {spring:[],summer:[],fall:[],winter:[],style:[]}
export const userClothingModify = {springObj:{spring:[]},summerObj:{summer:[]},fallObj:{fall:[]},winterObj:{winter:[]},styleObj:{style:[]}}
export class testcase {
    constructor(email,seasonList){
        this.email = email
        this.seasonList = seasonList
    }
}
export class testcase2 {
    constructor(email,seasonList){
    this.email = email
    this.seasonList = seasonList
    }
}