import { useState } from "react";
import { useAppSelector } from "../../hooks/useRedux";
import HeaderCartItem from "./HeaderCartItem";
import IconCart from "../../assets/img/header/icon-cart.svg";
import Avatar from "../../assets/img/header/image-avatar.png";
import { BtnOrange } from "../../assets/GlobalStyles/BtnOrange";
import * as C from "./style";
import "../../assets/GlobalStyles/animation.css";

const HeaderUser = () => {
  const [isCart, setIsCard] = useState(false);
  const cartItem = useAppSelector((state) => state.handleCart.product);
  const handleIsCart = () => {
    setIsCard(!isCart);
  };

  return (
    <C.HeaderUsers>
      <div className="HeaderUser__cart">
        <img src={IconCart} alt="icon-cart" onClick={handleIsCart} />
        {cartItem.length >= 1 ? (
          <p>
            <span>{cartItem.map((item) => item.productQuantity)}</span>
          </p>
        ) : null}
      </div>

      <figure className="HeaderUser__avatar">
        <img src={Avatar} alt="user-Avatar" />
      </figure>

      <div
        className={`HeaderUser__cart-contents ${
          isCart ? "fadeIn displayBlock" : "fadeOut displayNone"
        }`}
      >
        <h3>Card</h3>
        <p className="HeaderUser__cart-line"></p>
        <div className="HeaderUser__cart-item">
          {cartItem.length === 0 ? <p>Your cart is empty.</p> : null}
          <HeaderCartItem />
          {cartItem.length >= 1 ? <BtnOrange>Checkout</BtnOrange> : null}
        </div>
      </div>
    </C.HeaderUsers>
  );
};

export default HeaderUser;
