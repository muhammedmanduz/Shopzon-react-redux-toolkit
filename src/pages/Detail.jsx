import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../redux/productSlice";
import DetailComp from "../components/detail/DetailComp";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, productDetail } = useSelector((state) => state.products);

  //her product için bir id oluşturuldu ve bu id'lerin detaylarına ulaşmak için bu id'ler kullanıldı.
  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      {productDetail === "LOADİNG" ? (
        <Loading />
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;
