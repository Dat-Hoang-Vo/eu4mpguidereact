import HeaderBar from '../headerBar/HeaderBar';
import CountryList from './countryList/CountryList';
import QuickInfo from './quickInfo/QuickInfo';
import '../../style/country/Country.css';

const Country = () => {
    return ( 
        <div>
            <HeaderBar />
            <div id="country_split_box">
                <CountryList />
                <QuickInfo />
            </div>
            
        </div>
     );
}
 
export default Country;