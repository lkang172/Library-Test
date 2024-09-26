import Grid from "./Grid";
import Navbar from "./Navbar";
import InputTest from "./InputTest";
import Gallery from "./Gallery";
import { UserProvider } from "./UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <Navbar></Navbar>
        <Gallery></Gallery>
      </UserProvider>
    </>
  );
}

export default App;
