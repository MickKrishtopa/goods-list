import { FormLabel, Input, Button, Flex } from '@chakra-ui/react';

import { IFilter } from '../../shared/types';
import { useEffect, useState } from 'react';

export interface IForm {
  product: string;
  brand: string;
  price: string | number;
}

type Props = {
  onSubmit: (filter: IFilter | null) => void;
};

const Filters = ({ onSubmit }: Props) => {
  const [filter, setFilter] = useState<IFilter | null>(null);
  const [inputsValue, setInputsValue] = useState<IForm>({
    product: '',
    brand: '',
    price: '',
  });

  useEffect(() => {
    const currentFilter = Object.keys(inputsValue)
      .filter((key) => inputsValue[key as keyof IForm] !== '')
      .map((item) => {
        if (item === 'price') {
          return { [item]: Number(inputsValue[item as keyof IForm]) };
        }
        return { [item]: inputsValue[item as keyof IForm] };
      });

    setFilter(currentFilter[0] || null);
  }, [inputsValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputsValue(() => {
      const updatedState: IForm = {
        product: '',
        brand: '',
        price: '',
      };

      for (const key in Object(updatedState)) {
        if (key === name) {
          updatedState[key as keyof IForm] = value;
        } else updatedState[key as keyof IForm] = '';
      }
      return updatedState;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    onSubmit(filter);
  };

  return (
    <Flex
      as="form"
      flexDir="column"
      onSubmit={(e) => handleSubmit(e)}
      width={['100%', '250px']}
    >
      <FormLabel>Продукт</FormLabel>
      <Input
        name="product"
        value={inputsValue.product}
        onChange={(e) => handleChange(e)}
      />
      <FormLabel>Бренд</FormLabel>
      <Input name="brand" value={inputsValue.brand} onChange={(e) => handleChange(e)} />
      <FormLabel>Цена</FormLabel>
      <Input
        name="price"
        type="number"
        value={inputsValue.price}
        onChange={(e) => handleChange(e)}
      />

      <Button mt={4} colorScheme="teal" type="submit">
        Найти
      </Button>
    </Flex>
  );
};

export { Filters };
