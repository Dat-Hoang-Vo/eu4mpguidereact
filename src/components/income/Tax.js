import IncomeInput from './IncomeInput';
import { useState } from 'react'

const Tax = () => {
    let tax = .125;

    //const [tax, setTax] = useState(.125);

    const handleTaxClick = () => {

    }

    }
    return ( 
        <div id="taxBox">
            <h2 className="incomeHeader">
                TAX
            </h2>
            <div className="inputField">
                <div className="inputFieldInner">
                <IncomeInput 
                inputName="Provincial Tax Efficiency"
                inputDescription="This can be found by clicking on a province and hovering over tax. Enter percentage as decimal. (E.G) 95% = 0.95"
                ID="provincial_tax_efficiency"  />
                <IncomeInput 
                inputName="Provincial Autonomy"
                inputDescription="This can be found by clicking on a province and looking at the value of its autonomy. Enter the percentage as a decimal. (E.G) 25% = 0.25"
                ID="provincial_autonomy"  />
                </div>
            </div>
            <button className="update left" onClick={handleTaxClick} >Update</button>
            <div className="summary summary_left">
                <h3 className="summary_text constant">Each Tax Development will increase your income by</h3>
                <h3 className="summary_text dynamic">test</h3>
                <h3 className="summary_text constant">Per Month</h3>
            </div>
        </div>
     );
}
 
export default Tax;