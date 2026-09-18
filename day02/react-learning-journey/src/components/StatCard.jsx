function StatCard({
    title = "Unknown",
    value = "N/A",
    isCompleted = false
}){
    return(
        <div>
            <p>{title} : {value} , 
                Status : {isCompleted ? "Completed" : "In Progress"}.
            </p>
        </div>
    );
}

export default StatCard;