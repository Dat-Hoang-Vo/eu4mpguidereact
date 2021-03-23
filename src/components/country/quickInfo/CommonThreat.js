import { useSelector } from 'react-redux';
import RelatedCountry from './RelatedCountry';

const CommonThreats = () => {
    const threat1 = useSelector(state => state.quickInfo.value.Threat1)
    const threat2 = useSelector(state => state.quickInfo.value.Threat2)
    const threat3 = useSelector(state => state.quickInfo.value.Threat3)
    return ( 
        <div>
            <h3 className="related_header">Common Threats</h3>
            <div id="threatBox" className="relatedBox">
                <RelatedCountry Country={threat1} />
                <RelatedCountry Country={threat2} />
                <RelatedCountry Country={threat3} />
            </div>
        </div>
     );
}
 
export default CommonThreats;