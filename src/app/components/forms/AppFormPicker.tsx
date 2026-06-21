import { useFormikContext } from "formik";
import { ComponentType } from "react";
import { DimensionValue } from "react-native";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

interface PickerItemType {
  label: string;
  value: any;
}

interface PickerItemProps {
  label: string;
  onPress?: () => void;
}

interface Props<T extends Record<string, any>> {
  items: PickerItemType[];
  name: keyof T;
  placeholder?: string;
  width?: DimensionValue;
  PickerItemComponent?: ComponentType<PickerItemProps>;
  numberOfColumns?: number;
}

const AppFormPicker = <T extends Record<string, any>>({
  items,
  name,
  placeholder,
  width,
  PickerItemComponent,
  numberOfColumns,
}: Props<T>) => {
  const { values, setFieldValue, touched, errors } = useFormikContext<T>();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name as string, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage
        error={errors[name] as string | undefined}
        visible={touched[name] as boolean | undefined}
      />
    </>
  );
};

export default AppFormPicker;
