import "./DiogramChildCardsList.css"
import {DiogramChildCardsItem} from "./DiogramChildCardsItem/DiogramChildCardsItem"
import {DiogramTicketList} from "./DiogramTicketList/DiogramTicketList"
import {DiogramTaskList} from "./DiogramTaskList/DiogramTaskList"

export const DiogramChildCardsList = () => {
    return <>
        <ul className="d-flex align-items-center justify-content-between mb-0 list-unstyled">
            <DiogramChildCardsItem>
                <div className="mx-32 mb-3 d-flex align-items-start justify-content-between">
                    <div>
                        <h2 className="diogram-titles mb-2">Unresolved tickets</h2>
                        <p className="diogram-time">Group: <span className="diogram-tickets-color-text">Support</span></p>
                    </div>
                    <a className="diogram-child-cards-link" href="#">View details</a>
                </div>
                <DiogramTicketList/>
            </DiogramChildCardsItem>
            <DiogramChildCardsItem>
                <div className="mx-32 mb-3 d-flex align-items-start justify-content-between">
                    <div>
                        <h2 className="diogram-titles mb-2">Tasks</h2>
                        <p className="diogram-time">Today</p>
                    </div>
                    <a className="diogram-child-cards-link" href="#">View all</a>
                </div>
                <DiogramTaskList/>
            </DiogramChildCardsItem>
        </ul>
    </>
}