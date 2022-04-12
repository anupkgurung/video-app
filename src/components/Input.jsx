
export const Input = ({ 
    id, type, onChangeHandler=()=>{}, value="", placeholder="", 
    hasAutoComplete=false,isRequired=false
    }) => {

    switch (type) {
        case "checkbox":
        case "radio":
            return (
                <div className="show-paswrd flex-row padding-top-2">
                    <input type={type} id={id} className="checkbox" onChange={onChangeHandler} />
                    <label htmlFor={id}>{title}</label>
                </div>
            )
            break;

        case "generic":
            return (
                <div className="flex-col padding-top-4">
                    <label className="margin-btm-2" htmlFor={id}>{title}</label>
                    <input className="input-width" autoComplete={hasAutoComplete ? "on" : "off"}
                        type={type} name={id} id={id} placeholder={placeholder}
                        required={isRequired} onChange={onChangeHandler} value={value} />
                </div>
            )
            break;
            
        default:
            return (
                <input className="input-width" autoComplete={hasAutoComplete ? "on" : "off"}
                    type={type} name={id} id={id} placeholder={placeholder}
                    required={isRequired} onChange={onChangeHandler} value={value} />
            )
            break;
    }
}