import {StyleSheet} from 'react-native';
import {Colours} from '../../constants/colours';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colours.WHITE,
  },
  iconContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  shoppingBag: {
    fontSize: 18,
    color: Colours.BACKGROUND_MEDIUM,
    padding: 12,
  },
  buttonContainer: {
    backgroundColor: Colours.BACKGROUND_LIGHT,
    borderRadius: 10,
  },
  textContainer: {
    marginBottom: 10,
    padding: 16,
  },
  text: {
    fontSize: 26,
    color: Colours.BLACK,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: Colours.BLACK,
    fontWeight: '400',
    letterSpacing: 1,
    marginBottom: 10,
    lineHeight: 24,
  },
  container1: {
    padding: 16,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle1: {
    fontSize: 18,
    color: Colours.BLACK,
    fontWeight: '500',
    letterSpacing: 1,
  },
  textStyle2: {
    fontSize: 14,
    color: Colours.BLACK,
    fontWeight: '400',
    opacity: 0.5,
    marginLeft: 10,
  },
  textStyle3: {
    fontSize: 14,
    color: Colours.BLUE,
    fontWeight: '400',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
