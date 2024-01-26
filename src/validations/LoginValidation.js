import * as Yup from "yup";

export  const LoginValidationSchema = Yup.object().shape({
    userName:Yup.string().required("نام کربری نباید خالی باشد  "),
    password: Yup.string().required("رمز عبور نباید خالی باشد  "),
})