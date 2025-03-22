import { React, useContext, useState } from 'react'
import { CurrentChatContext } from '../contextHooks/CurrentChatProvider';
import './Chat_Room.css'

export default function Chat_Room() {
  const { currentChat } = useContext(CurrentChatContext);
  const [msgTyped, setMsgTyped] = useState('')

  const handleInputChange = (event) => {
    setMsgTyped(event.target.value);
  };

  const sendMsg = () => {
    let msgToSend = msgTyped
    setMsgTyped("")
  }

  const allMsg = [
    { ReceiveMsg: "Hey, how's it going?" },
    { MyMsg: "Good morning! Hope you have a great day." },
    { ReceiveMsg: "What are you up to today?" },
    { MyMsg: "Not much, just relaxing. You?" },
    { ReceiveMsg: "Same here, just catching up on some work." },
    { MyMsg: "Sounds productive! Need any help?" },
    { ReceiveMsg: "Nah, just small tasks. Thanks though!" },
    { MyMsg: "Cool, let me know if you do." },
    { ReceiveMsg: "For sure! By the way, did you see the game last night?" },
    { MyMsg: "Yeah! That was an intense match." },
    { ReceiveMsg: "Totally! I didn't expect that comeback." },
    { MyMsg: "Right? They really pulled through in the end." },
    { ReceiveMsg: "Yeah! So, any weekend plans?" },
    { MyMsg: "Thinking of going for a hike. You?" },
    { ReceiveMsg: "Sounds fun! I might just chill at home." },
    { MyMsg: "That’s nice too! Sometimes a break is needed." },
    { ReceiveMsg: "Agreed. Been feeling a bit burned out lately." },
    { MyMsg: "Take it easy, man. No rush on anything." },
    { ReceiveMsg: "Thanks, appreciate that!" },
    { MyMsg: "Anytime! Let’s catch up later." }
  ];

  return (
    <div>
      <div className="current-chat-main-container">
        <div className="current-chat-sender-s-details">
          <img className="current-chat-profile" alt='pic' src='../../.././avengers.jpg' />
          <h1 className="current-chat-chat-name">
            Stark
          </h1>
        </div>
        <div className="current-chat-all-messages">
          {
            allMsg.map(function (msg) {
              return <div>
                <span className={`current-chat-single-msg ${msg.MyMsg ? "" : "current-chat-ReceiveMsg"}`}>{msg.ReceiveMsg || msg.MyMsg}
                </span>
              </div>
            })
          }
        </div>
        <div className="current-chat-input-div">
          <input type="text" className="current-chat-input-field" value={msgTyped} aria-label="Username" onChange={handleInputChange} aria-describedby="addon-wrapping" />
          <button className="input-group-text" onClick={sendMsg}>Send</button>
        </div>
      </div>
    </div>
  )
}