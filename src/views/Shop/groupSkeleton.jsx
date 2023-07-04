import { Grid, Skeleton, Stack } from "@mui/material";

function GroupSkeleton(){
    return(
        <Grid container spacing={1}>
            {/* primera fila */}
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <Stack spacing={1} p={3}>
                <Skeleton variant="rectangular" width={"100%"} height={270} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <Stack spacing={1} p={3}>
                <Skeleton variant="rectangular" width={"100%"} height={270} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <Stack spacing={1} p={3}>
                <Skeleton variant="rectangular" width={"100%"} height={270} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <Stack spacing={1} p={3}>
                <Skeleton variant="rectangular" width={"100%"} height={270} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <Stack spacing={1} p={3}>
                <Skeleton variant="rectangular" width={"100%"} height={270} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <Stack spacing={1} p={3}>
                <Skeleton variant="rectangular" width={"100%"} height={270} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </Stack>
            </Grid>


            {/* fantasmon */}
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3} sx={{display:{md:"none", sm: "block",xs:"none"}}}>
                <Stack spacing={1} p={3}>
                <Skeleton variant="rectangular" width={"100%"} height={270} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </Stack>
            </Grid>

            

        </Grid>
    )
}

export default GroupSkeleton;