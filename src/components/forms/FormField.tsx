import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import { ComponentProps } from "react";
import { TextInputProps } from "react-native";

import AppTextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

interface Props<T extends Record<string, any>> extends TextInputProps {
  name: keyof T;
  icon?: ComponentProps<typeof MaterialCommunityIcons>["name"];
  width?: import("react-native").DimensionValue;
}

const AppFormField = <T extends Record<string, any>>({
  name,
  width,
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
        width={width}
      />
      <ErrorMessage
        visible={touched[name] as boolean | undefined}
        error={errors[name] as string | undefined}
      />
    </>
  );
};

export default AppFormField;
