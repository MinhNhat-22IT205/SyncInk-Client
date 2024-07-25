"use client";
import { Button, Box } from "@chakra-ui/react";
import { useFormik } from "formik";

import FormField from "@/app/_shared/components/FormField";

import {
  RegisterSchemaType,
  yRegisterSchema,
} from "../lib/schema/yup-register.schema";

const initialValues: RegisterSchemaType = {
  email: "",
  password: "",
};

const RegisteForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: yRegisterSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box width="300px" mx="auto">
      <form onSubmit={formik.handleSubmit}>
        <FormField label="Email" name="email" type="email" />
        <FormField label="Password" name="password" type="password" />
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default RegisteForm;
