import user from "../assets/svg/user.svg"
import list from "../assets/svg/list.svg"
import Note from "../assets/svg/Note.svg"
import roadmap from "../assets/svg/roadmap.svg"
import todo from "../assets/svg/todo.svg"
import chart from "../assets/svg/chart.svg"
import contact from "../assets/svg/contact.svg"

export  const SideBarData =[
    {
        id:"1" ,
        title: "داشبورد ",
        icon: user,
        student: true ,
    },
    {
        id:"2" ,
        title: "لیست سوالات",
        icon:list,
        student: false ,
    },
    {
        id:"3" ,
        title: "اضافه کردن سوال",
        icon:roadmap,
        student: false ,
    },
    {
        id:"4" ,
        title: "ازمون ها",
        icon: todo,
        student: true ,
    },
    {
        id:"5" ,
        title: "test",
        icon: Note,
        student: true ,
    },
    {
        id:"6" ,
        title: "امار",
        icon:chart,
        student: true ,
    },
    {
        id:"7" ,
        title: "ارتباط با من ",
        icon:contact,
        student: true ,
    }
]