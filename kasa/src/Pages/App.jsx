import './App.scss';
import Navbar from '../layout/Navbar'
import Banner from '../components/Banner'
import Main from '../components/Main'
import Boxapp from '../components/Boxapp'
import Footer from '../layout/Footer'


function App() {
  return (
    <div>
      <Navbar c="true" />
      <Main>  
        <Banner />
        <Boxapp />
      </Main>
      <Footer/>   
    </div>
  );
}

export default App
