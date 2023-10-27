import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/useRedux";
import { activeImage } from "../../features/selectActiveImage";
import { isToggleModal } from "../../features/toggles";
import ProductImages from "../../data/ProductImages";
import Modal from "../Modal";
import * as C from "./style";
import "./active.css";
import "../../assets/GlobalStyles/animation.css";

const MainProductImage = () => {
  const ProductImagesList = ProductImages;
  const [productsImage] = useState(ProductImagesList);
  const selectActiveImage = useAppSelector(
    (state) => state.activeImage.activeImage
  );
  const toggleModal = useAppSelector((state) => state.toggle.isToggleModal);
  const dispatch = useAppDispatch();

  const handleActiveImage = (imageId: number) => {
    dispatch(activeImage(imageId));
  };

  const handleIsModal = () => {
    dispatch(isToggleModal(toggleModal));
  };

  useEffect(() => {
    if (toggleModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [toggleModal]);

  return (
    <>
      <C.MainProductImage>
        <figure className="product-image__large">
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
              onClick={handleIsModal}
            />
          ))}
        </figure>
        <figure className="product-image__small">
          {productsImage.map((product) => (
            <div
              key={product.id}
              onClick={() => handleActiveImage(product.id)}
              className={`${selectActiveImage === product.id ? "active" : ""}`}
            >
              <img src={product.imageProductThumbnail} alt="products-images" />
            </div>
          ))}
        </figure>
      </C.MainProductImage>
      <Modal />
    </>
  );
};

export default MainProductImage;
