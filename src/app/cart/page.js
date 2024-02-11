"use client"
import Image from "next/image";
import Link from "next/link";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useMyContext } from "../context/context";
import NoItem from "./noItem";

export default function Cart() {

  const { cartDetails, clearOut, count, isItemAdded } = useMyContext();

  const getTotalCost = ()=>{
    return cartDetails.reduce((total,item)=> total + item.price,0);
  }

  const handleClick = (product) => {
    isItemAdded(product);
  };

  if (!count) {
    return <NoItem />;
  }
  return (
    <div id="cartMainContainer">
      <h1> Checkout </h1>
      <h3 id="totalItem"> Total Items: {count} </h3>

      <div id="cartContainer">
        <div id="boxContainer">
          {cartDetails.map((prod) => {
            return (
              <div id="box" key={prod.id}>
                <Image
                  src={prod?.preview}
                  alt={prod?.name}
                  height={150}
                  width={150}
                />
                <div>
                  <h3 className="text-2xl my-4">{prod?.name}</h3>
                  <h4 className="text-lg">Amount: Rs{prod?.price}</h4>

                  <div className="mt-9 flex gap-5 text-2xl text-[#035e5e] ">
                    <FaPlusCircle className="self-center cursor-pointer" />
                    <div className="text-black">1</div>
                    <FaMinusCircle className="self-center cursor-pointer" />
                    <MdDelete
                      className="self-center text-4xl text-red-600 cursor-pointer"
                      onClick={() => handleClick(prod)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <div className="py-4" id="totalContainer">
            <h2 className="text-3xl my-8 text-center">Total Amount</h2>
            {cartDetails.map((prod) => {
              return (
                <div
                  key={prod.id}
                  className="flex text-black px-9 py-4 justify-between"
                >
                  <h3 className="text-base">{prod.name} x 1</h3>
                  <h3 className="text-base"> : Rs.{prod.price}</h3>
                </div>
              );
            })}
            <div
              id="button"
              className="flex text-base px-9 py-9 justify-between"
            >
              {/* <button onClick={onPlaceOrderClick}>
              <a href="/orderPlaced.html">Place Order</a>
            </button> */}
              <Link href="/checkout">
                <button onClick={() => clearOut()}>Checkout</button>
              </Link>
              <div className="">Total : Rs. {getTotalCost()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
