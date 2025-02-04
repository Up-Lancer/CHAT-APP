import { Link, NavLink } from "react-router-dom";
import User1 from "../resources/img/Ellipse 3.png";


let openChat = () => {
    let userChat = document.querySelector(".chats-content");
    if (!userChat) return; // تجنب الخطأ إذا لم يتم العثور على العنصر
    let chat_btn = document.querySelector(".chat-btn");
    if (userChat.classList.contains("close")) {
        userChat.classList.remove("close");
        chat_btn.classList.add("active");
    }
}

function Conversation(props) {
  return (
      <li className="chat-element">
          <NavLink
              onClick={openChat}
              to={props.path}
              className="chat-btn btn w-100"
              id={props.id}
          >
              <div className="img_cont">
                  <img src={props.img} className="w-100 user_img" />
              </div>
              <div className="user_info">
                  <span>{props.username}</span>
                  <p>{props.lastMassge}</p>
              </div>
          </NavLink>
      </li>
  );
}
export default Conversation;
