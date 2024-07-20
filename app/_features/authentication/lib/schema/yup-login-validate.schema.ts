import * as Yup from "yup";

export const yLoginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export type LoginSchemaType = Yup.InferType<typeof yLoginSchema>;
