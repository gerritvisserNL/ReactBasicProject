import {
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
  Tag,
} from "@chakra-ui/react";

export const RecipeListCard = ({ recipe, clickFn }) => {
  return (
    <Card
      borderRadius="xl"
      w="20rem"
      h="29rem"
      onClick={() => clickFn(recipe)}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
    >
      <CardBody
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="0"
        backgroundColor="white"
        borderRadius="xl"
      >
        <Box w="100%" h="11rem" overflow="hidden" borderTopRadius="xl">
          <Image
            src={recipe.image}
            w="100%"
            h="100%"
            borderTopRadius="xl"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Stack
          mt="4"
          spacing="2"
          display="flex"
          flexDirection="column"
          alignItems="center"
          p="0 2rem"
        >
          <Text color="grey">{recipe.mealType}</Text>
          <Heading size="md" textAlign="center">
            {recipe.label}
          </Heading>
          <Flex gap={2}>
            {["Vegetarian", "Vegan"].map(
              (label) =>
                recipe.healthLabels?.includes(label) && (
                  <Tag key={label} bgColor="purple.300">
                    {label}
                  </Tag>
                )
            )}
          </Flex>

          <Flex gap={2}>
            {recipe.dietLabels?.map((label) => (
              <Tag key={label} bgColor="green.300">
                {label}
              </Tag>
            ))}
          </Flex>
          <Text>
            Dish:
            <Text as="span" fontWeight="bold" ml="0.5rem">
              {recipe.dishType}
            </Text>
          </Text>

          {recipe && recipe.cautions && recipe.cautions.length > 0 && (
            <>
              <Text>Cautions:</Text>
              <Flex
                gap={2}
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="center"
              >
                {recipe.cautions.map((caution) => (
                  <Tag key={caution} bgColor="red.300">
                    {caution}
                  </Tag>
                ))}
              </Flex>
            </>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
