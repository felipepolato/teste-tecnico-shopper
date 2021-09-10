import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: row;
  flex-wrap: wrap;
  color: red;
  font-size: 12px;
  font-weight: bold;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  border-radius: 10px;
  width: 8rem;
  height: 17rem;
  margin: 2rem;
  transition: 0.5s;
  background: #fff;
  padding: 8px;

  &:hover {
    box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.23);
  }

  button {
    margin-top: 0.5rem;
    height: 10%;
    width: 100%;
    background: #23b5a8;
    border: transparent;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  p {
    text-align: center;
  }
`;

export const ImgCard = styled.div`
  padding: 8px;

  display: flex;
  justify-content: center;
`;

export const TitleProduct = styled.p`
  text-align: center;
  color: black;
`;

export const PriceProduct = styled.p`
  text-align: center;
  color: #23b5a8;
`;
