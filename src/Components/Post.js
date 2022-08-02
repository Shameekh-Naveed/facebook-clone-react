import React from "react";
import "./Post.css";

function Post(props) {
  const {user,imageURL,content,stats} = props;
  return (    
    <div className="card">
      <div className="info row justify-content-start gx-5">
        <div className="col-1 d-flex align-items-center">
          <img className="PFP " src="https://picsum.photos/200" alt="user" />
        </div>
        <div className="col">
          <div className="row justify-content-start" id="username">
            <p className="my-0">{user}</p>
          </div>
          <div className="row justify-content-start" id="date">
            <p className="my-0 text-muted">Date</p>
          </div>
        </div>
      </div>
      <p className="card-text">
       {content}
      </p>
      <img src={imageURL} className="card-img-top" alt="..." />
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <div className="stats row justify-content-between">
          <div className="col likes">{stats.likes}</div>
          <div className="col rest text-right">{props.id}</div>
        </div>
        <hr />
        <div className="buttons row justify-content-evenly">
          <a href="#" className="btn btn-primary col-3">
            Like
          </a>
          <a href="#" className="btn btn-primary col-3">
            Comment
          </a>
          <a href="#" className="btn btn-primary col-3">
            Share
          </a>
        </div>
        {/* <hr/> */}
      </div>
    </div>
  );
}

export default Post;
