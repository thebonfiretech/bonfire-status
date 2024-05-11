import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => 
  theme.colors.background};
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 75px;
  align-items: center;
  overflow-x: hidden;
  display: flex;
  height: 100vh;
  width: 100vw;
  gap: 50px;
`;

export const Header = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  justify-content: center;
  align-items: center;
  display: flex;
  height: 25%;
  width: 100%;

  & > h1 {
    font-size: 3.5rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  & > img {
    height: 150px;

    @media (max-width: 768px) {
      height: 100px;
    }
  }
`;

export const Box = styled.div`
  border-radius: 10px;
  height: auto;
  width: 60%;
  @media (max-width: 768px) {
    width: 80%;
  }

`;

export const Message = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  box-sizing: border-box;
  align-items: center;
  border-radius: 10px;
  padding-left: 15px;
  display: flex;
  height: 75px;
  width: 60%;

  @media (max-width: 768px) {
    height: 50px;
    width: 80%;
  }

  & > p {
    font-weight: bold;
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

