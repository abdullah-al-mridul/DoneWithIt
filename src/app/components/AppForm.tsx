import { Formik } from "formik";
import { ReactNode } from "react";
import * as Yup from "yup";

type InitialValus = {
  email: "";
  password: "";
};

interface Props {
  initialValues: InitialValus;
  onSubmit: (values: InitialValus) => void;
  validationSchema: Yup.ObjectSchema<{
    email: string;
    password: string;
  }>;
  children: ReactNode;
}

const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: Props) => {
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
