import styled from 'styled-components';

const CartStyles = styled.div`
  background: white;
  border: 1px solid black;
  width: 40%;
  height: 100%;
  min-width: 500px;
  padding: 20px;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  position: fixed;
  transform: translateX(100%);
  transition: all ease 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  ${(props) => props.open && `transform: translateX(0);`}

  ul {
    margin: 0;
    padding: 0px;
    list-style: none;
    overflow: scroll;
    max-height: 60vh;
  }

  header {
    border-bottom: 5px solid var(--black);
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  footer {
    border-top: 10px double var(--black);
    margin-top: 2rem;
    padding-top: 2rem;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }
`;

export default CartStyles;
