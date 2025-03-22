import { React, useContext, useState } from 'react'
import './All_Chats.css'
import { CurrentChatContext } from '../contextHooks/CurrentChatProvider'

export default function All_Chats() {
    const allChats = [{ name: 'Name of the person', lastmsg: 'Last msg ', time: 'time', profile: 'pic' }, { name: 'Stark', lastmsg: 'Hello', time: '0085hrs', profile: 'pic' }]
    const { setCurrentChat } = useContext(CurrentChatContext);

    const openCurrentChat = (name) => {
        allChats.forEach(chat => {
            if (chat.name === name) {
                setCurrentChat(chat)
            }
        });
    }

    const [searchUsr, setSearchUsr] = useState('')

    const handleInputChange = (event) => {
        setSearchUsr(event.target.value);
    };

    const sendMsg = () => {
        let usrToBeSearched = searchUsr
        setSearchUsr("")
    }

    return (
        <div>
            <div className="all-chats-main-container">
                <div className="all-chats-container">
                    <h2>Chats</h2>
                    <div className="all-chats-input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" className="form-control" placeholder="Username" onChange={handleInputChange} aria-label="Username" aria-describedby="addon-wrapping" />
                        <button className="input-group-text" onClick={sendMsg}>Send</button>
                    </div>
                    Here are all the chats
                    {allChats.map(function (chat) {
                        return <div className="all-chats-inner-container" key={chat.name}>
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
            </div>
        </div>
    )
}
