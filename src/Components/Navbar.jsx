
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar()
{
    return( 
        <nav >
        <div className="nav-btns-cont">
        <Link to="/">MainPage</Link>
        <Link to="/Pages/TestPage">Test Page</Link>
        <Link to="/Pages/NotesPage">Notes Page</Link>
        <Link to="/Pages/Words">dictionary</Link>
        <Link to="/Pages/WordDecoder">Word Decoder</Link>
        </div>
    </nav>
    );
}

export default Navbar;