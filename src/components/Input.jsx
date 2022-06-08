
import React from "react";

export const Input = ({ 
    id, title, type, onChangeHandler=()=>{}, value="", placeholder="", 
    hasAutoComplete=false,isRequired=false,isChecked=false
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

        case "email":
        case "text":
            return (
                <div className="flex-col padding-top-4">
                    <label className="margin-btm-2 mr-auto" htmlFor={id}>{title}</label>
                    <input className="input-width w-100" autoComplete={hasAutoComplete ? "on" : "off"}
                        type={type} name={id} id={id} placeholder={placeholder}
                        required={isRequired} onChange={onChangeHandler} value={value} />
                </div>
            )
            break;
            
        case "password":
            return (
                <div className="flex-col padding-top-4">
                    <label className="margin-btm-2 mr-auto" htmlFor={id}>{title}</label>
                    <input className="input-width w-100" autoComplete={hasAutoComplete ? "on" : "off"}
                    type={type} name={id} id={id} placeholder={placeholder}
                    required={isRequired} onChange={onChangeHandler} value={value} />
                </div>               
            )
            break;
        case "custom-checbox" :
            return (
                <>
                    <input type="checkbox" id={id} className="checkbox" checked={isChecked} onChange={onChangeHandler} />
                    <label className="pd-left" htmlFor={id}>{title}</label>
                </>
            )
        default :
            return (
                <>                    
                </>
            )
    }
}