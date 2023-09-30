import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
    return <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="javascript(void)">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item">
                <div className="nav-link">
                    <Link to="/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ color: "white" }}>Dashboard</span>
                    </Link>
                </div>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <Link to="/create" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Add User</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">

                <Link className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities" to="/nested-example">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span style={{ color: "white" }}>Nested Example</span>
                </Link>
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                   Hooks
                </div>
                <Link className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities" to="/useref">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span style={{ color: "white" }}>useRef</span>
                </Link>

                <Link className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities" to="/usereducer">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span style={{ color: "white" }}>useReducer</span>
                </Link>

                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="utilities-color.html">Colors</a>
                        <a className="collapse-item" href="utilities-border.html">Borders</a>
                        <a className="collapse-item" href="utilities-animation.html">Animations</a>
                        <a className="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>


        </ul>
    </>
}

export default Sidebar;