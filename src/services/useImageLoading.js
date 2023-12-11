import { useEffect, useState } from "react";

export default function useImageLoading(image) {
  const [isImageLoaded, setisImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setisImageLoaded(true);
    };
    img.src = image;
  }, [image]);

  return [isImageLoaded];
}
