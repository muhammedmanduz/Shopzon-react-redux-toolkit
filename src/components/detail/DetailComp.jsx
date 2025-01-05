import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        price: productDetail?.price,
        image: productDetail?.image,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="flex gap-20 my-10">
      <img
        className="w-[700px] h-[500px] object-cover "
        src={productDetail?.image}
        alt={productDetail.title}
      />
      <div className="">
        <div className=" text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2">{productDetail?.description}</div>
        <div className="my-2 text-xl text-red-500">
          Rating: {productDetail?.rating?.rate}
        </div>
        <div className=" my-2 text-xl text-red-500">
          Count: {productDetail?.rating?.count}
        </div>
        <div className=" text-5xl font-bold">
          {productDetail?.price} <span className="text-sm">₺</span>
        </div>
        <div className="flex gap-5 my-5">
          <div onClick={decrement} className="text-5xl cursor-pointer ">
            -
          </div>
          <input
            className="w-12 text-center text-4xl font-bold"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-5xl cursor-pointer">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border w-[200px] bg-black text-white p-2 text-center rounded-md mt-5 cursor-pointer"
        >
          Sepet Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
