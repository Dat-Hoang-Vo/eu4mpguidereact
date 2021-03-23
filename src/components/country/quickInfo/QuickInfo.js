import '../../../style/country/QuickInfo.css';

import QuickInfoHeader from './QuickInfoHeader';
import SuggestedAllies from './SuggestedAllies';
import CommonThreats from './CommonThreat';
import QuickInfoModifier from './QuickInfoModifier';
import QuickInfoTraits from './QuickInfoTraits'

const QuickInfo = () => {
    return ( 
        <div id="quick_info_box" className="split_box">
            <div id="quick_info_content_container">
                <QuickInfoHeader />
                <div id="relatedBox">
                    <SuggestedAllies />
                    <CommonThreats />
                </div>
                <QuickInfoModifier />
                <QuickInfoTraits />
            </div>
        </div>
     );
}
 
export default QuickInfo;