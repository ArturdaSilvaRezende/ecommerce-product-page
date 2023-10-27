import { useState } from "react";
import { useAppSelector } from "../../hooks/useRedux";
import ProductImages from "../../data/ProductImages";
import ModalCloseButton from "./ModalCloseButton";
import ModalControlButton from "./ModalControlButtons";

const ModalLargeImage = () => {
  const ProductImagesList = ProductImages;
  const [productsImage] = useState(ProductImagesList);
  const selectActiveImage = useAppSelector(
    (state) => state.activeImage.activeImage
  );

  return (
    <figure className="modal-image__large">
      {productsImage.map((product) => (
        <img
          src={product.imageProduct}
          alt="products-images"
          className={`${
            selectActiveImage === product.id
              ? "fadeIn displayBlock"
              : "fadeOut displayNone"
          } `}
          key={product.id}
        />
      ))}
      <ModalControlButton />
      <ModalCloseButton />
    </figure>
  );
};

export default ModalLargeImage;
