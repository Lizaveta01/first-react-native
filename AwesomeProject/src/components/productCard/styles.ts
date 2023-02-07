import {StyleSheet} from 'react-native';
import {Colors} from '@/constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginVertical: 14,
  },
  productContainer: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    backgroundColor: Colors.BACKGROUND_LIGHT,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  productAvailable: {
    position: 'absolute',
    width: '20%',
    height: '24%',
    backgroundColor: Colors.GREEN,
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offPercentag: {
    fontSize: 12,
    color: Colors.WHITE,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  productImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 12,
    color: Colors.BLACK,
    fontWeight: '600',
    marginBottom: 2,
  },
  circleAvailableAccessory: {
    fontSize: 12,
    marginRight: 6,
    color: Colors.GREEN,
  },
  containerStatusAccessory: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAvailableAccessory: {
    fontSize: 12,
    color: Colors.GREEN,
  },
  circleUnvailableAccessory: {
    fontSize: 12,
    marginRight: 6,
    color: Colors.RED,
  },
  textUnvailableAccessory: {
    fontSize: 12,
    color: Colors.RED,
  },
  textContainer: {
    gap: 6,
  },
});
