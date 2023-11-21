import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "./features/moviesSlice";
import Home from "./pages/Home";

function App() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addMovie({ name: "new movie", genre: "terror", duration: 120 }));
  };

  return (
    <>
      <Home />
    </>
  );
}

export default App;
