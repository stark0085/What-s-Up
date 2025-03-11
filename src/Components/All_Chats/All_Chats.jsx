import React from 'react'
import './All_Chats.css'

export default function All_Chats() {
    const allChats = [{ name: 'this', lastmsg: 'Hello' }]
    return (
        <div>
            <div className="all-chats-container">
                Here are all the chats
                {allChats.map(function (chat) {
                    return <div className="all-chats-inner-container">
                        <div className="all-chats-each-chat">
                            <div className="all-chats-chat-name">
                                {chat.name}
                            </div>
                            <div className="all-chats-lastmsg">
                                {chat.lastmsg}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
