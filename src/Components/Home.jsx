import '../styles/home.css';
import Education from '../assets/Education.png';

const Home = () => {
  return (
    <div className='Home-container'>
        <div className='home-elements'><img src={Education} alt='Edu' id='Education'/> </div>
    </div>
  )
}

export default Home;
