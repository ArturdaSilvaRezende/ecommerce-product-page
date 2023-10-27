import HeaderMenu from "./HeaderMenu";
import HeaderUser from "./HeaderUser";
import * as C from "./style";

const HeaderContents = () => {
  return (
    <C.HeaderContents>
      <HeaderMenu />
      <HeaderUser />
    </C.HeaderContents>
  );
};

export default HeaderContents;
