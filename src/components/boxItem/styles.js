import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border: 0.5px solid #262626;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
  display: flex;
  height: 150px;
  padding: 25px;
  width: 60vw;
  gap: 5px;

@media (max-width: 768px) {
  width: 80vw;
}

  & > section {
    justify-content: space-between;
    align-items: center;
    display: flex;
    width: 100%;
  }

  & > section > h1 {
    text-transform: capitalize;
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  & > section > h3 {
    font-size: 16px;
    color: #0697c5;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  & > section > h4 {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 12px;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }

  & > section > h4:nth-child(1) {
    font-weight: 100;
  }
`;

export const StatusContainer = styled.div`
  box-sizing: border-box;
  gap: calc(30vw / 67);
  flex-direction: row;
  display: flex;
  height: 50px;
  width: 60vw;

  @media (max-width: 768px) {
    gap: calc(40vw / 77);
    width: 80vw;
  }
`;

export const StatusLine = styled.div`
  background-color: ${({ theme, isSuccess }) => isSuccess ? theme.colors.tertiaryBackground : 
  theme.colors.error};
  width: calc(30vw / 60);
  position: relative;
  cursor: pointer;
  height: 100%;

  @media (max-width: 768px) {
    width: calc(40vw / 60);
  }
`;

export const StatusInfo = styled.div`
background-color: #e5e5e5;
box-sizing: border-box;
text-align: center;
border-radius: 5px;
position: absolute; 
margin-top: 15px;
height: 150px;
padding: 15px;
display:none;
width: 300px;
top: 100%;
gap: 10px;
  
${StatusLine}:hover + & {
  flex-direction: column;
  display: flex;
}

& > h1, p {
  text-align:start;
  width: 100%;
  color: #000;
}

& > h1 {
  font-size: 1rem;
}

  & > p {
    font-size: 0.8rem;
  }
`


