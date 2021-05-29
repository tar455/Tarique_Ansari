import Home from "./pages/Home";
import About from "./pages/About";
// import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Route path="/Tarique_Ansari" component={Home} exact />
          <Route path="/about" component={About} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
