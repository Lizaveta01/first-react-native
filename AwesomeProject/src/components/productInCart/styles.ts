import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container1: {
    width: '30%',
    height: 100,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND_LIGHT,
    borderRadius: 10,
    marginRight: 22,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  container2: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
  },
  container3: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
  },
  text1: {
    fontSize: 14,
    maxWidth: '100%',
    color: Colors.BLACK,
    fontWeight: '600',
    letterSpacing: 1,
  },
  text2: {
    fontSize: 14,
    maxWidth: '100%',
    color: Colors.BLACK,
    fontWeight: '600',
    letterSpacing: 1,
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container5: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container6: {
    borderRadius: 100,
    marginRight: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: Colors.BACKGROUND_MEDIUM,
    opacity: 0.5,
  },
  icon: {
    fontSize: 16,
    color: Colors.BACKGROUND_DARK,
  },
  container7: {
    borderRadius: 100,
    marginLeft: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: Colors.BACKGROUND_MEDIUM,
    opacity: 0.5,
  },
  deleteIcon: {
    fontSize: 16,
    color: Colors.BACKGROUND_DARK,
    backgroundColor: Colors.BACKGROUND_LIGHT,
    padding: 8,
    borderRadius: 100,
  },
});
