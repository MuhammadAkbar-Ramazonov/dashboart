import "./DiogramTicketItem.css";

export const DiogramTicketItem = (props) => {
    return <>
        <li className="diogram-ticket-item">
            <div className="mx-32 d-flex align-items-center justify-content-between">
                {props.children}
            </div>
        </li>
    </>
}