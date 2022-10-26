import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { ContextCreator } from "./ContextProvider/ContextProvider";
import { routes } from './Routes/routes';

function App() {

  const { dark } = useContext(ContextCreator);
  document.body.style.background = dark ? '#0f172a' : '#ffffff';

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
