import { Link, NavLink } from "react-router-dom";
import Profile from "../resources/img/aaaaa.jpg";

let chatsMenuHandel = () => {
    const chatsMenu = document.querySelector("#chat-menu");
    if (!chatsMenu) return;
    const massageAside = document.querySelector("#massageAside");
    if (chatsMenu.classList.contains("close")) {
        chatsMenu.classList.remove("close");
        massageAside.classList.add("asideActive");
    } else {
        chatsMenu.classList.add("close");
        massageAside.classList.remove("asideActive");
    }
};

let notificationsHandel = () => {
    const notifications_btn = document.querySelector("#notifications-btn");
    const notification_card = document.querySelector(".notification-card");
    if (!notification_card) return;
    if (notification_card.classList.contains("close")) {
        notification_card.classList.remove("close");
        notifications_btn.classList.add("asideActive");
    } else {
        notification_card.classList.add("close");
        notifications_btn.classList.remove("asideActive");
    }
};

function MainSideBar() {
    return (
        <section className="aside">
            <div className="aside-container">
                <div className="profile">
                    <NavLink to="/app/profile" className="btn profile-img">
                        <img
                            className="w-100 rounded-circle"
                            src={Profile}
                            alt=""
                        />
                        <span>profile</span>
                    </NavLink>
                </div>
                <div className="side-menu ">
                    <ul>
                        <li className="navbar__item">
                            <NavLink
                                to="/app/home"
                                className={({ isActive }) =>
                                    isActive
                                        ? "btn navbar__link asideActive"
                                        : "btn navbar__link"
                                }
                            >
                                <i className="fa-solid fa-house"></i>
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li className="navbar__item ">
                            <button
                                // to="/app/home/chatsMenu"
                                onClick={chatsMenuHandel}
                                className="btn navbar__link asideActive"
                                id="massageAside"
                            >
                                <i className="fas fa-comment-dots"></i>
                                <span>Messages</span>
                            </button>
                        </li>
                        <li className="navbar__item">
                            <button
                                // to="/app/home/notification"
                                onClick={notificationsHandel}
                                className="btn navbar__link "
                                id="notifications-btn"
                            >
                                <i className="fa-solid fa-bell"></i>
                                <span>Notifications</span>
                            </button>
                        </li>
                        {/* <li className="navbar__item">
            <NavLink to="/app/home/" className= {({isActive})=> isActive? "btn navbar__link asideActive" : "btn navbar__link" }>
                <i className="fa-solid fa-plus"></i>
                <span>Add Chat</span>
            </NavLink>
          </li> */}
                    </ul>
                </div>

                <div className="logout">
                    <NavLink to="/login" className="btn navbar__link">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <span>Logout</span>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}
export default MainSideBar;
