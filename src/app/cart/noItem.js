import { MdAddShoppingCart } from "react-icons/md";
import { useRouter } from "next/navigation";


const NoItem = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };
  return (
    <div className="py-52 text-4xl text-[#035e5e] flex justify-center items-center">
      <div>
        <div className="flex justify-center items-center text-7xl">
          <MdAddShoppingCart />
        </div>
        <div className="">No Item in your cart.</div>
        <button onClick={navigateToHome} className="mt-4 absolute left-[43rem] text-base w-15 h-10">
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NoItem;
