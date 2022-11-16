import Place from "./pages/Place";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Place to Stay" element={<Place />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
