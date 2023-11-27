
import React from "react";

import AtmInput from "../atoms/AtmInput";
import AtmButton from "../atoms/AtmButton";
import AtmDuoRadio from "../atoms/AtmDuoRadio";

const OrgForm = ({label, content , radio, onSubmit }) => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(); 
      };

    return (
        <form className="org-form" onSubmit={handleSubmit}>
            <AtmInput 
            required={true}
            label={label}/>
           {radio && (
            <>
                <AtmDuoRadio />
            </>
            )}      
            <AtmButton 
            content={content}/>
        </form>
    );
};

export default OrgForm;