import { Box, Grid, Typography } from "@mui/material";
import { Card } from "./Card";
import { BedStackColChart } from "./BedStackColChart";
import { RoomPieChart } from "./RoomPieChart";
import { pink } from "@mui/material/colors";
import AssistWalkerTwoToneIcon from "@mui/icons-material/AssistWalkerTwoTone";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Body = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
          <Grid container spacing={3}>
            <Grid item={true} xs={12} md={4}>
              <Card title={"In patient"}>
                <Typography variant="h2">
                  5242
                  <AssistWalkerTwoToneIcon
                    sx={{ fontSize: 60, color: pink[500] }}
                  />
                </Typography>
              </Card>
            </Grid>
            <Grid item={true} xs={12} md={4}>
              <Card title={"Out patient"}>
                <Typography variant="h2">
                  2531
                  <SportsGymnasticsIcon sx={{ fontSize: 60 }} color="success" />
                </Typography>
              </Card>
            </Grid>
            <Grid item={true} xs={12} md={4}>
              <Card title={"Cash patient"}>
                <Typography variant="h2">
                  224
                  <MonetizationOnIcon sx={{ fontSize: 60 }} color="primary" />
                </Typography>
              </Card>
            </Grid>
            <Grid item={true} xs={12} md={4}>
              <Card title={"Room Types"}>
                <RoomPieChart height={300} />
              </Card>
            </Grid>
            <Grid item={true} xs={12} md={8}>
              <Card title={"Room/Bed"}>
                <BedStackColChart height={300} />
              </Card>
            </Grid>
            {/* <Grid item={true} xs={12} md={4}>
              <Grid container spacing={3}>
                <Grid item={true} xs={12}>
                  <Card title={"Cash patient"}>
                    <Typography variant="h2">
                      224
                      <MonetizationOnIcon
                        sx={{ fontSize: 60 }}
                        color="primary"
                      />
                    </Typography>
                  </Card>
                </Grid>
                <Grid item={true} xs={12}>
                  <Card title={"Cash patient"}>
                    <Typography variant="h2">
                      224
                      <MonetizationOnIcon
                        sx={{ fontSize: 60 }}
                        color="primary"
                      />
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Grid> */}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Body;
