import "../resources/css/profilePage.css";

import Profile from "../resources/img/aaaaa.jpg";

function ProfilePage() {
  return (
    <section className="profile-page bg-white">
      <div className="profile-page-header">
        <div className="welcome-text">Welcome in your profile page</div>
        <div className="profile-photo">
          <img src={Profile} alt="" />
        </div>
      </div>
      <div className="profile-page-form">
        <div className="form-container">
          <form className="w-100">
            <div className="inputs">
              <label htmlFor="name" className="form-label text-primary">
                Your Name
              </label>
              <input
                type="text"
                className="form-input form-control border"
                id="name"
              />
            </div>
            <div className="inputs">
              <label htmlFor="email" className="form-label text-primary">
                Email
              </label>
              <input
                type="email"
                className="form-input form-control border"
                id="email"
              />
            </div>
            <div className="inputs">
              <label htmlFor="phone" className="form-label text-primary">
                Phone Num
              </label>
              <input
                type="text"
                className="form-input form-control border"
                id="phone"
              />
            </div>
            <div className="inputs">
              <label htmlFor="description" className="form-label text-primary">
                Description
              </label>
              <input
                type="text"
                className="form-input form-control border"
                id="description"
              />
            </div>
            <div className="inputs edit-img w-100">
              <label
                htmlFor="editImage"
                className="edit-img-label form-label text-primary"
              >
                Edit Profile Image
              </label>
              <div className="edit-img-input input-group">
                <input type="file" className="form-control" id="editImage" />
                <button className="btn btn-primary" type="submit">
                  Save
                </button>
              </div>
            </div>
            <div className="inputs form-btn-div">
              <button className="btn btn-primary form-btn" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default ProfilePage;
