import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useField } from "formik";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
}

const FormField = ({ label, name, type = "text" }: InputFieldProps) => {
  // this will return field exactly like <Field> from formik
  const [formikFieldProps, formikMetaProps] = useField(name);

  return (
    <FormControl isInvalid={!!formikMetaProps.error && formikMetaProps.touched}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input {...formikFieldProps} id={name} type={type} variant="filled" />
      {formikMetaProps.touched && formikMetaProps.error && (
        <FormErrorMessage>{formikMetaProps.error}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormField;
