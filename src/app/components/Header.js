"use client";
import { FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useMyContext } from "../context/context";


const Header = () => {
  const { count } = useMyContext();
  return (
    <header>
      <section>
        <div id="container">
          <div id="shopName">
            <Link href="/#containerSlider">
              {" "}
              <b>SHOP</b>LANE{" "}
            </Link>
          </div>
          <div id="collection">
            <div id="clothing">
              <Link href="/#Clothing">CLOTHING</Link>
            </div>
            <div id="accessories">
              <Link href="/#Accessories"> ACCESSORIES</Link>
            </div>
          </div>
          <div id="search">
            <FaSearch className="search" />
            <input
              type="text"
              id="input"
              name="searchBox"
              placeholder="Search for Clothing and Accessories"
            />
          </div>
          <div id="user">
            <Link href="/cart">
              {" "}
              <FaShoppingCart className="addedToCart" />
              {count ? <div id="badge"> {count} </div> : null}
              
            </Link>
            <Link href="/user">
              {" "}
              <FaUserCircle className="userIcon" />{" "}
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;