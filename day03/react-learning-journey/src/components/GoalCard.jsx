function GoalCard({
    title = "Today's goal",
    goal = "No goal assigned",
    learned = "nothing."
}){
    return(
        <div>
           <h2>Title: {title}</h2>
           <p>Goal: {goal}</p>
           <p>What i learned: {learned}</p>
           <hr />
        </div>
    );
}

export default GoalCard;