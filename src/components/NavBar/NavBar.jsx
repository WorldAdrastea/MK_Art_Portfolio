import "./NavBar.scss";

export default function NavBar() {
    return (
        <main className="nav-container">
            <div className="nav-logo">
                <h1>Julia Le</h1>
            </div>
            <div className="nav-items-container">
                <a href="/" className="nav-items">Home</a>
                <a href="/portfolio" className="nav-items">Portfolio</a>
                <a href="/about" className="nav-items">About</a>
                <a href="/contact" className="nav-items">Contact</a>
            </div>
        </main>
    );
};