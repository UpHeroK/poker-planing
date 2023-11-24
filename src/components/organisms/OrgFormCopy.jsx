import React, { useState, useRef } from "react";
import AtmInput from "../atoms/AtmInput";
import AtmButton from "../atoms/AtmButton";

const OrgFormCopy = ({ label, content }) => {
    const [inputValue, setInputValue] = useState("https://poker.com/asd165as4c32168ec4as1"); // Valor por defecto tipo link
    const inputRef = useRef(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleCopyToClipboard = () => {
        event.preventDefault();
        inputRef.current.select();
        inputRef.current.setSelectionRange(0, 99999);

        document.execCommand("copy");

        alert("Texto copiado: " + inputRef.current.value);
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

export default OrgFormCopy;
