import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '@/constants/colors';

type Props = {
  handler: () => void;
};

const BackToPage = ({handler}: Props) => {
  return (
    <TouchableOpacity onPress={handler} style={styles.buttonContainer}>
      <MaterialCommunityIcons name="chevron-left" style={styles.chevronLeft} />
    </TouchableOpacity>
  );
};
export default BackToPage;

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.BACKGROUND_LIGHT,
    borderRadius: 10,
  },
  chevronLeft: {
    fontSize: 18,
    color: Colors.BACKGROUND_DARK,
    padding: 12,
  },
});
