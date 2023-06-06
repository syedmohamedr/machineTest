import CheckBox from '@react-native-community/checkbox';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  searchBar: {
    backgroundColor: '#dfe1e6',
    marginTop: '5%',
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: '5%',
    height: 40,
  },
  renderItemMainContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    borderRadius: 20,
    padding: 10,
    borderWidth: 0.5,
  },
  checkBox: {
    height: 20,
    width: 20,
  },
  image: {
    width: 75,
    height: 75,
    alignSelf: 'center',
  },
  heading: {
    marginHorizontal: 10,
    fontWeight: '600',
    alignSelf: 'center',
    top: -10,
  },
  renderItemFirstSubContainer: {
    width: '40%',
    borderRightWidth: 0.5,
  },
  renderItemSecondSubContainer: {
    width: '55%',
    alignSelf: 'center',
    padding: 10,
  },
});
