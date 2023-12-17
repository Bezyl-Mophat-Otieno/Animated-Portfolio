
import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
const App = () => {
  return (
  <div>
    <section className="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type={"services"}/></section>
    {/* Services Componenet */}
    <section id="Portfolio"><Parallax type={"portfolio"}/></section>
    <section id="Contact">Contact</section>
    <section id="About">About</section>
   
  </div>
  );
};

export default App;
