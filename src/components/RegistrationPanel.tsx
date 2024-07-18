import {
  Container,
  Typography,
  TextField,
  Modal,
  Box,
  Button,
} from "@mui/material";
import AddCircleOutLineIcon from "@mui/icons-material/AddCircle";
import { useThemeContext } from "../context/ThemeContext";

export const CreateUserPanel = (props: any) => {
  const { theme } = useThemeContext();
  return (
    <Modal
      sx={{ display: "flex", alignItems: "center" }}
      open={props.status}
      onClose={props.close}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 400,
          maxHeight: 500,
          backgroundColor: "white",
          padding: 3,
          width: "100%",
          position: "relative",
        }}
        maxWidth={false}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 2,
          }}
        >
          <Typography fontFamily={"Raleway"} variant="h5">
            {props.method}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography fontFamily={"Raleway"}>E-mail</Typography>
          <TextField
            sx={{
              borderColor: theme.palette.primary.main,
              borderWidth: 1,
              borderRadius: "8px",
              borderStyle: "solid",
            }}
            onChange={(e) => props.useremail(e)}
            InputProps={{
              style: { color: theme.palette.primary.main },
            }}
          />
          <Typography fontFamily={"Raleway"}>Password</Typography>
          <TextField
            sx={{
              borderColor: theme.palette.primary.main,
              borderWidth: 1,
              borderRadius: "8px",
              borderStyle: "solid",
            }}
            type="password"
            onChange={(e) => props.userpassword(e)}
            InputProps={{
              style: { color: theme.palette.primary.main },
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              color="success"
              variant="contained"
              sx={{ width: 10, marginTop: 2 }}
              onClick={props.submit}
            >
              <AddCircleOutLineIcon />
            </Button>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};
