import "./Priority.css";

export const Priority = ({priority}) => {
    const priorityUsers = new Map();
    priorityUsers.set("High", <span className="tickets-user-priority tickets-user-priority-high">HIGHT</span>)
    priorityUsers.set("Low", <span className="tickets-user-priority tickets-user-priority-low">LOW</span>)
    priorityUsers.set("Normal", <span className="tickets-user-priority tickets-user-priority-normal">NORMAL</span>)
    
    return <>
        {priorityUsers.get(priority)}
    </>
}