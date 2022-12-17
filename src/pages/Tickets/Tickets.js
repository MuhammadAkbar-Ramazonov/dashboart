import { ArrorToLeftImg, ArrorToLowImg, ArrorToTightImg, FilterImg, SortImg } from "../../assets/images/icons/icons";
import "./tickets.css";
import { TicketsItem } from "./TicketsItem/TicketsItem";
import Tom from "../../assets/images/Tom.png";
import Matt from "../../assets/images/Matt.png";
import Robert from "../../assets/images/Robert.png";
import Christian from "../../assets/images/Christian.png";
import Henry from "../../assets/images/Henry.png";
import Chris from "../../assets/images/Chris.png";
import Sam from "../../assets/images/Sam.png";
import Steve from "../../assets/images/Steve.png";

export const Tickets = () => {

  const userObj = [
    {
      img: Tom ,
      lastAction: "Contact Email not Linked",
      updateTime: "Updated 1 day ago",
      name: "Tom Cruise",
      fullDate: "May 26, 2019",
      date: "24.05.2019",
      time: "6:30 PM",
      priority: "High",
    },
    {
      img: Matt,
      lastAction: "Adding Images to Featured Posts",
      updateTime: "Updated 1 day ago",
      name: "Matt Damon",
      fullDate: "May 26, 2019",
      date: "24.05.2019",
      time: "8:00 AM",
      priority: "Low",
    },
    {
      img: Robert,
      lastAction: "When will I be charged this month?",
      updateTime: "Updated 1 day ago",
      name: "Robert Downey",
      fullDate: "May 26, 2019",
      date: "24.05.2019",
      time: "7:30 PM",
      priority: "High",
    },
    {
      img: Christian,
      lastAction: "Payment not going through",
      updateTime: "Updated 2 days ago",
      name: "Christian Bale",
      fullDate: "May 25, 2019",
      date: "24.05.2019",
      time: "5:00 PM",
      priority: "Normal",
    },
    {
      img: Henry,
      lastAction: "Unable to add replies",
      updateTime: "Updated 2 days ago",
      name: "Henry Cavil",
      fullDate: "May 25, 2019",
      date: "24.05.2019",
      time: "4:00 PM",
      priority: "High",
    },
    {
      img: Chris,
      lastAction: "Downtime since last week",
      updateTime: "Updated 3 days ago",
      name: "Chris Evans",
      fullDate: "May 25, 2019",
      date: "23.05.2019",
      time: "2:00 PM",
      priority: "Normal",
    },
    {
      img: Sam,
      lastAction: "Referral Bonus",
      updateTime: "Updated 4 day ago",
      name: "Sam Smith",
      fullDate: "May 25, 2019",
      date: "22.05.2019",
      time: "11:30 AM",
      priority: "Low",
    },
    {
      img: Steve,
      lastAction: "How do I change my password?",
      updateTime: "Updated 6 days ago",
      name: "Steve Rogers",
      fullDate: "May 24, 2019",
      date: "21.05.2019",
      time: "1:00 PM",
      priority: "Normal",
    },
  ]

  return <>
    <div className="tickets-card-mainbox">
      <div className="mx-32 tickets-top-box d-flex align-items-center justify-content-between">
        <h2 className="tickets-title mb-0 me-2">
          All tickets
        </h2>
        <div>
          <button className="tickets-sort-btn d-inline-flex align-items-center bg-transparent border-0">
            <SortImg /> <span className="ms-2 tickets-menu-text">Sort</span>
          </button>
          <button className="d-inline-flex align-items-center bg-transparent border-0">
            <FilterImg /> <span className="ms-2 tickets-menu-text">Filter</span>
          </button>
        </div>
      </div>

      <div className="mx-32 mb-2 pb-1 row">
        <div className="col-5">
          <h3 className="tickets-text">
            Ticket details
          </h3>
        </div>

        <div className="col-3">
          <h3 className="tickets-text">
            Customer name
          </h3>
        </div>
        <div className="col-2">
          <h3 className="tickets-text">
            Date
          </h3>
        </div>
        <div className="col-2">
          <h3 className="tickets-text">
            Priority
          </h3>
        </div>
      </div>

      <ul className="tickets-list mb-0 list-unstyled">
        {userObj.map(item => <TicketsItem obj={item} />)}
      </ul>

      <div className="mx-32 tickets-bottom-box d-flex align-items-center justify-content-end">
        <p className="tickets-bottom-desc tickets-bottom-users-length d-inline-flex align-items-center mb-0">Rows per page: <span className="tickets-bottom-users-lenght-text">{userObj.length}</span><ArrorToLowImg /></p>
        <p className="tickets-bottom-desc mb-0">
          1-8 of 1240
        </p>
        <button className="tickets-bottom-arrow tickets-bottom-arrow-to-left d-inline-flex align-items-center justify-content-center bg-transparent border-0">
          < ArrorToLeftImg />
        </button>
        <button className="tickets-bottom-arrow d-inline-flex align-items-center justify-content-center bg-transparent border-0">
          < ArrorToTightImg />
        </button>
      </div>
    </div>
  </>
}
