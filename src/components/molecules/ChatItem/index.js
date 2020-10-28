import React from 'react'
import IsMe from './IsMe'
import Other from './Other'

const ChatItem = (props) => {
  if(props.isMe) {
    return <IsMe />
  }
  return <Other />
}

export default ChatItem