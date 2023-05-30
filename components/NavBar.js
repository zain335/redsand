import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image';


export default function NavBar() {
  return (
    <Box direction={"row"} sx={{ height: "small", backgroundColor: "#210D70", width: "100%" }} justifyContent={"center"}>
      <Grid container sx={{ padding: "30px 100px" }} wrap="nowrap">
        <Grid item xs>
            <Image
              src={"https://redsandventures.io/wp-content/uploads/2023/02/Artboard-12.png"}
              width={75}
              height={75}
              alt=""
            />
          {/* </Stack> */}
        </Grid>
        <Grid item xs={10}>
          <Stack direction={"row"} justifyContent={"center"} height={1} alignItems={"center"}>
            <Stack direction={"row"} spacing={3}>
              <Typography fontWeight={"600"} fontFamily={"Roboto, Sans-serif"} fontSize={"1.3vw"} color={"white"} sx={{cursor:"pointer"}}>Home</Typography>
              <Typography fontWeight={"600"} fontFamily={"Roboto, Sans-serif"} fontSize={"1.3vw"} color={"white"} sx={{cursor:"pointer"}}>What We Do </Typography>
              <Typography fontWeight={"600"} fontFamily={"Roboto, Sans-serif"} fontSize={"1.3vw"} color={"white"} sx={{cursor:"pointer"}}>Out Approach</Typography>
              <Typography fontWeight={"600"} fontFamily={"Roboto, Sans-serif"} fontSize={"1.3vw"} color={"white"} sx={{cursor:"pointer"}}>Who We Are</Typography>
              <Typography fontWeight={"600"} fontFamily={"Roboto, Sans-serif"} fontSize={"1.3vw"} color={"white"} sx={{cursor:"pointer"}}>Insights</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs >
         
        </Grid>
      </Grid>
    </Box>
  );
}
