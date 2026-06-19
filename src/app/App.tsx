import { useState } from "react";
import AppPicker from "./components/AppPicker";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];

type CategoryType = {
  label: string;
  value: number;
};

const App = () => {
  const [category, setCategory] = useState<CategoryType>(categories[0]);

  return (
    <Screen>
      <AppPicker
        items={categories}
        placeholder="Category"
        icon="apps"
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
};

export default App;
