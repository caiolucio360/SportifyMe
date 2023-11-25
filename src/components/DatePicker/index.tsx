import React, { useState } from 'react';
import { TouchableOpacity, Text, Modal, View, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ selectedDate, onDateChange, isVisible, onClose }) => {
  const [internalDate, setInternalDate] = useState(selectedDate || new Date());

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setInternalDate(date);
      onDateChange(date);
    }
  };

  const handleConfirm = () => {
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <DateTimePicker
            value={internalDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
          <TouchableOpacity onPress={handleConfirm}>
            <Text style={styles.confirmButton}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },
  confirmButton: {
    marginTop: 10,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default DatePicker;
