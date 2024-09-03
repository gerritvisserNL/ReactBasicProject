import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      backgroundColor="white"
      variant="outline"
      onChange={changeFn}
      {...props}
    />
  );
};
