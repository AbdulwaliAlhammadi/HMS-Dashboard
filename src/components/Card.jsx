import { Box, Divider, Typography } from "@mui/material";

export const Card = ({ children, title }) => {
  return (
    <Box
      borderRadius={5}
      width
      boxShadow={3}
      padding={2}
      height
      paddingBottom={3}
    >
      <Typography variant="body1" component="h3" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      {title ? <Divider color="gray" /> : <></>}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        width
        height
        justifyContent="center"
        textAlign={"center"}
      >
        {children}
      </Box>
    </Box>
  );
};

export const CardIcon = ({ children, title, text }) => {
  return (
    <div style={{ display: "flex", textAlign: "start" }}>
      <div>{children}</div>
      <div style={{ marginLeft: "15px" }}>
        <Typography variant="h5" component="div" fontWeight="bold"> 
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </div>
    </div>
  );
};
