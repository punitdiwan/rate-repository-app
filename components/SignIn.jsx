import React from 'react'
import { Formik } from 'formik';
import { useHistory } from "react-router-native";
import FormikTextInput from './FormikTextInput';

import { Text, View, Button, StyleSheet, TouchableWithoutFeedback, ScrollView  } from 'react-native';

export  function SignInForm () {
    return (
        <View style={{ backgroundColor: "white" }}>
            <View style={{ margin: 15 }}>
                <FormikTextInput name="username" placeholder="Username" testID='usernameField'/>
                <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} testID='passwordField'/>
            </View>
        </View>
    )
}

const SignIn = () => {
    const [signIn] = useSignIn();
    const history = useHistory();
  
    const onSubmit = async (values) => {
      const { username, password } = values;
  
      try {
        await signIn({ username, password });
        history.push("/");
      } catch (e) {
        console.log(e);
      }
    };
  
    const initialValues = {
      username: '',
      password: '',
    };
  
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    );
  };
  export default SignIn;
