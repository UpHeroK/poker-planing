import React, { useState } from 'react';
import AtmInput from "../atoms/AtmInput";
import AtmButton from "../atoms/AtmButton";
import AtmDuoRadio from "../atoms/AtmDuoRadio";

const OrgForm = ({ onSubmit, label, content, radio }) => {
    const [formData, setFormData] = useState({
        name: '',
    });
    const [isInputValid, setIsInputValid] = useState(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isInputValid) {
            onSubmit(formData);
        }
    };

    return (
        <form className="org-form" onSubmit={handleSubmit}>
            <AtmInput
                name="name"
                label={label}
                value={formData.name}
                onChange={handleChange}
                onValidityChange={setIsInputValid}
                required
            />
            {radio && <AtmDuoRadio onRoleChange={handleChange} />}
            <AtmButton content={content} />
        </form>
    );
};

export default OrgForm;
