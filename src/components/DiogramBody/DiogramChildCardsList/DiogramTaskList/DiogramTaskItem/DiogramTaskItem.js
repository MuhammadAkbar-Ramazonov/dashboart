import "./DiogramTaskItem.css"

export const DiogramTaskItem = (props) => {
    return <>
        <li className="diogram-task-item">
            <div className="mx-32 d-flex align-items-center justify-content-between">
                {props.children}
            </div>
        </li>
    </>
} 