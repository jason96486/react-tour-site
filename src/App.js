import { HashRouter, Route, Routes } from "react-router-dom";
import "./global.scss";
import Layout from "./components/layout";
import HomeComponent from "./components/Main/home-component";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeComponent />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
