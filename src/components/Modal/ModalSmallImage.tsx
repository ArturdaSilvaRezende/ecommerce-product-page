import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { activeImage } from "../../features/selectActiveImage";
import ProductImages from "../../data/ProductImages";

const ModalSmallImage = () => {
  const ProductImagesList = ProductImages;
  const [productsImage] = useState(ProductImagesList);
  const selectActiveImage = useAppSelector(
    (state) => state.activeImage.activeImage
  );
  const dispatch = useAppDispatch();

  const handleActiveImage = (imageId: number) => {
    dispatch(activeImage(imageId));
  };

  return (
    <figure className="modal-image__small">
      {productsImage.map((product) => (
        <div
          key={product.id}
          className={`${selectActiveImage === product.id ? "activeModal" : ""}`}
        >
          <div
            className="modal-image__mask"
            onClick={() => handleActiveImage(product.id)}
          ></div>
          <img src={product.imageProductThumbnail} alt="products-images" />
        </div>
      ))}
    </figure>
  );
};

export default ModalSmallImage;
