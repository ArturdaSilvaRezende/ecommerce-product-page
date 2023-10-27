import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { isToggleModal } from "../../features/toggles";
import ModalLargeImage from "./ModalLargeImage";
import ModalSmallImage from "./ModalSmallImage";
import * as C from "./style";

const ModalContents = () => {
  const dispatch = useAppDispatch();
  const toggleModal = useAppSelector((state) => state.toggle.isToggleModal);

  const handleResize = useCallback(() => {
    dispatch(isToggleModal(window.innerWidth > 767));
  }, [dispatch]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <C.Modal
      className={`HeaderMenu__nav ${
        toggleModal ? "fadeIn displayBlock" : "fadeOut displayNone"
      }`}
    >
      <ModalLargeImage />
      <ModalSmallImage />
    </C.Modal>
  );
};

export default ModalContents;
