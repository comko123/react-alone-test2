import { configureStore ,createSlice} from "@reduxjs/toolkit"

const data = createSlice({
name : "data",
initialState : {a:30,b:20},
reducers:{
    inputData(state,want){return state = want.payload}
}})

const stock = createSlice({
    name:"stock",
    initialState:[1,2,3],
    reducers:{
        stack(state,arraying){state.push(arraying.payload)}
    }
})

export const{inputData} = data.actions
export const{stack} = stock.actions
export default configureStore({
    reducer:{
   orUser : data.reducer,
   orStock : stock.reducer
    }})