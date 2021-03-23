import { Link } from 'react-router-dom';
import '../../style/home/navBar.css';

const Nav = (props) => {
    return ( 
        <div>
            <Link className="link" to="country">Country Guide</Link>
            <Link className="link" to="income">TAX VS GOODS</Link>
            <Link className="link" to="military">MILITARY METRIC</Link>
        </div>
     );
}
 
export default Nav;