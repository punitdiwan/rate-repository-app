import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView  } from 'react-native';
import { Link, withRouter } from "react-router-native";
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        height: 80,
        color: theme.colors.mainBackground,
        backgroundColor: theme.colors.background,
        alignItems: "center"
    },
    tab: {
        flexGrow: 0,
        color: "white",
        paddingLeft: 15 
    }
  });

  const AppBarTab = ({ text, url }) => {

    return(
        <Link to={url} component={TouchableWithoutFeedback}>
            <View >
                <Text fontWeight="bold"  fontSize="subheading" style={styles.tab}>
                    {text}
                </Text>
            </View>

        </Link>
    );
};

const AppBar = () => {
  return (
        <View style={styles.container}>
            <ScrollView horizontal >
                <AppBarTab text="Repositories" url="/" show="true"/>
                <AppBarTab text="Create Review" url="/createreview" />
                <AppBarTab text="My Reviews" url="/reviews" />
                <AppBarTab text="Sign in" url="/signin" />
                <AppBarTab text="Sign up" url="/signup" />
                <AppBarTab text="Sign out" url="/signout"/>
            </ScrollView>
        </View>
  );
}


export default AppBar;