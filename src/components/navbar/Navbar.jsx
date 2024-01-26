import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import AvatarHead from '../Avatar'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [retrievedValue, setRetrievedValue] = useState({ username: "", isStudent: null })
  useEffect(()=>{
    setRetrievedValue(JSON.parse(localStorage.getItem("key")))

  },[])
  return (
    <>
    <Box className="w-full h-[80px]  pr-10 flex align-center items-center text-white bg-gradient-to-r to-[#8D14E5] via-purple-500 from-[#8D14E5] ">
                <Link to={"/login"}>
                  <div className="flex flex-row gap-3">
                    <AvatarHead
                      alt="test"
                      src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&uid=R109653717&ga=GA1.1.1468692298.1693819683&semt=sph"
                    />
                    <div>
                      <Typography variant="h5">
                        {retrievedValue.username}
                      </Typography>
                    </div>
                  </div>
                </Link>
              </Box>
              </>
  )
}

export default Navbar