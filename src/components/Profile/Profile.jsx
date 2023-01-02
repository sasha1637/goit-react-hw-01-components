import PropTypes from 'prop-types';
import {Wrapper, Description,Avatar,Stats,Label,Item,P} from 'components/Profile/Profile.styled'
export default function Profile ({user:{username,tag,location,avatar,stats}}){

    return ( <Wrapper >
      <Description>
        <Avatar
          src={avatar}
          alt={username}
        />
        <P >{username}</P>
        <P >{tag}</P>
        <P >{location}</P>
      </Description>
      <Stats>
        <Item>
          <Label>Followers</Label>
          <Label>{stats.followers}</Label>
        </Item>
        <Item>
          <Label>Views</Label>
          <Label>{stats.views}</Label>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Label >{stats.likes}</Label>
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
      {followers: PropTypes.number,
      views :PropTypes.number,
      likes :PropTypes.number}
  )}

  )
 
 
  
  
}