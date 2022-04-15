import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import Footer from "./components/Footer";
import Router from "./Router";

const App = () => {  
  return (
      <Router Header={<Header />} Footer={<Footer />} />
  );
};

export default App;
