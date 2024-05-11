import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border: 0.5px solid #262626;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  height: 150px;
  position: relative;
  padding: 25px;
  width: 100%;
  gap: 5px;

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
  flex-direction: row;
  display: flex;
  height: 50px;
  width: 100%;
  gap: 4px;

  & > section {
    position: relative;
    
    height: 100%;  
    width: auto;
  }

  
`;

export const StatusLine = styled.div`
  background-color: ${({ theme, isSuccess }) => isSuccess ? theme.colors.tertiaryBackground : 
  theme.colors.error};
  position: relative;
  cursor: pointer;
  height: 100%;
  width: 8px;

  
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
  display: flex;
  flex-direction: column;
}

& > h1, p {
  color: #000;
  width: 100%;
  text-align:start;
}

& > h1 {
  font-size: 1rem;
}
  & > p {
    font-size: 0.8rem;
  }
`