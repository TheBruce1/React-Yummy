
const Navbar = (props) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white px-1 px-xl-5 py-2">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-2" href="#">{props.myLogo}<span className="text-danger fs-3"> .</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <a className="nav-link" aria-current="page" href="#">{props.homeLink}</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">{props.aboutLink}</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">{props.menuLink}</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">{props.eventLink}</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">{props.chefsLink}</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">{props.galleryLink}</a>
                            </li>
                            <li className="nav-item mx-2 dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Option 1</a></li>
                                    <li><a className="dropdown-item" href="#">Option 2</a></li>
                                    <li><a className="dropdown-item" href="#">Option 3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" aria-disabled="true">{props.contactLink}</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-danger rounded-pill" type="submit">Book a Table</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;