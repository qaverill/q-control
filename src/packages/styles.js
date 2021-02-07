import { dark } from '@q/colors';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${dark};
  border: 5px solid white;
  border-radius: 15px 15px 15px 15px;
  padding: 15px;
`;
export const Toggle = styled.div`
  display: flex;
  flex-grow: 1;
  cursor: pointer;
  border-radius: 60px;
  border: 5px solid ${(props) => (props.isActive ? props.color : 'black')};
  background: ${(props) => props.background};
  :hover {
    opacity: 1;
  }
  transition: opacity .2s;
  opacity: .8;
`;
