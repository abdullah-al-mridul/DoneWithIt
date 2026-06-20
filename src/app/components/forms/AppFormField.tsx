import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import { ComponentProps } from "react";
import { TextInputProps } from "react-native";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface Props<T extends Record<string, any>> extends TextInputProps {
  name: keyof T;
  icon?: ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const AppFormField = <T extends Record<string, any>>({
  name,
  ...otherProps
}: Props<T>) => {
  const { setFieldTouched, handleChange, errors, touched } =
    useFormikContext<T>();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name as string)}
        onBlur={() => setFieldTouched(name as string)}
        {...otherProps}
      />
      <ErrorMessage
        visible={touched[name] as boolean | undefined}
        error={errors[name] as string | undefined}
      />
    </>
  );
};

export default AppFormField;
