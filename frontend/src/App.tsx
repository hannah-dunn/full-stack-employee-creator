import Header from "./components/Header";
import ListEmployees from "./components/ListEmployees";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployees />} />
            <Route path="/employees" element={<ListEmployees />} />
            <Route path="/add-employee" element={<EmployeeComponent />}></Route>
            <Route
              path="/edit-employee/:id"
              element={<EmployeeComponent />}
            ></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
