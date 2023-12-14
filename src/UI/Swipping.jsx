import React from "react";
import Slider from "react-slick";

export default function Swipping() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    pauseOnHover: true,
  };
  return (
    <center>
      <>
        <Slider
          className="rounded-lg shadow-lg w-[80%] sm:w-[95%]"
          {...settings}
        >
          <div className="relative h-[40vh] sm:h-[75vh] w[20vw] sm:w-[50vw]">
            <img
              src="https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" h-full w-full"
            />
          </div>
          <div className="relative h-[40vh] sm:h-[75vh] w[20vw] sm:w-[50vw]">
            <img
              src="https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" h-full w-full"
            />
          </div>
          <div className="relative h-[40vh] sm:h-[75vh] w[20vw] sm:w-[50vw]">
            <img
              src="https://plus.unsplash.com/premium_photo-1680871320511-8be2085ff281?q=80&w=1259&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" h-full w-full"
            />
          </div>
          <div className="relative h-[40vh] sm:h-[75vh] w[20vw] sm:w-[50vw]">
            <img
              src="https://plus.unsplash.com/premium_photo-1674664384602-a3d583f4547b?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" h-full w-full"
            />
          </div>
          <div className="relative h-[40vh] sm:h-[75vh] w[20vw] sm:w-[50vw]">
            <img
              src="https://images.unsplash.com/photo-1512850183-6d7990f42385?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" h-full w-full"
            />
          </div>
          <div className="relative h-[40vh] sm:h-[75vh] w[20vw] sm:w-[50vw]">
            <img
              src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" h-full w-full"
            />
          </div>
        </Slider>
      </>
    </center>
    /* <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mt-10 h-[20%] w-[60%]"
    >
      <SwiperSlide>
        <img src="https://img.freepik.com/free-vector/boxing-day-sale-instagram-story-collection_23-2148367552.jpg?w=740&t=st=1699518858~exp=1699519458~hmac=ec41dc3111fe3a245ebf26169a5513ea8e7a0fa36d40965353f72e5cdfe6aadf" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://c8.alamy.com/comp/2GK9GX1/computer-shop-poster-2GK9GX1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        {() => (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFJvHjM0ccv82dSHPufrx4k4PzDWKYwIJQQ&usqp=CAU"
            className="h-full"
          ></img>
        )}
      </SwiperSlide>
    </Swiper> */
  );
}
