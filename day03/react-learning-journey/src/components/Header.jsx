function Header({
    name = "Guest",
    title = "React learning journey"
}){
    return(
        <header>
            <hr />
            <h1>{title}</h1>
            <hr />
            <p>Welcome {name}!</p>
        </header>
    );
}

export default Header;