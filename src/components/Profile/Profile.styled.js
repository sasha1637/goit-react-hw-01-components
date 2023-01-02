import styled from 'styled-components';
export const Wrapper = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: 7px 7px 13px 0px rgba(0, 0, 0, 0.38);
  font-weight: 500;
  font-size: 20px;
  line-height: 1.18;
  width: 300px;
  margin-bottom:20px;
`
export const Description=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
 padding: 20px;
`
export const Avatar =styled.img`
padding:0 auto;
width: 120px;
border-radius: 50%;
background-color: rgb(197, 197, 197);
`
export const Stats= styled.ul`
  display: flex;
  justify-content: center;
  background-color: rgb(245, 238, 238);
  border: 1px solid rgb(216, 215, 215);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`
export const Label=styled.span`
  font-size: 14px;
  color: rgb(143, 139, 139);
`
export const Item=styled.li`
display: flex;
align-items: center;
  flex-direction: column;
  padding-top: 8px;
  padding-bottom: 8px;
   width: 100%;
   :not(:last-child) {
border-right: 4px solid rgb(216, 215, 215)
}

`
export const P=styled.p`
padding-bottom:8px;
 font-size: 16px;
 color: rgb(143, 139, 139);
`