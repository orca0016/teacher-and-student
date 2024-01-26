import * as Yup from "yup";

export const ValidationsQuestions = Yup.object().shape({
  nameQuestion: Yup.string().required("نام سوال نباید خالی باشه  "),
  nameCategory: Yup.string().required("دسته بندی خود را مشخص کنید  "),
options:Yup.array().of(
        Yup.string()
          .min(3, 'هر گزینه باید حداقل ۳ کاراکتر باشد')
          .required('پر کردن این فیلد الزامی است')
      )
      .required('حداقل یک گزینه الزامی است'),
  trueQuestion: Yup.string().required("نام ازمون نباید خالی باشه "),
});
