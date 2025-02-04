function FormSendMassages(){
return(
<form>
          <textarea
            className="massage-input"
            placeholder="Write a message..."
          ></textarea>
          <button className="send-btn " type="submit">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
);
}
export default FormSendMassages;