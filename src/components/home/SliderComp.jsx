import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100  px-6">
          <div className="m-20">
            <div className="text-6xl font-bold ">
              Tarzınızı Yansıtan Ayakkabılar: Her Adımda Fark Yaratın
            </div>
            <div className=" text-lg my-5">
              Kendi tarzınızı ortaya koymanın en iyi yolu doğru ayakkabıyı
              seçmektir. Mağazamızda, her zevke ve ihtiyaca uygun ayakkabılar
              bulabilirsiniz. Günlük kullanım, iş hayatı veya özel davetler için
              birbirinden şık ve konforlu seçenekler sizleri bekliyor.
              Ayakkabılarımızla her adımda fark yaratın ve stilinizi tamamlayın.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 items-center bg-gray-200 justify-center flex">
              İncele
            </div>
          </div>

          <img src="/src/assets/af1white.png" alt="" />
        </div>

        <div className="!flex items-center bg-gray-100 px-6">
          <div className="m-20">
            <div className="text-6xl  font-bold mb-5">
              Tarzınızı Yansıtan Ayakkabılar: Her Adımda Fark Yaratın
            </div>
            <div className=" text-lg my-5">
              Kendi tarzınızı ortaya koymanın en iyi yolu doğru ayakkabıyı
              seçmektir. Mağazamızda, her zevke ve ihtiyaca uygun ayakkabılar
              bulabilirsiniz. Günlük kullanım, iş hayatı veya özel davetler için
              birbirinden şık ve konforlu seçenekler sizleri bekliyor.
              Ayakkabılarımızla her adımda fark yaratın ve stilinizi tamamlayın.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 items-center bg-gray-200 justify-center flex">
              İncele
            </div>
          </div>
          <img className="bg-gray-100" src="/src/assets/airmax.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
