import React from "react";
import Loading from "../../UI/Loading";
import useImageLoading from "../../services/useImageLoading";

export default function Imagescontainer({ image }) {
  const [isImageLoaded] = useImageLoading(image);
  return (
    <div className="relative h-28">
      {!isImageLoaded && <Loading />}
      {isImageLoaded && (
        <img
          src={image}
          loading="lazy"
          className="object-contain w-full lg:h-28"
        />
      )}
    </div>
  );
}
