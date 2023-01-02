import styled from 'styled-components';
export const StatisticsWrapper =styled.section`
background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: 7px 7px 13px 0px rgba(0, 0, 0, 0.38);
  font-weight: 500;
  font-size: 20px;
  line-height: 1.18;
  width: 300px;
  margin-bottom:20px;
`
export const Title =styled.title`
    text-transform: uppercase;
    padding: 25px 0;
font-size:36px;
    display: block;
    text-align: center;
    color: rgb(143,139,139);

`
export const List =styled.ul`
display: flex;
    justify-content: space-between;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    overflow: hidden;

`
export const Item =styled.li`
display: flex;
border:1px solid #fff;
border-radius:6px;
    flex-direction: column;
    align-items:center;
    padding: 10px 0;
    width: 100%;
    line-height: 1.6;
    background-color: #213232;
    color: #fff;
`
export const Label =styled.span`
line-height: 1.6;
font-size:26px;

`
export const Info =styled.span`
display: flex;
  flex-direction: row;
  align-items:center
`
