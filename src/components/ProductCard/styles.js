import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  font-size: 12px;
  font-weight: bold;

  label {
    margin-top: 3rem;
    padding: 10px;
    font-size: 16px;
  }

  input {
    margin-left: 20px;
    border: 1px solid #ccc;
    height: 30px;
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  border-radius: 10px;
  width: 12rem;
  height: 20rem;
  margin: 2rem;
  transition: 0.5s;
  background: #fff;
  padding: 8px;

  &:hover {
    box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.23);
  }

  p {
    text-align: center;
  }
`;

export const BoxButton = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    height: 100%;
    width: 100%;
    background: #23b5a8;
    border: transparent;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  span {
    display: block;
    margin: 5%;
  }
`;

export const ImgCard = styled.div`
  padding: 8px;
  width: 75%;
  height: 50%;

  display: flex;
  justify-content: center;
`;

export const TitleProduct = styled.p`
  text-align: center;
`;

export const PriceProduct = styled.p`
  text-align: center;
  color: #23b5a8;
`;
