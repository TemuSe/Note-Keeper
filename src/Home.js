import RotateText from "./RotateText";

function Home() {
    return (
        <div className="home-page">
            <div className="left-side">
                <p>Note Keeper</p>
                <RotateText />
            </div>
            <div className="right-side">
                <div className="login-register-links">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </div>
        </div>
    )
}

export default Home;