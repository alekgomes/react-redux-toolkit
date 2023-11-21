import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./features/usersSlice";
import Home from "./pages/Home";

function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addUser({ name: "new movie", genre: "terror", duration: 120 }));
  };

  return (
    <>
      <Home />
    </>
  );
}

export default App;
