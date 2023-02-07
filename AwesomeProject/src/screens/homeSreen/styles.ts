import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  iconContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  shoppingBag: {
    fontSize: 18,
    color: Colors.BACKGROUND_MEDIUM,
    padding: 12,
  },
  buttonContainer: {
    backgroundColor: Colors.BACKGROUND_LIGHT,
    borderRadius: 10,
  },
  textContainer: {
    marginBottom: 10,
    padding: 16,
  },
  shopTitle: {
    fontSize: 26,
    color: Colors.BLACK,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: Colors.BLACK,
    fontWeight: '400',
    letterSpacing: 1,
    marginBottom: 10,
    lineHeight: 24,
  },
  productsCategoryWrapper: {
    padding: 16,
  },
  categoryLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    fontSize: 18,
    color: Colors.BLACK,
    fontWeight: '500',
    letterSpacing: 1,
  },
  countItems: {
    fontSize: 14,
    color: Colors.BLACK,
    fontWeight: '400',
    opacity: 0.5,
    marginLeft: 10,
  },
  textLink: {
    fontSize: 14,
    color: Colors.BLUE,
    fontWeight: '400',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
