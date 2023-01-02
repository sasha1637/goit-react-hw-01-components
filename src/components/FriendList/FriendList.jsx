import PropTypes from 'prop-types';
import FriendListItem from "components/FriendList/FriendListItem";
import {List} from 'components/FriendList/FriendList.styled';
export default function FriendList ({friends}){
     return (
        <List> {
     friends.map(friend=>{
        return (
        <FriendListItem key={friend.id} friend={friend} />
        )
     })   
}
</List>
     )   
}
FriendList.propTypes={
        friends:PropTypes.arrayOf(
                PropTypes.shape({
                        id:PropTypes.number.isRequired,
                        name:PropTypes.string.isRequired,
                        avatar:PropTypes.string.isRequired,
                         isOnline:PropTypes.bool.isRequired    
                })
        )    
}