import { configureStore ,createSlice} from "@reduxjs/toolkit"

const data = createSlice({
name : "data",
initialState : {a:30,b:20},
reducers:{inputData(state,want){return state = want.payload}}})

const stock = createSlice({
    name:"stock",
    initialState:[1,2,3],
    reducers:{stack(state,arraying){state.push(arraying.payload)}}})

const registration = createSlice({
    name:"registration",
    initialState:{spring:[],summer:[],fall:[],winter:[]},
    reducers:{
        addStyle(state,action){
        state[action.payload.list].push(action.payload.value)},
        deduplicationStyle(state,action){
        state[action.payload.list].filter((element,index)=>state[action.payload.list].indexOf(element)===index)},
        removeStyle(state,action){
        state[action.payload.list].splice(state[action.payload.list].indexOf(action.payload.value),1)
        }}})

const modify = createSlice({
    name:"modify",
    initialState:{spring:[],summer:[],fall:[],winter:[],style:[]},
    reducers:{
            addStyle1(state,action){
            state[action.payload.list].push(action.payload.value)},
            deduplicationStyle1(state,action){
            state[action.payload.list].filter((element,index)=>state[action.payload.list].indexOf(element)===index)},
            removeStyle1(state,action){
            state[action.payload.list].splice(state[action.payload.list].indexOf(action.payload.value),1)
            }}})
export const{inputData} = data.actions
export const{stack} = stock.actions
export const{addStyle,removeStyle,deduplicationStyle} = registration.actions
export const{addStyle1,removeStyle1,deduplicationStyle1} = modify.actions
export default configureStore({
    reducer:{
   orUser : data.reducer,
   orStock : stock.reducer,
   addStyleList : registration.reducer}})