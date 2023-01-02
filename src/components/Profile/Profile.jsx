import PropTypes from 'prop-types';
import {Wrapper, Description,Avatar,Stats,Label,Item,P} from 'components/Profile/Profile.styled'
export default function Profile ({user:{username,tag,location,avatar,stats:{followers,views,likes}}}){

    return ( <Wrapper >
      <Description>
        <Avatar
          src={avatar}
          alt={username}
        />
        <P >{username}</P>
        <P >@{tag}</P>
        <P >{location}</P>
      </Description>
      <Stats>
        <Item>
          <Label>Followers</Label>
          <Label>{followers}</Label>
        </Item>
        <Item>
          <Label>Views</Label>
          <Label>{views}</Label>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Label >{likes}</Label>
        </Item>
      </Stats>
    </Wrapper>)
}
Profile.propTypes ={
  user:PropTypes.shape({
    username:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    stats:PropTypes.shape(
      {followers: PropTypes.number.isRequired,
      views :PropTypes.number.isRequired,
      likes :PropTypes.number.isRequired}
  )}

  )
 
 
  
  
}