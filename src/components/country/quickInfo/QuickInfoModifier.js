import '../../../style/country/QuickInfo/QuickInfoModifier.css';
import { useSelector } from 'react-redux';

const QuickInfoModifier = () => {
    let modifier_list = useSelector(state => state.quickInfo.value.Modifiers)

    return ( 
        <div id="modifier_container">
            <h3 id="modifier_title">Modifiers</h3>
            <div id="modifier_content_container">
                {modifier_list.map((modifier) => (
                    <div className="modifier" key={modifier.id}>{modifier.name + " " + modifier.value}</div>
                ))}
            </div>
        </div>
     );
}
 
export default QuickInfoModifier;