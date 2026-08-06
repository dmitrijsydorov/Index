import * as yup from "yup";

const onlyLetters = /^[a-zA-Za-яА-ЯіІїЇєЄґҐ\s]+$/;
const phoneValidation = /^\d{10,13}$/;
const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

export const schema = yup.object().shape({
    name: yup
        .string()
        .min(2, "Name must have at least 2 letters")
        .max(100, "Name must have a maximum of 100 letters")
        .matches(onlyLetters, "Does your name have numbers? Don't be ridiculous")
        .required("Username is required"),

    email: yup.string().email("Email is wrong").required("Email is required"),

    phone: yup.string().matches(phoneValidation, {
        message:
            "Phone number must contain only numbers.No spaces, brackets or plus signs",
        excludeEmptyString: true,
    }),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .matches(
            passwordValidation,
            "Must contain at least one uppercase, one lowercase, one number and one special case character",
        )
        .required("Password is required"),
});