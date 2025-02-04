import User2 from "../resources/img/aaaaa.jpg";
import User3 from "../resources/img/Ellipse 4.png";
import User4 from "../resources/img/Ellipse 8.png";
import User5 from "../resources/img/Ellipse 4.png";
import User6 from "../resources/img/Ellipse 4.png";
import User7 from "../resources/img/Ellipse 5.png";
import User8 from "../resources/img/aaaaa.jpg";
import User9 from "../resources/img/Ellipse 8.png";
import User10 from "../resources/img/Ellipse 10.png";

import SearchChats from "../components/SearchChats";
import Conversation from "../components/Conversation";

let chatsMenuResponsive = () => {
    let chatsMenu = document.querySelector(".chats");
    if (!chatsMenu) return; 

    if (window.matchMedia("(max-width:840px)").matches) {
        chatsMenu.classList.add("close");
    }
};

function ChatMenu(props) {
    return (
        <>
            {chatsMenuResponsive()}
            {window.addEventListener("resize", chatsMenuResponsive)}
            <section className="chats col-md-3" id="chat-menu">
                <div className="search-sec">
                    <SearchChats />
                </div>

                <div className="chat-sec">
                    <div className="title">
                        <h3>Chats</h3>
                    </div>

                    <div className="card-body contacts_body">
                        <ul className="contacts">
                            <Conversation
                                path="/app/home/chat"
                                img={User2}
                                username="Ahmed"
                                lastMassge="hi how are you"
                                id="ahmed"
                            />
                            <Conversation
                                path="/app/home/chat2"
                                img={User3}
                                username="ameer"
                                lastMassge="hi how are you"
                            />
                            <Conversation
                                path="/app/home/chat3"
                                img={User10}
                                username="yosif"
                                lastMassge="hi how are you"
                            />
                            <Conversation
                                path="/app/home/chat4"
                                img={User9}
                                username="salih"
                                lastMassge="hi how are you"
                            />
                            <Conversation
                                path="/app/home/chat5"
                                img={User8}
                                username="anas"
                                lastMassge="hi how are you"
                            />
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ChatMenu;
