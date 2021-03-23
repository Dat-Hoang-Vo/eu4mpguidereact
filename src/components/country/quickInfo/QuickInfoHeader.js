import { useSelector } from 'react-redux';

const QuickInfoHeader = () => {
    const name = useSelector(state => state.quickInfo.value.Country)
    const motto = useSelector(state => state.quickInfo.value.Motto)
    return ( 
        <div>
            <img src={require('../../../image/country/leaf/Left_Leaf.png').default } />
            <h1 id="quick_info_country_name">{ name }</h1>
            <img src={require('../../../image/country/leaf/Right_Leaf.png').default} />
            <h2 id="quick_info_country_motto">{'"' + motto + '"'}</h2>
        </div>
     );
}
 
export default QuickInfoHeader;