import React, { useState, useEffect } from "react";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";

function Body() {
  // const [] = useState();
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  // let index = 0;

  const getData = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts?_start=${index}&_limit=5`;
    // const url = `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${index}`;
    let rawData = await fetch(url);
    let parsedData = await rawData.json();
    setData(data.concat(parsedData));
    // setData(parsedData);
    // index += 5;
    setIndex(index + 5);
  };

  useEffect(() => {
    getData();
  }, []);

  const fetchData = async () => {
    // index = index + 5;
    // setIndex(index + 5);
    // console.log(index);
    // const url = `https://jsonplaceholder.typicode.com/posts?_start=${index}&_limit=5`;
    // // const url = `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${index}`;
    // let rawData = await fetch(url);
    // let parsedData = await rawData.json();
    // // setData(parsedData);
    // setData(data.concat(parsedData));
    getData();
  };
 
  const getImgURL = ()=>{
    let options = [400,500,600,700,800,900,300];
    let num  = Math.floor(Math.random() * 7);
    let x = options[num];
    num  = Math.floor(Math.random() * 7);
    let y = options[num];
    return `https://picsum.photos/${x}/${y}`
  }

  const stats = {
    likes: 4,
    shares: 5,
  };

  return (
    <InfiniteScroll
      dataLength={data.length} //This is important field to render the next data
      next={fetchData}
      hasMore={!(index == 100)}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="container" >
        {data.map((element) => {
          return (
            <div className="row justify-content-center" key={element.id}>
              <Post
                key={element.id}
                id={element.id}
                user={element.userId}
                imageURL={getImgURL()}
                content={element.body}
                stats={stats}
              />
              {/* <Post/> */}
            </div>
          );
        })}
        {/* <button className="btn btn-primary" onClick={fetchData}>Next</button> */}
      </div>
    </InfiniteScroll>
  );
}

export default Body;
