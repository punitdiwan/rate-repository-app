import React from 'react'
import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
    errorText: {
      marginTop: 5,
      color: "#d73a4a",
      margin: 10
    },
  });

  const FormikTextInput = ({ name, ...props }) => {
  
    return (
      <>
        <TextInput
          value={"Login"}
          {...props}
        />
      </>
    );
  };
  export default FormikTextInput;
