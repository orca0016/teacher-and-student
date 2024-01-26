import * as Yup from "yup";

export const ValidationTests = Yup.object().shape({
    nameGroupTest: Yup.string().required("حتما باید برای گروه امتحان اسم داشته باشی"),
})