import RankList from './RankList';
import '../../../style/country/countryList/CountryList.css';

const CountryList = () => {
    return ( 
        <div id="country_list_box" className="split_box">
            <div id="country_list_container">
                <RankList rank="S" />
            </div>
        </div>
     );
}
 
export default CountryList;