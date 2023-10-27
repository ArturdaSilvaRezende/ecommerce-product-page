import ProductImages from "../../data/ProductImages";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import {
  handlePrevImage,
  handleNextImage,
} from "../../features/selectActiveImage";
import * as C from "./style";

const ModalControlButton = () => {
  const ProductImagesList = ProductImages;
  const selectActiveImage = useAppSelector(
    (state) => state.activeImage.activeImage
  );
  const dispatch = useAppDispatch();

  const handlePrevClick = () => dispatch(handlePrevImage());

  const handleNextClick = () =>
    dispatch(handleNextImage(ProductImagesList.length));

  return (
    <C.ModalControlButtons>
      <button onClick={handlePrevClick} disabled={selectActiveImage === 1}>
        <IoIosArrowBack />
      </button>
      <button onClick={handleNextClick}>
        <IoIosArrowForward />
      </button>
    </C.ModalControlButtons>
  );
};

export default ModalControlButton;
