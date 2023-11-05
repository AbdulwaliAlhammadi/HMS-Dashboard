import { Box, Divider, Typography } from "@mui/material";

export const Card = ({ children, title }) => {
  return (
    <Box borderRadius={5} width boxShadow={3} padding={2} height paddingBottom={4}>
      <Typography variant="body1" component="h3" gutterBottom>
        {title}
      </Typography>
      <Divider color="white" />
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
