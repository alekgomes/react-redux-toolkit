import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "./features/moviesSlice";

function App() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addMovie({ name: "new movie", genre: "terror", duration: 120 }));
  };

  return <></>;
}

export default App;
