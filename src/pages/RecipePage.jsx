import { useEffect } from "react";
import {
  Center,
  Box,
  Image,
  Heading,
  Text,
  Tag,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { BackButton } from "../components/ui/BackButton";

export const RecipePage = ({ recipe, clickFn }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Center
      bgColor="blue.100"
      flexDirection="column"
      justifyContent="flex-start"
      minHeight="100vh"
      paddingBottom="1rem"
    >
      <Box
        w={{ base: "100%", md: "60%" }}
        bgColor="white"
        borderRadius="1rem"
        boxShadow="lg"
        mt="1rem"
      >
        <Flex direction="row" alignItems="center" justifyContent="center">
          <Box flex="1">
            <BackButton onClick={() => clickFn()} mr="auto" />
          </Box>
          <Box
            flex="2"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="logo.png" w="3rem" h="3rem" margin="0.5rem" />
          </Box>
          <Box flex="1" />
        </Flex>
        <Box w="100%" h="10rem" overflow="hidden">
          <Image
            src={recipe.image}
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Box display="flex" h="100%" w="100%" p="1rem 2rem">
          <Box flex={1} width="50%">
            <Stack spacing="1">
              <Text
                color="darkgrey"
                textTransform="uppercase"
                fontSize="small"
                mt="0.25rem"
              >
                {recipe.mealType}
              </Text>
              <Heading size="md" mb="0.5rem">
                {recipe.label}
              </Heading>
              <Text>
                Total cooking time:
                <Text as="span" fontWeight="bolder">
                  <Text as="span" ml="0.5rem">
                    {recipe.totalTime} Minutes
                  </Text>
                </Text>
              </Text>
              <Text>
                Servings:
                <Text as="span" fontWeight="bolder" ml="0.5rem">
                  {recipe.yield}
                </Text>
              </Text>
              <Text as="span" fontWeight="bolder" m="0.5rem 0">
                Ingredients:
              </Text>
              <Flex gap={2} flexDir={"column"}>
                {recipe.ingredients.map((ingredient) => (
                  <Text key={ingredient.foodId} size="md">
                    {ingredient.text}
                  </Text>
                ))}
              </Flex>
            </Stack>
          </Box>

          <Box flex={1} width="50%">
            <Stack>
              <Text>Health labels</Text>
              <Flex flexDir="row" flexWrap="wrap" gap="0.5rem">
                {recipe.healthLabels.map((healthLabel, index) => (
                  <Tag key={index} bgColor="purple.300">
                    {healthLabel}
                  </Tag>
                ))}
              </Flex>
              {recipe && recipe.dietLabels && recipe.dietLabels.length > 0 && (
                <>
                  <Text>Diet:</Text>
                  <Flex flexDir="row" flexWrap="wrap" gap="0.5rem">
                    {recipe.dietLabels.map((dietLabel, index) => (
                      <Tag key={index} bgColor="green.300">
                        {dietLabel}
                      </Tag>
                    ))}
                  </Flex>
                </>
              )}
              {recipe && recipe.cautions && recipe.cautions.length > 0 && (
                <>
                  <Text>Cautions:</Text>
                  <Flex flexDir="row" flexWrap="wrap" gap="0.5rem">
                    {recipe.cautions.map((caution, index) => (
                      <Tag key={index} bgColor="red.300">
                        {caution}
                      </Tag>
                    ))}
                  </Flex>
                </>
              )}
              <Text>Total nutrients:</Text>

              <Flex flexDir="row" flexWrap="wrap">
                {["ENERC_KCAL", "CHOCDF", "PROCNT", "FAT", "CHOLE", "NA"].map(
                  (chemAbbr) => {
                    let nutrien = recipe.totalNutrients[chemAbbr];

                    if (chemAbbr === "ENERC_KCAL") {
                      nutrien = { ...nutrien, label: "Calories" };
                    }

                    return nutrien ? (
                      <Box
                        alignContent="left"
                        mr="2rem"
                        mb="1rem"
                        key={chemAbbr}
                      >
                        <Text fontWeight="bold">
                          {Math.round(nutrien.quantity)}
                          <Text as="span" ml="0.2rem">
                            {nutrien.unit}
                          </Text>
                        </Text>
                        <Text>{nutrien.label}</Text>
                      </Box>
                    ) : null;
                  }
                )}
              </Flex>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};
