import styled from 'styled-components';

const NavStyles = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 2rem;
  display: flex;
  justify-self: end;
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 900;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: '';
      position: absolute;
      width: 2px;
      height: 100%;
      background: var(--lightGray);
      transform: skew(-20deg);
      left: 0;
      top: 0;
      bottom: 0;
    }
    &:after {
      content: '';
      position: absolute;
      background: red;
      height: 2px;
      width: 0;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      text-decoration: none;
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid var(--lightGray);
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
