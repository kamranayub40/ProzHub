// QuestionnaireDialog.js
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Dialog from 'react-native-dialog';
import {Medium} from '../../Stylings/Font.Family';

const QuestionnaireDialog = ({visible, questions, onClose}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (visible) {
      // Reset the current question index and selected option when the dialog becomes visible
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
    }
  }, [visible]);

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selected option for the next question
    } else {
      onClose();
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null); // Reset selected option when going back
    }
  };

  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>Questionnaire</Dialog.Title>
      <Dialog.Description
        style={{fontSize: 18, fontFamily: Medium, color: '#000'}}>
        {questions[currentQuestionIndex].question}
      </Dialog.Description>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleOptionSelect(option)}
          style={[
            styles.optionContainer,
            selectedOption === option && styles.selectedOption,
          ]}>
          <Text style={{fontSize: 14, fontFamily: Medium, color: '#000'}}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
      <View style={styles.buttonContainer}>
        {currentQuestionIndex > 0 && (
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Text>Back</Text>
          </TouchableOpacity>
        )}
        {currentQuestionIndex < questions.length - 1 ? (
          <Dialog.Button label="Next" onPress={handleNext} />
        ) : (
          <Dialog.Button label="Finish" onPress={onClose} />
        )}
      </View>
    </Dialog.Container>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: 'lightblue',
    borderColor: 'blue',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
});

export default QuestionnaireDialog;
