import * as Yup from "yup";

export  const CreateTestValidation = Yup.object().shape({
    nameTest:Yup.string().required("نام ازمون نباید خالی باشه "),
    nameTeacherTest: Yup.string().required("اسم طراح سوال لازمه  "),
    timeTest: Yup.string().required("مدت زمان ازمون مشخص نیست "),
    categoryTest: Yup.string().required("دسته بندی ازمونت رو مشخص کن  "),
})
