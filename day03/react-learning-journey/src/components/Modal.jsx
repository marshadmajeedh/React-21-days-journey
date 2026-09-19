function Modal({title,children,showWarning}){
    return(
        <div>
            <h2>{title}</h2>
            {showWarning && (
                <p>Warning: this action cannot be undone.</p>
                )}
            {children}
        </div>
    );
}

export default Modal;