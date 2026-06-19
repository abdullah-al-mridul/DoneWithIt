import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import { ComponentProps } from "react";
import { TextInputProps } from "react-native";

import ErrorMessage from "../screens/ErrorMessage";
import AppTextInput from "./AppTextInput";

interface FormValues {
  email: string;
  password: string;
}

interface Props extends TextInputProps {
  name: keyof FormValues;
  icon?: ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const AppFormField = ({ name, ...otherProps }: Props) => {
  const { setFieldTouched, handleChange, errors, touched } =
    useFormikContext<FormValues>();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default AppFormField;
