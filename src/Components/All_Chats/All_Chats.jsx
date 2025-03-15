import { React, useState } from 'react'
import './All_Chats.css'

export default function All_Chats() {
    const allChats = [{ name: 'Name of the person', lastmsg: 'Last msg ', time: 'time', profile: 'pic' }, { name: 'Stark', lastmsg: 'Hello', time: '0085hrs', profile: 'pic' }]

    const [curChat, setCurChat] = useState(Object)

    const openCurrentChat = (name) => {
        allChats.forEach(chat => {
            if (chat.name === name) {
                setCurChat(chat)
            }
        });
    }

    return (
        <div>
            <div className="all-chats-main-container">
                <div className="all-chats-container">
                    <h2>Chats</h2>

                    <div className="all-chats-input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                    Here are all the chats
                    {allChats.map(function (chat) {
                        return <div className="all-chats-inner-container">
                            <div className="all-chats-profile">{chat.profile}</div>
                            <div className="all-chats-each-chat" onClick={() => { openCurrentChat(chat.name) }}>
                                <h3 className="all-chats-chat-name">
                                    {chat.name}
                                </h3>
                                <span className='current-chat-time'>{chat.time}</span>
                                <div className="all-chats-lastmsg">
                                    {chat.lastmsg}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="all-chats-current-chat">
                    <div className="current-chat-input-group">
                        <div className="all-chats-profile">{curChat.profile}</div>
                        <div className="all-chats-each-chat">
                            <h3 className="all-chats-chat-name">
                                {curChat.name}
                            </h3>
                            <span className='current-chat-time'>{curChat.time}</span>
                            <div className="all-chats-lastmsg">
                                {curChat.lastmsg}
                            </div>
                        </div>
                        <input type="text" class="form-control current-chat-input-tag" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                        <button className='current-chat-send-button'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
