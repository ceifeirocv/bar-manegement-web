import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (


            <aside className="col-md-3 flex-grow-md-1 flex-shrink-1 flex-grow-0 sticky-top pb-md-0 pb-3 h-auto">
                <div className="bg-light border rounded-3 p-1 h-100 sticky-top">
                    <ul className="nav nav-pills flex-md-column flex-row mb-auto justify-content-between text-truncate">
                        <li className="nav-item">
                            <Link to={'#'} className="nav-link px-2 text-truncate">
                                <i className="bi bi-house fs-5"></i>
                                <span className="d-none d-sm-inline">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'} className="nav-link px-2 text-truncate">
                                <i className="bi bi-speedometer fs-5"></i>
                                <span className="d-none d-sm-inline">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'} className="nav-link px-2 text-truncate"><i className="bi bi-card-text fs-4"></i>
                                <span className="d-none d-sm-inline">Orders</span> </Link>
                        </li>
                        <li>
                            <Link to={'products'} className="nav-link px-2 text-truncate"><i className="bi bi-bricks fs-5"></i>
                                <span className="d-none d-sm-inline">Products</span> </Link>
                        </li>
                        <li>
                            <Link to={'#'} className="nav-link px-2 text-truncate"><i className="bi bi-people fs-5"></i>
                                <span className="d-none d-sm-inline">Customers</span> </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            
  )
}

export default NavBar;


