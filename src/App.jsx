import "./style.css"
import Table1 from "./Components/Table1";
import Table2 from "./Components/Table2"
// import Table3 from "./Components/Table3";
import Topbar from "./Topbar/Topbar";
import { BrowserRouter  as Router,
  Routes,
    Route, 
    Link
} from "react-router-dom";
 
function App() {
 return (
<Router>
<div>
    <Topbar />
<Routes>
  
 <Route  path="/" element={<Table1 />}></Route>
 <Route path="/table2" element={<Table2 />}></Route>
 {/* <Route path="/table3" element={<Table3 />}></Route> */}
 </Routes>
 </div>
  </Router>
);
}
export default App;

