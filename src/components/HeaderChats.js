import { Link } from "react-router-dom";
import opededChat from "../resources/img/Ellipse 3.png";

let closeChat = () => {
    let chat = document.querySelector(".chats-content");
    let chat_btn = document.querySelector(".chat-btn");
    if (!chat) return; // تأكد من أن العنصر موجود قبل محاولة تعديله
    chat.classList.add("close");
    chat_btn.classList.remove("active");
};


function HeaderChats() {
    return (
        <header>
            <div className="chat-content-header">
                <Link
                    to="/app/home/userProfile"
                    className="prof-btn-op-chat btn"
                >
                    <div className="open-chat-img">
                        <img src={opededChat} className="w-100" />
                    </div>
                    <div className="open-chat-info">
                        <span>jassa</span>
                        <p>
                            Web Developer <i className="fas fa-laptop-code"></i>
                        </p>
                    </div>
                </Link>
                <div className="exit-chat">
                    <button
                        onClick={closeChat}
                        className="btn exit-chat-btn"
                        id="exit-chat"
                    >
                        <i className="fa-solid fa-circle-xmark"></i>
                    </button>
                </div>
            </div>
        </header>
    );
}
export default HeaderChats;