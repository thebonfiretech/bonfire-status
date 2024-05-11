import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
  scroll-behavior: smooth;
}
p, a, h1 {
  color: ${({theme}) => theme.colors.text};
}
body {
  font-family: 'Ubuntu', sans-serif;
  background: ${({theme}) => theme.colors.background};

}
::-webkit-scrollbar-track {
    background-color: #363636;
}
::-webkit-scrollbar {
    display: none;
  
   
}
::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colors.primary};
    border-radius: 6px;
}
`

export default GlobalStyle