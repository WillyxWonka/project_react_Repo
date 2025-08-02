import Navbar from "../Components/Navbar";

function Header({ children })
{
    return(
        <header >
            <div >
                <Navbar />
            </div>
            <div className="header-children">
                {children}
            </div>
        </header>
    );
}

export default Header;