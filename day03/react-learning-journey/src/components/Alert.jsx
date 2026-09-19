/*
function Alert({
    message,
    type,
    showIcon,
    icon,
    showAction,
    actionText
}) {
    return(
        <div>
            <p>Alert message : {message}</p>
            <p>Alert type : {type}</p>
            {showIcon && <img src= {icon}/>}
            {showAction && <p>{actionText}</p>}
        </div>
    );
}
*/

function Alert({children,type}){

    return (
        <div>
            <p>{type}</p>
            {children}
        </div>

    );
}
export default Alert;