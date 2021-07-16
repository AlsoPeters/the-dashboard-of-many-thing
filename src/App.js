import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import Footer from "./components/Footer";
import { Navbar } from "./Navbar";

import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Movies from "./pages/Movies";
import Books from "./pages/Books";
import Jokes from "./pages/Jokes";

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Navbar />

      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="site-layout-content">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/weather" component={Weather}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/books" component={Books}></Route>
            <Route path="/jokes" component={Jokes}></Route>
          </Switch>
        </div>
      </Content>
      <Footer />
    </Router>
  );
}

export default App;
