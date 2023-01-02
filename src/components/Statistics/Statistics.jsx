import PropTypes from 'prop-types';
import { FaPercentage } from 'react-icons/fa';
import {StatisticsWrapper,Label,Title,List,Item,Info} from 'components/Statistics/Statistics.styled';
export default function Statistics({stats,title}){
    return (
        <StatisticsWrapper>
{title && (<Title>{title}</Title>)}
   <List>
{stats.map(({id,label,percentage})=>{
    return  (  <Item key={id}>
        <Label >{label}</Label>
        <Info >{percentage}<FaPercentage/></Info>
       </Item>)
    
})}
    </List>
   </StatisticsWrapper>
    )
}
Statistics.propTypes={
    title:PropTypes.string,
    stats:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            label:PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired,
        })

    )
}