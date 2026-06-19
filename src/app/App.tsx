import AppPicker from "./components/AppPicker";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";

const App = () => {
  return (
    <Screen>
      <AppPicker placeholder="Category" icon="apps" />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
};

export default App;
