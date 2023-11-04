import { Box, Grid } from "@mui/material";
import { Card } from "./Card";
import { BedStackColChart } from "./BedStackColChart";
import { RoomPieChart } from "./RoomPieChart";

const Body = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
          <Grid container spacing={3}>
            <Grid item={true} xs={12} md={6}>
              <Card title={"Room Types"}>
                <RoomPieChart height={300} />
              </Card>
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <Card title={"Room/Bed"}>
                <BedStackColChart height={300} />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Body;
