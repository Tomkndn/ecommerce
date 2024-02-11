import Image from "next/image";
import Link from "next/link";

const ContentDetails=({ele})=>{
    return (
        <div id="box">
          <Link href={'/productDetails/' + ele.id}>
            <Image
              src={ele.preview}
              alt="Product Preview"
              height={300}
              width={300}
            />
            <div id="details">
              <h3>{ele.name}</h3>
              <h4>{ele.brand}</h4>
              <h2>{"rs " + ele.price}</h2>
            </div>
          </Link>
        </div>
    );
}

export default ContentDetails;