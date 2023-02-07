import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
    position: 'relative',
  },
  topLineContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  chevronLeft: {
    fontSize: 18,
    color: Colors.BACKGROUND_DARK,
    padding: 12,
  },
  sreenName: {
    fontSize: 14,
    color: Colors.BLACK,
    fontWeight: '400',
  },
  cartTitle: {
    fontSize: 20,
    color: Colors.BLACK,
    fontWeight: '500',
    letterSpacing: 1,
    paddingTop: 20,
    paddingLeft: 16,
    marginBottom: 10,
  },
  productsContainer: {
    paddingHorizontal: 16,
  },
  orderOptionsContainer: {
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  optionTitle: {
    fontSize: 16,
    color: Colors.BLACK,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 20,
  },
  orderOptionsContainerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoOptionWrapper: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
  },
  buttonWrapper: {
    color: Colors.BLUE,
    backgroundColor: Colors.BACKGROUND_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    marginRight: 18,
  },
  iconDelivery: {
    fontSize: 18,
    color: Colors.BLUE,
  },
  oprtionDescription: {
    fontSize: 12,
    color: Colors.BLACK,
    fontWeight: '400',
    lineHeight: 20,
    opacity: 0.5,
  },
  chevronRight: {
    fontSize: 22,
    color: Colors.BACKGROUND_DARK,
  },
  orderInfoWrapper: {
    paddingHorizontal: 16,
    marginTop: 40,
    marginBottom: 80,
  },
  subtotalTaxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalTaxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  buttonPositionWrapper: {
    position: 'absolute',
    bottom: 16,
    height: '8%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperButtonOrderText: {
    width: '86%',
    height: '90%',
    backgroundColor: Colors.BLUE,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInIcon: {
    fontSize: 10,
    fontWeight: '900',
    color: Colors.BLUE,
    letterSpacing: 1,
  },
  optionSubTitle: {
    fontSize: 14,
    color: Colors.BLACK,
    fontWeight: '500',
  },
  orderTitle: {
    fontSize: 16,
    color: Colors.BLACK,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 20,
  },
  totalTitle: {
    fontSize: 12,
    fontWeight: '400',
    maxWidth: '80%',
    color: Colors.BLACK,
    opacity: 0.5,
  },
  totalSubtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.BLACK,
    opacity: 0.8,
  },
  mainTotalPrice: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.BLACK,
  },
  buttonOrderText: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
    color: Colors.WHITE,
    textTransform: 'uppercase',
  },
});
