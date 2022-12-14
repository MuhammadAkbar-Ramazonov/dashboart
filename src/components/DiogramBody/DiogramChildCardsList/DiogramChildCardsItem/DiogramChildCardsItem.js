import "./DiogramChildCardsItem.css";

export const DiogramChildCardsItem = (props) => {
    return <>
        <li className="diogram-child-card bg-white rounded-2">
            {props.children}
        </li>
    </>
}