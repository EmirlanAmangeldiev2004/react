import "./scss/App.css";
import "./components/Header";
import Header from "./components/Header";
import HeaderMain from "./components/HeaderMain";
import Episodes from "./components/Episodes";
import About from "./components/About";
import Contact from "./components/contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderMain />
      <Episodes />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
