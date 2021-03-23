import '../../../style/country/QuickInfo/QuickInfoTraits.css';
import { useSelector } from 'react-redux';

const QuickInfoTraits = () => {
    let trait_list = useSelector(state => state.quickInfo.value.Traits)
    return ( 
        <div id="traits_container">
            {
                trait_list.map((trait) => (
                    <div className="trait" key={trait.id}>
                        <h2 className="trait_name">{trait.title}</h2>
                        <p className="trait_description">{trait.description}</p>
                    </div>
                    ))
            }
        </div>
     );
}
 
export default QuickInfoTraits;