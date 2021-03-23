import '../../style/headerBar/headerBar.css';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
    return ( 
        <div id="header_bar">
            <h1 id="header_title">EU4MPGUIDE</h1>
            <div id="header_link_group">
                <Link className="header_link" to="/">Home | </Link>
                <Link className="header_link" to="/country">Country | </Link>
                <Link className="header_link" to="/income">Income | </Link>
                <Link className="header_link" to="/military">Military</Link>
            </div>   
        </div>
     );
}
 
export default HeaderBar;