import styled from 'styled-components';
export const Item= styled.li`
  display: flex;
  width:70%;
  align-items: center;
  padding: 10px 10px;
  padding-bottom: 15px;
  border-radius: 4px;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.38);
`
export const Status=styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.isOnline? 'green':'red'};

`
export const Avatar=styled.img`
  padding: 0 10px;
  border-radius: 8px;
`
export const Name=styled.p`
  padding-left: 12px;
`