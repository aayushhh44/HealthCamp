import { useMantineTheme } from "@mantine/core";
import SystemRoutes from "./routes";
import "@mantine/core/styles.css";

const App = () => {
  const theme = useMantineTheme();
  console.log(theme);
  return (
    <>
      <SystemRoutes />
    </>
  );
};

export default App;
