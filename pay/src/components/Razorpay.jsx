import React from "react";
import { useState } from "react";

export function Razorpay(){

    const [cart,setCart]=useState([]);
    const [total,setTotal]=useState(0);

    function addToCart(item,price){
        setCart([...cart,{item,price}]);

        setTotal(total=>total+price);

    };
    return(
        <div>
            <div className="heading">
                <h1>My Shop</h1>
            </div>

            <div className="container">

                <div className="box">
                    <img src="tshirt.png" alt="" />
                    <h3>T-shirt</h3>
                    <p>price : <b>500₹</b></p>
                    <button  onClick={() => addToCart("T-shirt", 500)}>Add To Cart</button>
                </div>


                <div className="box">
                    <img src="/shoes.png" alt="" />
                    <h3>Shoes</h3>
                    <p>price : <b>1500₹</b></p>
                    <button  onClick={() => addToCart("shoes", 1500)}>Add To Cart</button>
                </div>


                <div className="box">
                    <img src="/pant.png" alt="" />
                    <h3>Pant</h3>
                    <p>price : <b>800₹</b></p>
                    <button  onClick={() => addToCart("pant", 800)}>Add To Cart</button>
                </div>
            </div>

            <div className="cart">
                <h3>Cart Items</h3>
                <ul id="list">
                    {cart.map((name,index)=>(
                        <li key={index}>
                             {name.item} - {name.price}₹
                        </li>
                    ))}
                </ul>
                <h4>Total : <span id="total">{total}₹</span></h4>
                <button id="payBtn">Pay Now</button>
            </div>

        </div>
    );
}
