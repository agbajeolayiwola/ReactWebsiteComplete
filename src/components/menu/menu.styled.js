import styled from 'styled-components';

export const StyledMenu = styled.nav`


@media only screen and (min-width: 150px) and (max-width: 750px){
    width: 85%;
    z-index:1;
    position: fixed;
  }
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:#426cb4;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
  @media only screen and (min-width: 150px) and (max-width: 750px){
    .navbar_Links .navbar_item {
      cursor: pointer;
      text-decoration: none;
      color: white;
  }
  }
`;
