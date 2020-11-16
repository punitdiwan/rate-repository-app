import { useContext } from 'react';

const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);
  
    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      const myResult = null;
    //    await mutate({variables: {input: {username, password}}});
    //   await authStorage.setAccessToken(myResult.data.authorize.accessToken);
    //   apolloClient.resetStore();
      return myResult;
    };
  
    return [signIn, result];
  };

export default useSignIn;
© 2020 Gi