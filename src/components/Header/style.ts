import styled from "styled-components";

export const Header = styled.header`
  border-bottom: 1px solid rgb(219, 219, 219, 0.9);
  padding: 30px 0 30px 0;
  margin: 0 auto;
  width: 85%;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 90%;
  }

  @media screen and (max-width: 767px) {
    padding: 25px 10px;
    width: 90%;
  }
`;

export const HeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;

  button {
    display: none;

    img {
      height: 17px;
    }
  }

  .HeaderMenu__logo {
    img {
      height: 21px;
      margin-bottom: 5px;
      width: 150px;
    }
  }

  .HeaderMenu__nav {
    margin-left: 12%;

    .HeaderMenu__ul {
      ul {
        display: flex;

        li {
          & + li {
            margin-left: 35px;
          }

          a {
            color: var(--Dark-grayish-blue);
            font-weight: 400;
            position: relative;
            transition: 0.3s ease;

            &:hover {
              color: var(--Black);
            }

            &::before {
              content: "";
              position: absolute;
              width: 100%;
              height: 4px;
              top: 67px;
              background-color: var(--Orange);
              visibility: hidden;
              transform: scaleX(0);
              transition: all 0.3s ease-in-out 0s;
            }

            &:hover:before {
              visibility: visible;
              transform: scaleX(1);
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .HeaderMenu__nav {
      margin-left: 40px;

      .HeaderMenu__ul {
        ul {
          li {
            & + li {
              margin-left: 20px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    button {
      display: block;
    }

    .HeaderMenu__logo {
      margin-left: 20px;
    }

    .HeaderMenu__nav {
      background-color: rgba(0, 0, 0, 0.75);
      height: 100vh;
      margin-left: 0;
      position: absolute;
      inset: 0;
      z-index: 999;

      .HeaderMenu__ul {
        background-color: var(--White);
        height: 100vh;
        padding: 40px 0 0 30px;
        width: 65%;

        button {
          margin-bottom: 60px;
        }

        ul {
          flex-direction: column;

          li {
            & + li {
              margin: 20px 0 0 0;
            }

            a {
              color: var(--Very-dark-blue);
              font-size: 18px;
              font-weight: 700;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 320px) {
    .HeaderMenu__logo {
      img {
        width: 90px;
      }
    }
  }
`;

export const HeaderUsers = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  position: relative;

  .HeaderUser__cart {
    cursor: pointer;
    position: relative;

    img {
      height: 23px;
      margin-right: 40px;
      width: 23px;
    }

    p {
      background-color: var(--Orange);
      border-radius: 50%;
      color: var(--White);
      height: 15px;
      text-align: center;
      padding: 8px;
      width: 21px;
      position: absolute;
      top: -7px;
      left: 10px;

      span {
        font-size: 10px;
        position: relative;
        top: -12px;
      }
    }
  }

  .HeaderUser__avatar {
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 50%;
    transition: 0.3s ease-in;

    &:hover {
      border: 2px solid var(--Orange);
    }

    img {
      height: 50px;
      width: 50px;
    }
  }

  .HeaderUser__cart-contents {
    background-color: var(--White);
    box-shadow: 0px 10px 23px -7px rgba(0, 0, 0, 0.3),
      5px 5px 25px 5px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    width: 370px;
    position: absolute;
    top: 65px;
    right: -60px;
    z-index: 10;

    h3 {
      padding: 20px;
    }

    .HeaderUser__cart-line {
      background-color: rgb(219, 219, 219, 0.9) !important;
      height: 2px;
    }

    .HeaderUser__cart-item {
      padding: 45px 20px;
      text-align: center;

      button {
        margin: 25px auto 0 auto;
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .HeaderUser__cart {
      margin-right: -20px;
    }

    .HeaderUser__cart-contents {
      top: 70px;
      right: 0;
    }
  }

  @media screen and (max-width: 599px) {
    .HeaderUser__cart {
      width: 45px;

      img {
        height: 25px;
        width: 25px;
      }
    }

    .HeaderUser__avatar {
      img {
        height: 28px;
        width: 28px;
      }
    }

    .HeaderUser__cart-contents {
      width: 93vw;
      right: -16px;
      top: 70px;

      h3 {
        padding: 25px;
      }

      .HeaderUser__cart-item {
        padding: 45px 20px;
      }
    }
  }
`;

export const HeaderCartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .cartitem__img {
    border-radius: 10px;
    height: 50px;
    width: 50px;
  }

  .cartitem__description {
    p {
      color: var(--Dark-grayish-blue);
      text-align: left;

      &:first-child {
        margin-bottom: 5px;
      }

      &:last-child {
        .price__total {
          color: var(--Black);
          font-weight: 700;
          margin-left: 10px;
        }

        .price_x {
          margin-left: 5px;
        }
      }
    }
  }

  .cartitem__deleteicon {
    cursor: pointer;
    height: 18px;
    width: 14px;
  }

  @media screen and (max-width: 320px) {
    .cartitem__description {
      margin-left: 20px;
    }
  }
`;
