import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { isToggleModal } from "../../features/toggles";
import { AiOutlineClose } from "react-icons/ai";
import * as C from "./style";

const ModalCloseButton = () => {
  const toggleModal = useAppSelector((state) => state.toggle.isToggleModal);
  const dispatch = useAppDispatch();

  const handleIsModal = () => {
    dispatch(isToggleModal(toggleModal));
  };

  return (
    <C.ModalCloseButton onClick={handleIsModal}>
      <AiOutlineClose />
    </C.ModalCloseButton>
  );
};

export default ModalCloseButton;
