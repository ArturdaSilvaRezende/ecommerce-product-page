import styled from "styled-components";

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  height: 100vh;
  padding: 70px 0 70px 0;
  position: fixed;
  inset: 0;

  .modal-image__large {
    margin-bottom: 30px;

    img {
      border-radius: 15px;
      margin: 0 auto;
      width: 30%;
      position: relative;
    }
  }

  .modal-image__small {
    cursor: pointer;
    display: flex;
    justify-content: center;
    gap: 30px;

    div {
      border: 3px solid transparent;
      border-radius: 15px;
      position: relative;
      transition: 0.3s ease;

      &:hover {
        .modal-image__mask {
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 10px;
          opacity: 0.75;
        }
      }

      .modal-image__mask {
        position: absolute;
        inset: 0;
      }

      img {
        border-radius: 10px;
        width: 60px;
      }
    }
  }

  svg {
    transition: all 0.3s ease;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .modal-image__large {
      img {
        margin-top: 15%;
        width: 60%;
      }
    }

    .modal-image__small {
      div {
        img {
          width: 105px;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    background-color: transparent;
    height: auto;
    padding: 0;
    position: static;

    .modal-image__large {
      margin-bottom: 0;

      img {
        border-radius: 0;
        margin: 0;
        width: 100%;
        height: 360px;
      }
    }

    .modal-image__small {
      display: none;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 766px) {
    .modal-image__large {
      img {
        height: 50vh !important;
      }
    }
  }
`;

export const ModalControlButtons = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 30%;

  button {
    background-color: var(--White);
    border-radius: 50%;
    height: 35px;
    width: 35px;

    &:first-child {
      margin-left: -15px;
    }

    &:last-child {
      margin-right: -15px;
    }

    &:hover {
      svg {
        color: var(--Orange);
      }
    }

    svg {
      font-size: 1.5rem;
      margin-top: 2px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 75%;

    button {
      &:last-child {
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: 767px) {
    width: 80%;

    button {
      svg {
        margin-top: 3px;
      }
    }
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 35%;

  &:hover {
    svg {
      color: var(--Orange);
    }
  }

  svg {
    color: var(--White);
    font-size: 1.5rem;
    font-weight: bolder;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    right: 20%;
    top: 130px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
