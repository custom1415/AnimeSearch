import styled from "styled-components";
export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: rgb(32, 31, 49);
  border: 1px solid dodgerblue;
  padding: 0 0.3rem;
  height: auto;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 19px -1px dodgerblue;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 60%;
  object-fit: contain;
`;
export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: lighter;
  text-align: center;
  color: cyan;
`;
export const Type = styled.p`
  font-size: 0.8rem;
  font-weight: lighter;
  text-align: center;
  margin-bottom: 0.5rem;
  background: rgba(53, 140, 239, 0.1);
  padding: 0.5rem;
`;

export const Bottom = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
  width: 100%;
`;
export const Score = styled.div`
  background: rgba(53, 140, 239, 0.3);

  padding: 0.5rem;
`;
export const ScoreCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
export const Sc = styled.div`
  margin-right: 0.5rem;
`;
