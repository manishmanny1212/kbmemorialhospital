import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      {/* <DownloadApp /> */}
      <Footer />
    </div>
  );
}

export default App;

/*

1. Css Baseline react component in materialUI:

  The CssBaseline component in Material-UI is a component that provides a consistent, baseline style to be applied across the entire application. 
  It helps in normalizing the default css styling (margin, padding etc) provided by the different browsers, ensuring that your application's UI looks same across different browsers.

*/