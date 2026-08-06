import { useField } from "formik";
import "./CustomInput.css";

export default function CustomInput({ id, label, ...props }) {
    const [field, meta] = useField(props);

    return (
        <div className='input-field'>
            <label htmlFor={id}>{label}</label>
            <input
                className={`input ${meta.error && meta.touched ? "input-error" : ""}`}
                id={id}
                {...props}
                {...field}
            />
            {meta.error && meta.touched && (
                <span className='error-message'>{meta.error}</span>
            )}
        </div>
    );
}