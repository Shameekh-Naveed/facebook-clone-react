import React from "react";

export default function Navbar() {
  return (
    // <nav
    //   className="navbar navbar-expand-lg sticky-top"
    //   style={{ backgroundColor: "#ffff" }}
    // >
    //   <div className="container-fluid ">
    //     <a className="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link dropdown-toggle"
    //             href="#"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Dropdown
    //           </a>
    //           <ul className="dropdown-menu">
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <hr className="dropdown-divider" />
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link disabled">Disabled</a>
    //         </li>
    //       </ul>
    //       <form className="d-flex" role="search">
    //         <input
    //           className="form-control me-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //         <button className="btn btn-outline-success" type="submit">
    //           Search
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>

    <nav
      className="navbar navbar-expand-lg sticky-top row py-0"
      style={{ backgroundColor: "#ffff",height:'56px' }}
    >
      {/* <div className="row"> */}
      <div className="col-4">
        <div className="row justify-content-start gx-0">
          <div className="col-auto">
            <a className="navbar-brand" href="#">
              <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" />
            </a>
          </div>
          <div className="col align-self-center">
            <form className="d-flex" role="search">
              <input
                className=" rounded-pill form-control me-2"
                type="search"
                placeholder="Search Facebook"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="col-5">
        <div className="row justify-content-center">
          {/* <div className="col"> */}
            <button className="btn btn-light col">
              <img src="https://img.icons8.com/material-outlined/28/000000/home--v2.png" />
            </button>
          {/* </div> */}
          {/* <div className="col"> */}
            <button className="btn btn-light col">
              <img src="https://img.icons8.com/plumpy/28/000000/friends.png" />
            </button>
          {/* </div> */}
          {/* <div className="col"> */}
            <button className="btn btn-light col">
              <img src="https://img.icons8.com/fluency/28/000000/tv-show.png" />
            </button>
          {/* </div> */}
          {/* <div className="col"> */}
            <button className="btn btn-light col">
              <img src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/28/000000/external-market-festivals-and-events-smashingstocks-glyph-smashing-stocks.png" />
            </button>
          {/* </div> */}
          {/* <div className="col"> */}
            <button className="btn btn-light col">
              <img src="https://img.icons8.com/ios-glyphs/28/000000/controller.png" />
            </button>
          {/* </div> */}
        </div>
      </div>
      <div className="col-3">
        <div className="row justify-content-end gx-0">
          <div className="col-4">
            <button className="btn btn-priamry rounded-pill">Shameekh</button>
          </div>
          {/* <div className="col"> */}
            <button
              style={{ backgroundColor: "#e4e6eb" , borderRadius:'50%'}}
              className="btn btn-priamry col"
            >
              <img src="https://img.icons8.com/ios-glyphs/20/000000/facebook-messenger.png" />
            </button>
          {/* </div> */}
          {/* <div className="col"> */}
            <button
              style={{ backgroundColor: "#e4e6eb" , borderRadius:'50%'}}
              className="btn btn-priamry col"
            >
              <img src="https://img.icons8.com/ios-glyphs/20/000000/facebook-messenger.png" />
            </button>
          {/* </div> */}
          {/* <div className="col"> */}
            <button
              style={{ backgroundColor: "#e4e6eb" , borderRadius:'50%'}}
              className="btn btn-priamry col"
            >
              <img src="https://img.icons8.com/ios-glyphs/20/000000/facebook-messenger.png" />
            </button>
          {/* </div> */}
          {/* <div className="col"> */}
            <button
              style={{ backgroundColor: "#e4e6eb" , borderRadius:'50%'}}
              className="btn btn-priamry col"
            >
              <img src="https://img.icons8.com/ios-glyphs/20/000000/facebook-messenger.png" />
            </button>
          {/* </div> */}
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}
