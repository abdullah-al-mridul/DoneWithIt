import { ImagePickerAsset } from "expo-image-picker";
import { useFormikContext } from "formik";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

interface Props<T extends Record<string, any>> {
  name: keyof T;
}

const FormImagePicker = <T extends Record<string, any>>({ name }: Props<T>) => {
  const { values, setFieldValue, touched, errors } = useFormikContext<T>();
  const imageUris = (values[name] as string[]) || [];
  const handleAdd = (assets: ImagePickerAsset[] | undefined) => {
    if (assets && assets.length > 0) {
      setFieldValue(name as string, [...imageUris, assets[0].uri]);
    }
  };

  const handleRemove = (uri: string) => {
    setFieldValue(
      name as string,
      imageUris.filter((imageUri: string) => imageUri !== uri),
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage
        error={errors[name] as string | undefined}
        visible={touched[name] as boolean | undefined}
      />
    </>
  );
};

export default FormImagePicker;
