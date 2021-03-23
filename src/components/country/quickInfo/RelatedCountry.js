import '../../../style/country/QuickInfo/RelatedCountry.css';

const RelatedCountry = (props) => {
    return ( 
        <div className="relatedFlagContainer">
            <img className="relatedFlag" src={require('../../../image/country/flag/' + props.Country + '.png').default} />
            <h4>{props.Country}</h4>
        </div>
     );
}
 
export default RelatedCountry;