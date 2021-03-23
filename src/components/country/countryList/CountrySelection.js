import '../../../style/country/countryList/CountrySelection.css';
import { useDispatch } from 'react-redux';
import { update } from '../../country/InfoSlice'

const CountrySelection = (props) => {
    const dispatch = useDispatch()
    return ( 
        <div className={"country " + props.activity}>
            <img className="flag" onMouseEnter={() => dispatch(update(props.countryName))} src={require('../../../image/country/flag/' + props.countryName + '.png').default} alt={"flag of " + props.countryName} />
            <p className="name">{props.countryName}</p>
        </div>
     );
}
 
export default CountrySelection;