import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount, "carts");

  useEffect(() => {
    dispatch(getCartTotal());

  }, [dispatch]);

  
  return (
    <div>
      {carts.length > 0 ? (
        <div>
          {carts.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end font-bold text-2xl">
       
            Toplam Tutar: <span className="font-bold text-3xl ml-1">{totalAmount}₺</span>{" "}
          </div>
        </div>
      ) : (
        <div>Sepetiniz Boş</div>
      )}
    </div>
  );
};

export default Cart;
