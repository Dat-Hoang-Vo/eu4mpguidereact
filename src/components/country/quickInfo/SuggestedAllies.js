import { useSelector } from 'react-redux';
import RelatedCountry from './RelatedCountry';

const SuggestedAllies = () => {
    const ally1 = useSelector(state => state.quickInfo.value.Ally1)
    const ally2 = useSelector(state => state.quickInfo.value.Ally2)
    const ally3 = useSelector(state => state.quickInfo.value.Ally3)

    return ( 
        <div>
            <h3 className="related_header">Suggested Allies</h3>
            <div id="allyBox" className="relatedBox">
                <RelatedCountry Country={ally1} />
                <RelatedCountry Country={ally2} />
                <RelatedCountry Country={ally3} />
            </div>
        </div>
     );
}
 
export default SuggestedAllies;