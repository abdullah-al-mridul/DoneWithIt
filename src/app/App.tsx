import { View } from "react-native";
import Card from "./components/Card";

const App = () => {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
        height: "100%",
      }}
    >
      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require("../../assets/jacket.jpg")}
      />
    </View>
  );
};

export default App;
