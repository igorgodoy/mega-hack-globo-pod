import React from 'react';

import {
  Container,
  RadioText,
  RadioCircle,
  SelectedRadioButton,
  Content,
} from './styles';

interface OptionProps {
  key: number;
  text: string;
}

interface RadioButtonProps {
  options: OptionProps[];
  state: [number | null, React.Dispatch<React.SetStateAction<number>>];
}

const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  state,
}: RadioButtonProps) => {
  const [value, setValue] = state;

  return (
    <Content>
      {options.map((option) => {
        return (
          <Container key={option.key}>
            <RadioCircle
              onPress={() => {
                setValue(option.key);
              }}
            >
              {value === option.key && <SelectedRadioButton />}
            </RadioCircle>
            <RadioText>{option.text}</RadioText>
          </Container>
        );
      })}
    </Content>
  );
};

export default RadioButton;
