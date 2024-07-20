"use client";

import { Button, Box, VStack, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";

import FormField from "@/app/_shared/components/FormField";
import { login } from "@/app/_shared/lib/next-auth/login-action";

import {
  yLoginSchema,
  LoginSchemaType,
} from "../lib/schema/yup-login-validate.schema";
import { useRouter } from "next/navigation";

const initialValues: LoginSchemaType = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const toast = useToast();
  const router = useRouter();

  return (
    <Box width="300px" mx="auto">
      <Formik
        initialValues={initialValues}
        validationSchema={yLoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          try {
            await login(values);

            toast({
              title: "Login successful.",
              description: "You are now logged in.",
              status: "success",
              duration: 9000,
              isClosable: true,
              position: "top-right",
            });
            router.push("/");
          } catch (error) {
            toast({
              title: "Login failed.",
              description: error + "",
              status: "error",
              duration: 9000,
              isClosable: true,
              position: "top-right",
            });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          <Form>
            <VStack spacing={4} align="flex-start">
              <FormField label="Email" name="email" type="email" />
              <FormField label="Password" name="password" type="password" />
              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                isLoading={formik.isSubmitting}
              >
                Submit
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
