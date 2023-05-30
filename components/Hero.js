import { IconButton, Stack, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react'
export default function Hero() {
  return (
    <Stack sx={{
      height: "150vh", width: "100%",
    }}>
      <Typography zIndex={10} sx={{ width: "50%", position: "fixed", top: "70%", left: "49.5%", fontSize: "9vw", fontWeight: "bold", fontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif", color: "white", background: "black", mixBlendMode: "multiply" }}>REDSAND</Typography>
      <Stack sx={{ backgroundColor: "#210D70" }} width={1} zIndex={1}>
        <Stack direction={"column"} width={"50%"} padding={"100px 50px"} spacing={4} >
          <Typography fontSize={"3.2vw"} fontFamily={"Lato, Sans-serif"} fontWeight={"600"} color={"white"}>Unceasing innovation. Preserving the natural world.</Typography>
          <Typography fontSize={"1.2vw"} fontFamily={"Lato, Sans-serif"} fontWeight={"600"} color={"white"}>Redsand Ventures is unlocking frontier markets through responsible capital. We work with industry players and funders to build bold projects where the innovation proves out both the return on investment and impact.</Typography>
          <Typography fontSize={"3.4vw"} fontFamily={"Lato, Sans-serif"} fontWeight={"600"} color={"white"}><IconButton><ArrowForwardIosIcon fontSize='large' sx={{ color: "#E4106B" }} /></IconButton>What We Do</Typography>
        </Stack>
      </Stack>
      <Stack>
      </Stack>
    </Stack>
  )
}
