import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row" style={{backgroundColor:'#f0f2f5'}}>
        <div className="col-2" >
          <Sidebar />
        </div>
        <div className="col">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
  // IMPORTANT ADD ICOS8 LINK IN FOOTER