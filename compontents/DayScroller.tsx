import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { MutableRefObject, useRef, useContext } from 'react';
import { selectionContext } from './../App'
import Day from './Day';

export default function DayScroller(props: any) {

    const [selectedDay,] = useContext(selectionContext);

    const startDate: Date = props.startDate ? props.startDate : new Date();

    const dateArray = [];

    for (let i = -5; i < 10; i++) {
        const nextDate = new Date();
        nextDate.setDate(startDate.getDate() + i)
        dateArray.push(nextDate);
    }

    const flatList = useRef();

    const correct = true;

    if (selectedDay) {

        const timeDiff = (new Date()).getTime() - selectedDay.getTime();
        const dayDiff = -1 * timeDiff / (1000 * 60 * 60 * 24);
        const idx = Math.floor(dayDiff) + 6;

        ((flatList.current as unknown) as FlatList).scrollToIndex({
            index: idx,
            viewPosition: 0.5
        });
    }

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatList as any}
                horizontal={true}
                data={dateArray}
                renderItem={({ item }) => (
                    <Day date={item} key={item.toDateString()} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
