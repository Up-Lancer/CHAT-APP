import "../resources/css/testtt.css";
import "../resources/css/all.min.css";
import "../resources/css/bootstrap.min.css";
import "../resources/js/bootstrap.bundle.min";

import { Outlet } from "react-router";


import ChatMenu from "./ChatMenu";
import RightContainer from "../pages/cms/RightContainer";
import Notification from "./Notification";




function Home() {
  return (
   
    <section className="content col-11">
      <Notification/>
      <ChatMenu/>
      <h2 className="Logo-inside">Chat App</h2>
      <Outlet/>
      </section>
   
  
  );
}
export default Home;