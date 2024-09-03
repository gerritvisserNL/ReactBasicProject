import { Button as CButton } from "@chakra-ui/react";

export const BackButton = ({ clickFn, ...props }) => {
  return (
    <CButton
      variant="ghost"
      size="sm"
      color="blue.600"
      onClick={clickFn}
      _hover={{ color: "blue.400" }}
      aria-label="Go Back"
      fontWeight="600"
      fontSize="xl"
      {...props}
    >
      &lt;
    </CButton>
  );
};
