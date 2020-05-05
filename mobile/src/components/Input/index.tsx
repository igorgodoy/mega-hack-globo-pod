import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, InputLabel, LabelText } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  spanText: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, spanText, ...rest }: InputProps,
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [registerField, fieldName]);

  const handleInputFocused = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <>
      <InputLabel>
        <LabelText>{spanText}</LabelText>
      </InputLabel>
      <Container isFocused={isFocused} isErrored={!!error}>
        <TextInput
          ref={inputElementRef}
          defaultValue={defaultValue}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
          onFocus={handleInputFocused}
          onBlur={handleInputBlur}
          {...rest}
        />
      </Container>
    </>
  );
};

export default forwardRef(Input);
