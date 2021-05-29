import styled from 'styled-components';

const PriceTag = styled.span`
  position: absolute;
  top: -3px;
  right: -3px;
  display: inline-block;
  background: var(--red);
  font-size: 3rem;
  font-weight: 600;
  color: white;
  padding: 5px;
  line-height: 1;
  transform: rotate(3deg);
`;

export default PriceTag;
