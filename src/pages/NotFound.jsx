import { Box } from "@mui/material"
import svg from "../assets/svg/404notFound.svg"
const NotFound = () => {
  return (
    <>
    <Box className="w-full h-[100vh] bg-slate-300 flex justify-center items-center">
            <img src={svg} alt="not found" width={"40%"} className="drop-shadow-xl" />
    </Box>
    </>
  )
}

export default NotFound