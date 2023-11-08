import { Box, Grid } from "@mui/material";
import { Card, CardIcon } from "./Card";
import { BedStackColChart } from "./BedStackColChart";
import { RoomPieChart } from "./RoomPieChart";
import { lightBlue, lightGreen, pink, purple } from "@mui/material/colors";
import AssistWalkerTwoToneIcon from "@mui/icons-material/AssistWalkerTwoTone";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { PatChartByEntry, PatChartByExit } from "./PatientCntByEntExt";


const Body = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
          <Grid container spacing={3}>
            <Grid item={true} xs={6} md={3} >
              <Card>
                <CardIcon title={"24K"} text={"In Patients"}>
                  <AssistWalkerTwoToneIcon sx={{ fontSize: 60, color: pink[500], backgroundColor:pink[50], borderRadius:'50%' }}/>
                </CardIcon>
              </Card>
            </Grid>
            <Grid item={true} xs={6} md={3}>
              <Card>
                <CardIcon title={"20K"} text={"Out Patients"}>
                  <DirectionsRunIcon sx={{ fontSize: 60, color: lightGreen[500], backgroundColor:lightGreen[50], borderRadius:'50%' }}/>
                </CardIcon>
              </Card>
            </Grid>
            <Grid item={true} xs={6} md={3}>
              <Card>
                <CardIcon title={"13.5K"} text={"Cash Paid"}>
                  <AttachMoneyIcon sx={{ fontSize: 60, color: lightBlue[500], backgroundColor:lightBlue[50], borderRadius:'50%' }}/>
                </CardIcon>
              </Card>
            </Grid>
            <Grid item={true} xs={6} md={3}>
              <Card>
                <CardIcon title={"11.8K"} text={"Later Paid"}>
                  <AccountBalanceIcon sx={{ fontSize: 60, color: purple[500], backgroundColor:purple[50], borderRadius:'50%' }}/>
                </CardIcon>
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
            <Grid item={true} xs={12} md={6}>
              <Card title={"Patient Count vs Entry Types"}>
                <PatChartByEntry height={400} />
              </Card>
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <Card title={"Patient Count vs Exit Types"}>
                <PatChartByExit height={400} />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Body;
