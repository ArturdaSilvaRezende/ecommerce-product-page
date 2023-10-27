import styled from "styled-components";

export const Main = styled.main`
  margin: 70px auto 70px auto;
  width: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 40px auto 40px auto;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 100%;
    padding-bottom: 60px;
    margin: 0;
    width: 100%;
  }
`;

export const MainProductDescription = styled.div`
  margin: 80px 0 0 80px;
  width: 80%;

  .product-description__subtitle {
    color: var(--Orange);
    font-weight: 700;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  .product-description__title {
    color: var(--Very-dark-blue);
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 30px;
  }

  .product-description__about {
    color: var(--Dark-grayish-blue);
    margin-bottom: 30px;
  }

  .product-description__price {
    display: flex;
    flex-direction: column;

    .product-description__discount {
      display: flex;
      align-items: center;

      p {
        font-weight: 700;

        &:first-child {
          color: var(--Black);
          font-size: 1.5rem;
        }

        &:last-child {
          background-color: var(--Pale-orange);
          border-radius: 5px;
          color: var(--Orange);
          font-size: 14px;
          margin-left: 10px;
          padding: 4px;
          text-align: center;
          width: 40px;
        }
      }
    }

    .product-description__total {
      color: var(--Grayish-blue);
      font-weight: 700;
      margin: 5px 0 30px 0;
      text-decoration: line-through;
    }
  }

  .product-description__buttons {
    display: flex;
    align-items: center;

    .product-description__counters {
      background-color: var(--Light-grayish-blue);
      border-radius: 10px;
      padding: 15px 10px;
      width: 125px;
      display: flex;
      justify-content: space-between;

      span {
        font-weight: 700;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 0 0 0 40px;
    width: 90%;

    .product-description__title {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 767px) {
    margin: 25px auto 0 auto;
    width: 90%;

    .product-description__title {
      font-size: 2rem;
    }

    .product-description__about {
      font-size: 15.5px;
      margin-bottom: 5px;
    }

    .product-description__price {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

      .product-description__discount {
        p {
          &:last-child {
            margin-left: 15px;
          }
        }
      }

      .product-description__total {
        margin: 30px 0 30px 0;
      }
    }

    .product-description__buttons {
      flex-direction: column;

      .product-description__counters {
        width: 100%;
      }

      .product-description__addcar {
        margin: 20px auto 0 auto;
        width: 96%;
      }
    }
  }
`;

export const MainProductImage = styled.div`
  margin-left: 40px;
  width: 100%;

  img {
    border-radius: 10px;
  }

  .product-image__large {
    cursor: pointer;
    margin-bottom: 30px;
    width: 88%;

    img {
      height: 440px;
    }
  }

  .product-image__small {
    cursor: pointer;
    display: flex;
    gap: 30px;
    width: 87%;

    div {
      transition: 0.3s ease;
      border: 3px solid transparent;

      &:hover {
        opacity: 0.75;
      }

      img {
        width: 98px;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-left: 0;

    .product-image__large {
      width: 100%;

      img {
        width: 100%;
        height: auto;
      }
    }

    .product-image__small {
      gap: 10px;

      div {
        img {
          width: 60px;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
