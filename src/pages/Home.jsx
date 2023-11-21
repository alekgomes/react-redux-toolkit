import Container from "@mui/material/Container";
import {
  Typography,
  Box,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  Button,
} from "@mui/material";
import { useState } from "react";
import { addUser } from "../features/usersSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { genres } from "../config";

const emptyUser = {
  name: "",
  genre: "",
  prefered: [],
};

const Home = () => {
  const [user, setUser] = useState(emptyUser);
  const dispatch = useDispatch();

  const handleTextChange = ({ target }) => {
    const { value, name } = target;
    setUser({ ...user, [name]: value });
  };

  const handleCheckBoxChange = ({ target }) => {
    const { value } = target;

    if (user.prefered.includes(value)) {
      setUser({
        ...user,
        prefered: user.prefered.filter((movie) => movie !== value),
      });
    } else {
      setUser({ ...user, prefered: [...user.prefered, value] });
    }
  };

  const handleSubmit = () => {
    dispatch(addUser(user));
    setUser(emptyUser);
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <Typography align="center" variant="h1">
          Pesquisa sobre filmes favoritos
        </Typography>

        <Link to="/details">
          <Button variant="contained">Ver resultados</Button>
        </Link>
      </Box>

      <form id="user-form">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <FormControl fullWidth>
            <TextField
              name="name"
              id="user-name"
              label="Nome"
              value={user.name}
              onChange={handleTextChange}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="user-genre-label">Seu gênero</InputLabel>
            <Select
              labelId="user-genre-label"
              id="user-genre-selector"
              label="Seu gênero"
              name="genre"
              value={user.genre}
              onChange={handleTextChange}
            >
              <MenuItem value="masculine">Masculino</MenuItem>
              <MenuItem value="feminine">Feminino</MenuItem>
              <MenuItem value="neutral">Neutro</MenuItem>
            </Select>
          </FormControl>
          <FormGroup sx={{ width: "100%" }}>
            <FormLabel component="legend">
              Gêneros preferidos de filme
            </FormLabel>
            <Box>
              {genres.map(({ label, value }, idx) => (
                <FormControlLabel
                  key={idx}
                  control={
                    <Checkbox
                      value={value}
                      name="movie-genre"
                      onChange={handleCheckBoxChange}
                      checked={user.prefered.includes(value)}
                    />
                  }
                  label={label}
                />
              ))}
            </Box>
          </FormGroup>
          <FormControl>
            <Button variant="outlined" onClick={handleSubmit}>
              Enviar
            </Button>
          </FormControl>
        </Box>
      </form>
    </Container>
  );
};

export default Home;
