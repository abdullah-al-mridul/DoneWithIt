import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

const initialValues = {
  title: "",
  price: 0,
  description: "",
  category: null,
};

const ListingEditScreen = () => {
  return (
    <Screen stylesExtend={styles.container}>
      <AppForm
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          maxLength={8}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          width={250}
        />
        <AppFormPicker
          items={categories}
          name={"category"}
          placeholder={"Category"}
          width="50%"
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          maxLength={255}
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default ListingEditScreen;
