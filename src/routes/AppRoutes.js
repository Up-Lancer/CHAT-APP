import { Navigate, Route, Routes } from "react-router-dom";
import App from "../pages/App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Chat from "../pages/cms/RightContainer";
import ChatsContent from "../layouts/ChatsContent";
import ChatMenu from "../layouts/ChatMenu";
import ProfilePage from "../layouts/PofilePage";
import Home from "../layouts/Home";
import RightContainer from "../pages/cms/RightContainer";
import UserProfile from "../layouts/UserProfile";
import UserChat from "../layouts/UserChat";
import Notification from "../layouts/Notification";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/app" element={<App />}>
        <Route path="/app/profile" element={<ProfilePage />} />
        <Route path="/app/home" element={<Home />}>
          {/* <Route path="/app/home/notification" element={<Notification />} /> */}
          {/* <Route path="/app/home/chatsMenu" element={<ChatMenu />} /> */}
          <Route path="/app/home/chat" element={<ChatsContent/>} />
          <Route path="/app/home/userProfile" element={<UserProfile />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default AppRoutes;
