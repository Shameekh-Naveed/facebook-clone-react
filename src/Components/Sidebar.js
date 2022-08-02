// import React from 'react'

export default function Sidebar() {
  return (
    <div className="" style={{position:'fixed'}}>
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" ></use></svg> */}
        <i className="bi bi-bootstrap-fill"></i>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
            <i className="bi bi-house-door"></i>
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
            <i className="bi bi-speedometer2"></i>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
            <i className="bi bi-speedometer2"></i>
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg> */}
            <i className="bi bi-speedometer2"></i>
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
            <i className="bi bi-speedometer2"></i>
            Customers
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}
