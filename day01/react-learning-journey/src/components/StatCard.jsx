function StatCard(){

    const currentDay = 1;
    const targetHours = 2;
    const targetDate = "October 20"
    return(
        <div>
            <h2>Learning Progress</h2>
            <p>Day: {currentDay}</p>
            <p>Hours: {targetHours}</p>
            <p>Target: {targetDate}</p>
        </div>
    );
}

export default StatCard;