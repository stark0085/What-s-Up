import './App.css'
import Navbar from './Components/Navbar/Navbar'
import All_Chats from './Components/All_Chats/All_Chats'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from "react-router-dom";
import CurrentChatProvider from './Components/contextHooks/CurrentChatProvider';
import Chat_Room from './Components/Chatroom/Chat_Room';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<div style={{display: 'flex'}}> <Navbar/> <All_Chats /><Chat_Room/></div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </>
    )
  );

  return (
    <>
      <CurrentChatProvider>
        <RouterProvider router={router} />
      </CurrentChatProvider>
    </>
  );
};

export default App