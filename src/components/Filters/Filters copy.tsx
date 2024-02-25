import { FormLabel, Input, Button, Flex } from '@chakra-ui/react';

const Filters = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <Flex as="form" flexDir="column" gap="10px" onSubmit={(e) => handleSubmit(e)}>
      <FormLabel>
        Товар
        <Input placeholder="Введите товар" type="text" />
      </FormLabel>

      <FormLabel>
        Бренд
        <Input placeholder="Введите бренд" type="text" />
      </FormLabel>

      <FormLabel>
        Цена
        <Input placeholder="Введите цену" type="number" />
      </FormLabel>

      <Button mt={4} colorScheme="teal" type="submit">
        Найти
      </Button>
    </Flex>
  );
};

export { Filters };
