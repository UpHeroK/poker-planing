
import React from "react";
import { useNavigate } from "react-router-dom";
import AtmInput from "../atoms/AtmInput";
import AtmButton from "../atoms/AtmButton";
import AtmDuoRadio from "../atoms/AtmDuoRadio";

const OrgForm = ({label, content , radio, onSubmit }) => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // onSubmit(); 
        //   now redirect to the next page
        navigate("/game");
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