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
  imageContainer: {
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
  infoContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
  },
  priceContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
  },
  name: {
    fontSize: 14,
    maxWidth: '100%',
    color: Colors.BLACK,
    fontWeight: '600',
    letterSpacing: 1,
  },
  price: {
    fontSize: 14,
    maxWidth: '100%',
    color: Colors.BLACK,
    fontWeight: '600',
    letterSpacing: 1,
  },
  toolsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  counerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  iconCircle: {
    borderRadius: 100,
    padding: 4,
    borderWidth: 1,
    borderColor: Colors.BACKGROUND_MEDIUM,
    opacity: 0.5,
  },
  icon: {
    fontSize: 16,
    color: Colors.BACKGROUND_DARK,
  },
  deleteIcon: {
    fontSize: 16,
    color: Colors.BACKGROUND_DARK,
    backgroundColor: Colors.BACKGROUND_LIGHT,
    padding: 8,
    borderRadius: 100,
  },
});
