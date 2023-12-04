import React, { useState, useRef } from "react";
import AtmInput from "../atoms/AtmInput";
import AtmButton from "../atoms/AtmButton";
import PropTypes from 'prop-types';


const OrgFormClipboard = ({ label, content }) => {
    const [inputValue, setInputValue] = useState("https://poker.com/asd165as4c32168ec4as1");
    const inputRef = useRef(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleCopyToClipboard = () => {
        try {
            event.preventDefault();
            inputRef.current.select();
            navigator.clipboard.writeText(inputRef.current.value)
                .then(() => {
                    alert("Texto copiado: " + inputRef.current.value);
                })
                .catch(() => {
                    alert("No se pudo copiar al portapapeles");
                });
        } catch (err) {
            console.error("Error al intentar copiar al portapapeles:", err);
        }
    };


    return (
        <form className="org-form">
            <AtmInput
                required={true}
                label={label}
                value={inputValue}
                disabled={true}
                customStyle={true}
                onChange={handleInputChange}
                inputRef={inputRef}
            />

            <AtmButton content={content} onClick={handleCopyToClipboard} />
        </form>
    );
};

OrgFormClipboard.propTypes = {
    label: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};



export default OrgFormClipboard;
