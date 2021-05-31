import Home from "./pages/Home";
import About from "./pages/About";
// import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Tarique_Ansari" component={Home} exact />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
