function Massage(props) {
  return (
    // <div className={props.msgClass}>
    <div className={`chat-massage ${props.msgClass}`}>
      {/* <span className={props.msgtextClass}> */}
      <span className={`massage-text ${props.msgtextClass}`}>
        {props.massageText}
      </span>
      <span className="massage-time">{props.massageTime}</span>
    </div>
  );
}
export default Massage;
