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
  gap: 5px;

  & > article {
    justify-content: space-between;
    align-items: center;
    display: flex;
    width: 100%;
  }

  & > article > h1 {
    text-transform: capitalize;
    font-size: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  & > article > h3 {
    font-size: 16px;
    color: #0697c5;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  & > article > h4 {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 12px;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }

  & > article > h4:nth-child(1) {
    font-weight: 100;
  }
`;

export const StatusContainer = styled.div`
  box-sizing: border-box;

  flex-direction: row;
  display: flex;
  box-sizing: border-box;
  height: 50px;
  gap: 4px;
  width: 100%;

`;

export const StatusLine = styled.div`
  background-color: ${({ theme, isSuccess }) => isSuccess ? theme.colors.tertiaryBackground :
    theme.colors.error};
  width: 100%;
  position: relative;
  cursor: pointer;
  height: 100%;
`;

export const StatusInfo = styled.div`
transform: translateX(-50%);
background-color: #e5e5e5;
box-sizing: border-box;
text-align: center;
border-radius: 5px;
position: absolute;
height: 150px;
padding: 15px;
display: none;
width: 300px;
gap: 10px;
left: 50%;
top: 75%;

${StatusLine}:hover + & {
  flex-direction: column;
  display: block;
}

& > h1, p {
  text-align: start;
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


