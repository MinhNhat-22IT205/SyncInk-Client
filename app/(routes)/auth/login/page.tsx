import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";

import LoginForm from "@/app/_features/authentication/components/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">Sign In</Heading>
        </CardHeader>
        <CardBody>
          <LoginForm />
        </CardBody>
      </Card>
    </>
  );
};

export default LoginPage;
