import NavBar from './navBar';
import logo from '../../image/home/background.png';
import '../../style/home/Home.css';


const Home = () => {
    return (
        <div id="background">
            <img id="backgroundImage" src={logo} alt="test"  />
            <div id="body">
                <h1 id="title">EUROPA UNIVERSALIS IV</h1>
                <h2 id="sub_title">Multiplayer Guides</h2>
                <NavBar />
            </div>  
        </div>
     );
}
 
export default Home;