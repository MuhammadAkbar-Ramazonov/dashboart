import {DiogramTicketItem} from "./DiogramTicketItem/DiogramTicketItem"

export const  DiogramTicketList = () => {
    const diogramTickets = [
        {
            title: "Waiting on Feature Request",
            desc: "4238"
        },
        {
            title: "Awaiting Customer Response",
            desc: "1005"
        },
        {
            title: "Awaiting Developer Fix",
            desc: "914"
        },
        {
            title: "Pending",
            desc: "281"
        }
    ]
    return <>
        <ul className="mb-0 list-unstyled">
            {diogramTickets.map(item => (
                <DiogramTicketItem>
                    <h3 className="diogram-tickets-title mb-0">
                        {item.title}
                    </h3>
                    <p className="diogram-tickets-desc mb-0">
                        {item.desc}
                    </p>
                </DiogramTicketItem>
            ))}
        </ul>
    </>
}