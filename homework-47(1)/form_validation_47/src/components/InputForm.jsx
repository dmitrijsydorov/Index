import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import "./InputForm.css";
import { schema } from "../schemas/formSchema";

export default function InputForm() {
    const initialValues = {
        name: "",
        phone: "",
        email: "",
        password: "",
    };
    const handleSubmit = async (values, { resetForm }) => {
        console.log("Submitting...", values);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Submitted");
        resetForm();
    };

    return (
        <div className='form-back'>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}>
                <Form>
                    <CustomInput
                        type='text'
                        name='name'
                        placeholder='Name'
                        label='Name*'
                        id='idName'
                    />

                    <CustomInput
                        type='text'
                        name='email'
                        placeholder='E-mail'
                        label='E-mail*'
                        id='idEmail'
                    />

                    <CustomInput
                        type='tel'
                        name='phone'
                        placeholder='Phone'
                        label='Phone'
                        id='idPhone'
                    />

                    <CustomInput
                        type='text'
                        name='password'
                        placeholder='Password'
                        label='Password*'
                        id='idPassword'
                    />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    );
}