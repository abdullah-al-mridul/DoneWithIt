import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

interface PickerItem {
  label: string;
  value: any;
}

interface Props<T extends Record<string, any>> {
  items: PickerItem[];
  name: keyof T;
  placeholder?: string;
}

const AppFormPicker = <T extends Record<string, any>>({
  items,
  name,
  placeholder,
}: Props<T>) => {
  const { values, setFieldValue, touched, errors } = useFormikContext<T>();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name as string, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage
        error={errors[name] as string | undefined}
        visible={touched[name] as boolean | undefined}
      />
    </>
  );
};

export default AppFormPicker;
