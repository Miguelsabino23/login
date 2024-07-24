import logo from "./logo.svg";
import "./App.css";
import ShapeDrawer from "./ui/components/ShapeDrawer";
import Container from "./ui/components/Container";
import Footer from "./ui/components/Footer";

function App() {
  return (
    <div className='App'>
      <ShapeDrawer
        width={300}
        heigth={300}
        radiusTopRight={200}
        radiusBottomRight={200}
        radiusBottomLeft={200}
        top={-50}
        left={-60}
      ></ShapeDrawer>
      <ShapeDrawer
        width={180}
        heigth={160}
        top={380}
        left={120}
        radiusTopLeft={50}
        radiusBottomRight={40}
        radiusBottomLeft={100}
      ></ShapeDrawer>
      <ShapeDrawer
        width={400}
        heigth={400}
        right={200}
        top={70}
        radiusBottomRight={100}
        radiusTopLeft={100}
        radiusTopRight={100}
        radiusBottomLeft={500}
        transform={"rotate(200deg)"}
      ></ShapeDrawer>
      <Container></Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
