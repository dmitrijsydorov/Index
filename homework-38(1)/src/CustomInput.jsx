import { useState} from "react";

import "./CustomInput.css";

function CustomInput(props) {
    const { type, placeholder, label } = props;

    return (
        <label className="label-style">
            {label}
            <input type={type} placeholder={placeholder} />
        </label>
    );
}

export default CustomInput;