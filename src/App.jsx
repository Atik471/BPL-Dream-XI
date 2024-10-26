import './App.css'
import Navbar from './Components/navbar';
import Banner from './Components/banner';
import MainSection from './Components/mainSection';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/footer';

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar></Navbar>
      <Banner></Banner>
      <MainSection></MainSection>
      <Footer></Footer>
    </>
  )
}

export default App
