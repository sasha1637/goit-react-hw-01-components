import styled from "styled-components";

export const Transaction=styled.table`
  width: 300px;
  border-radius: 6px;
  box-shadow: 7px 7px 13px 0px rgba(0, 0, 0, 0.38);
  overflow: hidden;
`
export const Thead=styled.thead`
  background-color: rgb(36, 196, 196);
  color: #fff;
`

export const Th=styled.th`
  font-size:26px;
  padding: 20px 0;
  border-bottom: 1px solid rgb(216, 215, 215);
    :not(:last-child){
       border-right: 1px solid rgb(216, 215, 215);
}

`
export const Td=styled(Th)`
  font-size:16px;
  padding:10px 0;
`