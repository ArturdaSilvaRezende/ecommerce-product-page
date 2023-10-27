import styled from "styled-components";

export const BtnOrange = styled.button`
  background-color: var(--Orange);
  border-radius: 10px;
  box-shadow: 0px 10px 33px -7px var(--Orange),
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  color: var(--White);
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 15px;
  margin-left: 20px;
  transition: 0.3s ease;
  width: 200px;

  &:hover {
    opacity: 0.75;
  }

  p {
    font-weight: 700;

    &:first-child {
      margin-right: 10px;
    }
  }
`;
