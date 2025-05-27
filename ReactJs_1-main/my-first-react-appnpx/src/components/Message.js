import './message.css';

function Message({ title, text }) {
    const currentTime = new Date;
    return ( <div className = "message" >
        <p className = "message__title" > { title } < /p> 
        <p classTime = "message_time" > { currentTime.toLocaleDateString([], { hour: "2-digit", minute: "2-digit" }) } < /p> 
        <p className = "message__text" > { text } < /p> 
        </div>
    )
}

export default Message;