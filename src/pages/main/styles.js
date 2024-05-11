import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    height: 100vh;
    display: flex;
    width: 100%;
`

export const Box = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    border: 0.1px solid rgba(255,255,255, 0.1);
    border-radius: 5px;
    padding: 5% 10%;
    height: auto;
    width: 80%;
`

export const StatusContainer = styled.div`
    border: 1px solid white;
    
    justify-content: start;
    flex-direction: row;
    aligh-items: center;
    display: flex;
    height: 5vh;
    width: 95%;
`

export const StatusLine = styled.div`
    background-color: green;
    height: auto;
    width: 4px;
    margin: 0px 2px;
`