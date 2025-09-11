

const Header = ({title}) => {
    return(
        <div style={styles.container}>
            <h1 style={styles.title}>{title}</h1>
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "lightblue",
        textAlign: "Center",
        padding: "20px"
    },
    title: {
        fontFamily: "Arial",
        fontSize: 40,
    }

};

export default Header;