import { StyleSheet, Text, View } from 'react-native';
import { blocksPerDay } from './Day';

export default function Day(props: any) {

    // Find background color for thisBlock
    const isEven = props.id % 2;
    const bgColor = isEven ? '#F0F8FF' : '#FAFAFA';

    // Find timeframe for thisBlock
    const totalBlocks = 24 / blocksPerDay;

    const timeStart = props.id * totalBlocks;
    let timeStartHour = Math.floor(timeStart);
    const timeStartMinute = (timeStart - timeStartHour) * 60;
    //
    const tsIsPM = timeStartHour >= 12;
    timeStartHour = tsIsPM ? (timeStartHour - 12) : timeStartHour;
    timeStartHour = (timeStartHour == 0) ? 12 : timeStartHour;


    const timeEnd = (1 + props.id) * totalBlocks;
    let timeEndHour = Math.floor(timeEnd);
    let timeEndMinute = ((timeEnd - timeEndHour) * 60) - 1;
    if (timeEndMinute < 0) {
        timeEndHour -= 1;
        // Might be 24 instead?
        timeEndHour = (timeEndHour < 0) ? 23 : timeEndHour;
        timeEndMinute = 59;
    }
    //
    const teIsPM = timeEndHour >= 12;
    timeEndHour = tsIsPM ? (timeEndHour - 12) : timeEndHour;
    timeEndHour = (timeEndHour == 0) ? 12 : timeEndHour;

    const padStart = String(Math.abs(timeStartMinute)).length == 1;
    const padEnd = String(Math.abs(timeEndMinute)).length == 1;

    const fromTime = '' + timeStartHour + ':' + timeStartMinute + (padStart ? '0' : '') + (tsIsPM ? 'PM' : 'AM');
    const toTime = '' + timeEndHour + ':' + timeEndMinute + (padEnd ? '0' : '') + (teIsPM ? 'PM' : 'AM');

    return (

        <View style={{ ...styles.container, backgroundColor: bgColor }}>
            <View style={styles.timeID}>
                <Text style={styles.timeText}>{fromTime} - {toTime} </Text>
            </View>
            <View style={styles.contentHolder}>
                <Text> This should take up the rest of the box :0 </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#F0F8FF',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#717171'
    },
    timeID: {
        flex: 2,
    },
    contentHolder: {
        flex: 8
    },
    timeText: {
        fontWeight: 'bold'
    }
});
