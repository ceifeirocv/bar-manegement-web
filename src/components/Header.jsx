import React from "react"

const Header = () => {
  return (
        <header className="py-3 mb-4 border-bottom shadow">
        <div className="container-fluid align-items-center d-flex">
            <div className="flex-grow-1 d-flex align-items-center ms-1">
                <form className="w-100 me-3">
                    <input type="search" className="form-control" placeholder="Search..."/>
                </form>
                <div className="flex-shrink-0 dropdown">
                    <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://icons.getbootstrap.com/assets/icons/person-circle.svg" alt="user" width="32" height="32" className="rounded-circle"/>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownUser2">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    
  )
}

export default Header