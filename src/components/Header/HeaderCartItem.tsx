import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { removeFromCart } from "../../features/handleCart";
import IconDelete from "../../assets/img/main/icon-delete.svg";
import * as C from "./style";

const HeaderCartItem = () => {
  const cartItem = useAppSelector((state) => state.handleCart.product);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (item: number) => {
    dispatch(removeFromCart(item));
  };

  return (
    <>
      {cartItem.map((productItem) => (
        <C.HeaderCartItem key={productItem.id}>
          <img
            className="cartitem__img"
            src={productItem.productImage}
            alt={productItem.productName}
          />
          <div className="cartitem__description">
            <p>{productItem.productName}</p>
            <p>
              <span className="price">${productItem.productPrice},00 </span>
              <span className="price_x">x</span>{" "}
              <span>{productItem.productQuantity} </span>
              <span className="price__total">
                ${productItem.productPrice * productItem.productQuantity},00
              </span>
            </p>
          </div>
          <img
            className="cartitem__deleteicon"
            src={IconDelete}
            alt="icon-delete"
            onClick={() => handleRemoveFromCart(productItem.id)}
          />
        </C.HeaderCartItem>
      ))}
    </>
  );
};

export default HeaderCartItem;
