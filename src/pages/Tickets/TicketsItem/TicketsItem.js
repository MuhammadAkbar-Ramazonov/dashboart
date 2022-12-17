import { MenuDotsImg } from "../../../assets/images/icons/icons";
import { Priority } from "./Priority/Priority";
import "./TicketsItem.css";

export const TicketsItem = ({obj}) => {    
    return <>
        <li className="tickets-item ">
            <div className="mx-32 row">
                <div className="col-5 d-flex align-items-center" >
                    <img className="tickets-user-img" src={obj.img} width={44} height={44} alt={`${obj.name} image`} />
                    <div>
                        <h4 className="tickets-user-title">
                            {obj.lastAction}
                        </h4>
                        <p className="tickets-user-desc">
                            {obj.updateTime}
                        </p>
                    </div>
                </div>
                <div className="col-3">
                    <h4 className="tickets-user-title">
                        {obj.name}
                    </h4>
                    <time className="tickets-user-desc d-inline-block" dateTime={obj.date}>
                        on {obj.date}
                    </time>
                </div>
                <div className="col-2">
                    <time className="tickets-user-title d-inline-block">
                        {obj.fullDate}
                    </time>
                    <p className="tickets-user-desc" dateTime={obj.time}>
                        {obj.time}
                    </p>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-between">
                    <Priority priority={obj.priority}/>
                    
                    <button className="tickets-user-menu-btn bg-transparent border-0">
                        <MenuDotsImg />
                    </button>
                </div>
            </div>
        </li>
    </>
}