"use client"
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function Checkout(){
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };
    return (
      <div id="orderContainer">
        <div id="check"><FaCheckCircle/></div>

        <div id="aboutCheck">
          <h1> Order Placed Successfully! </h1>
          <p> We&apos;ve sent you an email with the Order details. </p>
          <button
          onClick={navigateToHome}
          className="mt-4 text-base w-15 h-10"
        >Return to Home</button>
        </div>
      </div>
    );
}