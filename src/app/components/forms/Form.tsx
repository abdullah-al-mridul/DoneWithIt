import { Formik } from "formik";
import { ReactNode } from "react";
import * as Yup from "yup";

interface Props<T extends Record<string, any>> {
  initialValues: T;
  onSubmit: (values: T) => void;
  validationSchema: Yup.ObjectSchema<any>;
  children: ReactNode;
}

const AppForm = <T extends Record<string, any>>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: Props<T>) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
