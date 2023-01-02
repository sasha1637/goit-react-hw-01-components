import Profile from 'components/Profile/Profile'
import Statistics from 'components/Statistics/Statistics'
import FriendList from 'components/FriendList/FriendList'
import TransactionHistory from 'components/TransactionHistory/TransactionHistory'
import {user , transactions , friends , data } from 'data'
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
