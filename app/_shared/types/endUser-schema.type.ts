export type EndUserType = {
  id: string;
  username: string;
  email: string;
  avatar: string;
  gender: "MALE" | "FEMALE";
  description: string;
  activationToken: string;
};
