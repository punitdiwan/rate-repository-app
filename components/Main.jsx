import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView  } from 'react-native';
import theme from '../theme';
import AppBar from  './AppBar'
import SignIn from './SignIn';
import { NativeRouter as Router, Route, Switch, Redirect } from 'react-router-native';


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground

  },
});

const Main = () => {
  return (
    <SafeAreaView  style={styles.container}>
        <AppBar/>
        <Router>
            <Switch>
                <Route path="/" exact>
                    {/* <RepositoryList /> */}
                    <SignIn/>
                </Route>
                {/* <Route path="/signin" exact>
                <SignIn />
                </Route>
                <Route path="/signup" exact>
                <SignUp />
                </Route>
                <Route path="/createreview" exact>
                <CreateReview />
                </Route>
                <Route path="/reviews" exact>
                <ReviewList />
                </Route>
                <Route path="/signout" exact>
                <SignOut />
                </Route>
                <Route path="/repo/:id" exact>
                <RepositoryView />
                </Route> */}
                {/* <Redirect to="/" /> */}
            </Switch>
      </Router>
    </SafeAreaView >
  );
};

export default Main;
