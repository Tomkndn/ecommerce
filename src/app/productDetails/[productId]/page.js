"use client"
import React,{ useEffect,useState } from "react";
import { useMyContext } from "../../context/context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import { useRouter } from "next/navigation";


function ProductDetails({params}){

  const [product,setProduct] = useState(null);
    
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" +
            params.productId
        );
        if (!res.ok) {
          throw new Error("Failed to fetch product details");
        }
        const product = await res.json();
        setProduct(product);
      } catch (error) {
        console.error("Error fetching product details:", error);
        // Handle the error, e.g., display an error message or redirect
      }
    }

    fetchData();
  }, [params.productId]);


  const { isItemAdded, cartDetails } = useMyContext();
  
  const handleClick = ()=>{
    isItemAdded(product);
  }

   const router = useRouter();

   const navigateToHome = () => {
     router.push("/");
   };
  

  return (
    <div id="containerProduct">
      <div id="containerD">
        <button
          onClick={navigateToHome}
          className="absolute top-28 text-base w-15 h-10"
        >
          &larr;Back
        </button>
        <div id="imageSection">
          {product ? (
            <Image
              id="imgDetails"
              src={product.preview}
              alt="Product Preview"
              height={300}
              width={300}
            />
          ) : (
            <Skeleton height={300} width={300} />
          )}
        </div>

        <div id="productDetails">
          <h1>{product ? product.name : <Skeleton />}</h1>
          <h4>{product ? product.brand : <Skeleton />}</h4>

          <div id="details">
            <h3>
              {product ? `Rs ${product.price}` : <Skeleton width={100} />}
            </h3>
            <h3>Description</h3>
            <p>{product ? product.description : <Skeleton count={3} />}</p>
          </div>

          <div id="productPreview">
            <h3>Product Preview</h3>
            {product
              ? product.photos.map((photo, index) => (
                  <Image
                    priority={true}
                    key={index}
                    id="previewImg"
                    alt="productImage"
                    src={photo}
                    height={300}
                    width={300}
                  />
                ))
              : null}
          </div>

          <div id="button">
            <button onClick={handleClick}>
              {cartDetails.map((ele) => ele.id).includes(product?.id)
                ? "Remove from cart"
                : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;