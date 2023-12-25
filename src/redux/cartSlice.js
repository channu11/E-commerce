
const { createSlice }= require("@reduxjs/toolkit") ;
const initialState={
    quantity:0,
    cartItems:[],
    totalAmount:0,
}
export const cartSlice=createSlice({
    name: ' cart',
  initialState,
  reducers:{
addToCart:(state,{payload})=>{
    state.cartItems=[...state.cartItems,{...payload, quantity: 1}];
    state.quantity++;
   }
  }
})

export const { addToCart, } = cartSlice.actions

export default cartSlice.reducer