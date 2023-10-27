import { BsCart3 } from "react-icons/bs";
import IconMinus from "../../assets/img/main/icon-minus.svg";
import IconPlus from "../../assets/img/main/icon-plus.svg";
import * as C from "./style";
import { BtnOrange } from "../../assets/GlobalStyles/BtnOrange";
import { useAppDispatch } from "../../hooks/useRedux";
import {
  addCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../features/handleCart";
import ProductItem from "../../data/ProductItem";

const MainProductDescription = () => {
  const productsList = ProductItem;
  const dispatch = useAppDispatch();

  const handleAddCart = () => {
    dispatch(addCart(productsList));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity());
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity());
  };

  return (
    <C.MainProductDescription>
      <h2 className="product-description__subtitle">Sneaker Company</h2>
      <h1 className="product-description__title">
        Fall Limited Edition Sneakers
      </h1>
      <p className="product-description__about">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product-description__price">
        <div className="product-description__discount">
          <p>$125.00</p>
          <p>50%</p>
        </div>
        <p className="product-description__total">$250.00</p>
      </div>
      <div className="product-description__buttons">
        <div className="product-description__counters">
          <button onClick={handleDecreaseQuantity}>
            <img src={IconMinus} alt="icon-minus" />
          </button>
          <span>0</span>
          <button onClick={handleIncreaseQuantity}>
            <img src={IconPlus} alt="icon-plus" />
          </button>
        </div>
        <BtnOrange
          onClick={handleAddCart}
          className="product-description__addcar"
        >
          <p>
            <BsCart3 />
          </p>
          <p>Add to cart</p>
        </BtnOrange>
      </div>
    </C.MainProductDescription>
  );
};

export default MainProductDescription;
