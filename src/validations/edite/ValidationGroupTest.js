import * as Yup from "yup";

export const ValidationGroupTestsEdite = Yup.object().shape({
    nameGroupTest: Yup.string().required("حتما باید برای گروه امتحان اسم داشته باشی"),
    id:Yup.number()
})