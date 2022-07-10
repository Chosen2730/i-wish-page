import Nav from "./components/nav";
import Hero from "./components/hero";
import Center from "./components/center";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Nav />
      <div className='w-5/6 mx-auto'>
        <Hero />
        <Center />
        <Footer />
      </div>
    </div>
  );
}

export default App;
