import PropTypes from 'prop-types';
import {Transaction,Thead,Th,Td} from 'components/TransactionHistory/TransactionHistory.styled';
export default function TransactionHistory({items}){
    return(
<Transaction>
  <Thead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </Thead>

  <tbody>

    {
items.map(({id,type,amount,currency})=>{
    return(
    <tr key={id}>
        <Td>{type}</Td>
        <Td>{amount}</Td>
        <Td>{currency}</Td>
      </tr>

    )
})
    }
  </tbody>
</Transaction>

    )
} 


TransactionHistory.propTypes = {
    items:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }),
    ),
  };
