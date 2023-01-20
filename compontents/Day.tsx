import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRef, useContext } from 'react'

import { selectionContext } from './../App'
import TimeBlock from './TimeBlock';

// HI-LVL: Determines how many time zones there are in a day
export const blocksPerDay = 8;

export default function Day(props: any) {

  const [selectedDay, selectDay] = useContext(selectionContext);

  const date: Date = props.date;
  const month = dateToString(date.getMonth());
  const day = date.getDate();
  const postFix = getPostFix(day);

  const renderObjects: JSX.Element[] = [];

  for (let i = 0; i < blocksPerDay; i++) {
    renderObjects.push(<TimeBlock key={i} id={i} />);
  }

  // TODO: If you find a way to update top-level without changing all children, change this to a useState
  // ?? Why does this exist? Is it necessary?
  const isSelected = useRef(false);
  const pressFunc = () => {

    // LOGIC: Only exists for selected component
    /*
    if (!selectedDay) {
      isSelected.current = true;
      selectDay(date);
    } else if (date.getDate() == selectedDay.getDate()) {
      isSelected.current = false;
      selectDay(null);
    } */

    // LOGIC: Reselect on any new component
    if (!selectedDay || (date.getDate() != selectedDay.getDate())) {
      isSelected.current = true;
      selectDay(date);
    } else {
      isSelected.current = false;
      selectDay(null);
    }
  }

  return (
    <TouchableOpacity
      onPress={pressFunc}
    >
      <View style={styles.container}>
        <View style={styles.date}>
          <Text style={styles.monthText}> {month}</Text>
          <View>
            <Text style={styles.dayText}> {day} </Text>
            <Text style={styles.dayText}> {postFix} </Text>
          </View>
        </View>
        {renderObjects}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 15
  },
  date: {
    flex: 3,
    backgroundColor: '#888',
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: 'row'
  },
  monthText: {
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: 50
  },
  dayText: {
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: 22
  }
});

function dateToString(convert: number) {
  switch (convert) {
    case 0:
      return 'JAN';
    case 1:
      return 'FEB';
    case 2:
      return 'MAR';
    case 3:
      return 'APR';
    case 4:
      return 'MAY';
    case 5:
      return 'JUN';
    case 6:
      return 'JUL';
    case 7:
      return 'AUG';
    case 8:
      return 'SEP';
    case 9:
      return 'OCT';
    case 10:
      return 'NOV';
    case 11:
      return 'DEC';
    default:
      return 'UNKNOWN';
  }
}

function getPostFix(convert: number) {

  const convertII = convert % 10;

  switch (convertII) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}
