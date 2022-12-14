import "./Status.css";

export const Status = (props) => {
    return <>
        <span {...props}>
            {props.children}
        </span>
    </>
}