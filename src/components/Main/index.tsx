import MainProductDescription from "./MainProductDescription";
import MainProductImage from "./MainProductImage";
import * as C from "./style";

const Main = () => {
  return (
    <C.Main>
      <MainProductImage />
      <MainProductDescription />
    </C.Main>
  );
};

export default Main;
