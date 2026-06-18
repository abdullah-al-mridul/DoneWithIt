import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";

const App = () => {
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
};

export default App;
