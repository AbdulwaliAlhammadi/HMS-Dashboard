import { Box, Divider, Typography } from "@mui/material";

export const Card = ({ children, title }) => {
  return (
    <div className="BoxChart">
      <Box borderRadius={5} width boxShadow={3} padding={2} height>
        <Typography variant="body1" component="h3" gutterBottom>
          {title}
        </Typography>
        <Divider color="white" />
        {children}
      </Box>
    </div>
  );
};
