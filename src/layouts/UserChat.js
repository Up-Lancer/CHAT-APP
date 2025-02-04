import FormSendMassages from "../components/FormSendMassages";
import Massage from "../components/Massage";
import RecivedMassage from "../components/Massage";
import SendMassage from "../components/SendMassage";

function UserChat(){
return(
    <>
    <main className="main">
        <div className="chat-massage-container">

          <Massage msgClass="recived-massage" msgtextClass="recived-text"  massageText="Hello" massageTime="9:55" />
          <Massage msgClass="send-massage" msgtextClass="send-text"  massageText="Hi" massageTime="9:58" />
          <Massage msgClass="recived-massage" msgtextClass="recived-text"  massageText="Hello" massageTime="9:55" />
          <Massage msgClass="send-massage" msgtextClass="send-text"  massageText="Hi" massageTime="9:58" />
        </div>
      </main>
      <footer className="sent-bar">
        <FormSendMassages/>
      </footer>
    </>
)
}
export default UserChat;
