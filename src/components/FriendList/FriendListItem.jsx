import PropTypes from 'prop-types';
import {Item,Status,Avatar,Name} from 'components/FriendList/FriendListItem.styled'
export default function FriendListItem ({friend:{isOnline,name,avatar}}){
return (
    <Item>
    <Status isOnline={isOnline} ></Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
    </Item>
    )   
}
FriendListItem.propTypes={
    friend:PropTypes.shape({
            name:PropTypes.string.isRequired,
            avatar:PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired  
    })

}