import { useToast } from "@chakra-ui/react";

const tryCatchWithToast = async (fn: () => Promise<any>, message: string) => {
  const toast = useToast();
  try {
    return await fn();
  } catch (error) {
    toast.error(message);
  }
};
