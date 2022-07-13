import Nav from "./components/nav";
import Hero from "./components/hero";
import Center from "./components/center";
import Footer from "./components/footer";
function App() {
  return (
    <div className=''>
      <Nav />
      <div className='max-w-7xl sm:w-[90%] mx-auto px-4 sm:px-0'>
        <Hero />
        <Center />
        <Footer />
      </div>
    </div>
  );
}

export default App;
