import {StyleSheet} from 'react-native';

export const splashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

    paddingHorizontal: 54,
  },
  logoContainer: {
    width: '90%',
    height: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  logo: {
    width: '100%',
    height: '20%',
    alignSelf: 'center',
    margin: 'auto',
  },
  textStyle: {
    color: 'white',
    padding: 40,
  },
});
