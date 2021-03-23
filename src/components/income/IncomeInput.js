const IncomeInput = (props) => {
    return ( 
        <div className="input">
            <label className="inputName">{props.inputName}</label>
            <p className="inputDescription">{props.inputDescription}</p>
            <input className="inputDataHere" type="number" defaultValue="1.00"
                    name={props.ID} id={props.ID} />
        </div>
     );
}
 
export default IncomeInput;