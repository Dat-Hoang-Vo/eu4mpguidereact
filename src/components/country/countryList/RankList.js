import CountrySelection from './CountrySelection';
import '../../../style/country/countryList/RankList.css';

const RankList = () => {
    return ( 
        <div>
            <div className="rank_container">
                <h2 className="rank_text">S - TIER</h2>
                <div className="selection_container">
                    <CountrySelection activity="active" countryName="France" />
                    <CountrySelection activity="inactive" countryName="Muscovy" />
                    <CountrySelection activity="inactive" countryName="England" />
                    <CountrySelection activity="inactive" countryName="Castile" />
                    <CountrySelection activity="inactive" countryName="Ottomans" />
                </div>
            </div>
            <div className="rank_container">
                <h2 className="rank_text">A - TIER</h2>
                <div className="selection_container">
                    <CountrySelection activity="inactive" countryName="Austria" />
                    <CountrySelection activity="inactive" countryName="Poland" />
                    <CountrySelection activity="inactive" countryName="Burgundy" />
                    <CountrySelection activity="inactive" countryName="Mamluks" />
                </div>
            </div>
        </div>
        
     );
}
 
export default RankList;