import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex gap-5 items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className=" w-[476px]">
        <div className="text-3xl font-bold">{cart?.title}</div>
        <div className="">{cart?.description}</div>
      </div>

      <div className="">
        {" "}
        {cart?.price}₺ ({cart?.quantity})
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white text-2xl cursor-pointer w-[150px] rounded-xl h-16 flex items-center justify-center"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
