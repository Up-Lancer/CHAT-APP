import { Outlet } from "react-router";
import FormSendMassages from "../components/FormSendMassages";
import HeaderChats from "../components/HeaderChats";
import RecivedMassage from "../components/Massage";
import SendMassage from "../components/SendMassage";
import UserChat from "./UserChat";

function ChatsContent() {
    return (
        <section className="chats-content col-md-9 bg-white">
            <HeaderChats />
            <UserChat />
            <Outlet />
        </section>
    );
}
export default ChatsContent;
