import * as React from "react";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  ButtonGroup,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  createTheme,
} from "@mui/material";

const App = () => {
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LibraryMusicIcon
              fontSize="large"
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
            />
            <Typography
              variant="h3"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 550,
                letterSpacing: ".1rem",
                color: "White",
                textDecoration: "none",
              }}
            >
              Playlist Maker
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm"></Container>
          <Box align="left">
            <ButtonGroup orientation="vertical">
              <Button
                variant="h6"
                sx={{
                  mr: 1,
                }}
              >
                <Typography color="white">Home</Typography>
              </Button>
              <Button
                variant="h6"
                sx={{
                  mr: 1,
                }}
              >
                <Typography color="white">Search</Typography>
              </Button>
              <Button variant="h6">
                <Typography color="white">Library</Typography>
              </Button>
            </ButtonGroup>
          </Box>
        </div>
      </main>
    </>
  );
};

export default App;