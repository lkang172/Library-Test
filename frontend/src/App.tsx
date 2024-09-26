import Grid from "./Grid";
import Navbar from "./Navbar";
import InputTest from "./InputTest";
import Gallery from "./Gallery";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Grid>
        <Gallery></Gallery>
      </Grid>
      <InputTest prompt1="Book" prompt2="Author"></InputTest>
    </>
  );
}

export default App;
