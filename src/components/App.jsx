import Profile from 'components/Profile/Profile'
import Statistics from 'components/Statistics/Statistics'
import FriendList from 'components/FriendList/FriendList'
import TransactionHistory from 'components/TransactionHistory/TransactionHistory'
import  user from 'data/user.json'
import transactions from 'data/transactions.json'
import friends from 'data/friends.json'
import data from 'data/data.json'
export const App = () => {
  return (
    
    <>
<Profile key={user.tag} user={user}/>
<FriendList friends={friends} />
<Statistics  stats={data} />
<TransactionHistory items={transactions} />
</>

)
};
