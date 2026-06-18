import Icon from "./components/Icon";
import ListItem from "./components/ListItem";
import Screen from "./components/Screen";

const App = () => {
  return (
    <Screen>
      <ListItem ImageComponent={<Icon name="email" />} title="my title" />
    </Screen>
  );
};

export default App;
