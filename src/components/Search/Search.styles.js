import styled from "styled-components";

export const InputComp = styled.input`
  border: 2px solid dodgerblue;
  outline: none;
  padding: 0.7rem 1em;
  flex: 0.4;
`;
export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
`;

export const Bttn = styled.button`
  ${
    "" /* padding: 0.3rem;
  transform: scale(1.6); */
  }
  display:grid;
  place-items: center;
  background-color: rgb(37, 35, 67);
  margin-left: 1rem;
  padding: 0.3rem;
  outline: none;
  transform: scale(1.7);
  border: 1px solid dodgerblue;
  transition: 0.3s;
  &:hover {
    background-color: dodgerblue;
  }
`;
