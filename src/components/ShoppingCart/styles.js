import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;

  input {
    border: 1px solid #ccc;
    height: 30px;
    border-radius: 10px;
  }

  label {
    padding: 1%;
    margin: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  border-radius: 0.25rem;
  width: 20rem;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  font-size: 15px;
  color: white;
  background: #23b5a8;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

export const ProductList = styled.div`
  width: 50%;
`;

export const Cart = styled.div`
  width: 50%;
`;

export const Ul = styled.ul`
  list-style: none;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;

  height: 50%;

  ul li ~ li {
    margin-top: 10px;
    overflow: auto;
  }

  ul li {
    display: flex;
    justify-content: space-around;
    padding: 5px;
    align-items: center;
    overflow: auto;
    height: 50%;
  }

  ul li:nth-child(odd) {
    /* background:red; */
  }

  ul li span {
    margin-right: 20px;
  }

  span {
    padding: 5px;
    font-weight: bold;
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
`;

export const TitlePrice = styled.p`
  color: red;
  font-weight: bold;
`;

export const BoxUl = styled.div`
  overflow: auto;
  height: 50%;
`;

export const BoxCart = styled.div`
  font-size: 16px;
`;

export const FormField = styled.form`
  margin: 2px;
  display: flex;
  flex-direction: column;
`;
