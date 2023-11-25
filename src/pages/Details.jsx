import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { peopleGenres } from "../config";

const Details = () => {
  const users = useSelector((state) => state.users);
  const flatten = users.map((user) => user.prefered).flat();

  const initialPrefered = {
    hero: {
      count: 0,
      label: "Heróis",
    },
    suspense: {
      count: 0,
      label: "Suspense",
    },
    adventure: {
      count: 0,
      label: "Aventura",
    },
    horror: {
      count: 0,
      label: "Terror",
    },
    action: {
      count: 0,
      label: "Ação",
    },
  };

  const derivePreferedFromUsers = flatten.reduce((acc, curr) => {
    acc[curr].count += 1;

    return acc;
  }, initialPrefered);

  return (
    <Container maxWidth="lg">
      <Link to="/">
        <Button variant="contained">Voltar</Button>
      </Link>
      <Typography align="center" variant="h1">
        Resultados da pesquisa
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "3rem",
        }}
      >
        <Box>
          <Typography align="left" variant="h2">
            Gêneros de filmes
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Gênero</TableCell>
                  <TableCell align="right">Votos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(derivePreferedFromUsers).map(
                  ([key, options]) => (
                    <TableRow
                      key={key}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {options.label}
                      </TableCell>
                      <TableCell align="right">{options.count}</TableCell>
                    </TableRow>
                  ),
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <Typography align="left" variant="h2">
            Participantes
          </Typography>

          {users.map((user, idx) => (
            <Accordion key={idx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{user.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table aria-label="table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Gênero</TableCell>
                        <TableCell align="right">Filmes</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {peopleGenres[user.genre]}
                        </TableCell>
                        <TableCell align="right">
                          {user.prefered.join(", ") || "Sem filmes preferidos"}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Details;
