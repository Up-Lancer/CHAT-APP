import "../resources/css/testtt.css";
import "../resources/css/all.min.css";
import "../resources/css/bootstrap.min.css";
import "../resources/js/bootstrap.bundle.min";
import '../resources/js/script'

import MainSideBar from '../layouts/MainSideBar'
import ChatMenu from '../layouts/ChatMenu'
import ChatsContent from '../layouts/ChatsContent'
import { Outlet } from "react-router";

function App() {
  return (
    <div className="container-fluid">
      <section className="hero">
        <MainSideBar/>
        <Outlet/>
      </section>
    </div>
  );
}
export default App;
