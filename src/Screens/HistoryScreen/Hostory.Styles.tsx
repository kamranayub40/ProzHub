import {StyleSheet} from 'react-native';
import {Medium, Regular} from '../../Stylings/Font.Family';

const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Background color for the entire screen
  },
  historyItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2, // For Android elevation
    shadowColor: 'rgba(0, 0, 0, 0.1)', // For iOS shadow
    shadowOffset: {width: 0, height: 2}, // For iOS shadow
    shadowOpacity: 1, // For iOS shadow
  },
  historyItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyItemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  historyItemDetails: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: Medium,
    color: '#333', // Text color for the title
  },
  date: {
    fontSize: 14,
    fontFamily: Regular,

    color: '#888', // Text color for the date
  },
  status: {
    fontSize: 14,
    fontFamily: Medium,
  },
  pendingStatus: {
    color: 'orange',
  },
  acceptedStatus: {
    color: 'green',
  },
  completedStatus: {
    color: 'blue',
  },
});

export default styles;
