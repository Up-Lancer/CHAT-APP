import "../resources/css/profilePage.css";

import Profile from "../resources/img/Ellipse 3.png";

function UserProfile() {
    return (
        <section className=" profile-page bg-white">
            <div className="user-profile-header">
                <div className="welcome-user-text">
                    Welcome in <span className="user-name">jassa</span> profile
                </div>
                <div className="profile-photo">
                    <img src={Profile} alt="" />
                </div>
            </div>
            <div className="profile-page-form">
                <div className="form-container">
                    <div className="inputs">
                        <label
                            htmlFor="name"
                            className="form-label text-primary"
                        >
                            Name
                        </label>
                        <p className="user-info">Ameer wesam abu draz</p>
                    </div>
                    <div className="inputs">
                        <label
                            htmlFor="email"
                            className="form-label text-primary"
                        >
                            Email
                        </label>
                        <p className="user-info">Ameer@gmalasdn.com</p>
                    </div>
                    <div className="inputs">
                        <label
                            htmlFor="phone"
                            className="form-label text-primary"
                        >
                            Phone Num
                        </label>
                        <p className="user-info">0597555551</p>
                    </div>
                    <div className="inputs">
                        <label
                            htmlFor="description"
                            className="form-label text-primary"
                        >
                            Description
                        </label>
                        <p className="user-info">Software Engineer</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default UserProfile;
