import { StyleSheet, Text, View, FlatList, Image, PanResponder, Animated } from 'react-native';
import { useRef, useState } from 'react';

import { images } from './../App'

const sample = [
    { name: 'coconut' },
    { name: 'coconut2' },
    { name: 'coconut3' },
    { name: 'coconut4' },
    { name: 'coconut5' },
    { name: 'coconut6' },
    { name: 'coconut7' },
    { name: 'coconut8' },
    { name: 'coconut9' },
]

// TODO: HUGE WIP. Reliance on global position function (noted below) is a bad thing

// NOTE drag and drop functionality taken from Ben Awad https://www.youtube.com/watch?v=tsM3N_7bNcE
// Consider writing your own in the future
export default function SymptomScroller(props: any) {

    const [ point, setPoint ] = useState([0, 0]);
    //const a;

    const position = new Animated.ValueXY();
    console.log(position);

    // TODO: To begin work again, uncomment this and the View header in the JSX
    /*
    const panResponder = useRef(
        PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) =>
                true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
                true,

            onPanResponderGrant: (evt, gestureState) => {
                // The gesture has started. Show visual feedback so the user knows
                // what is happening!
                // gestureState.d{x,y} will be set to zero now
            },
            onPanResponderMove: (evt, gestureState) => {
                console.log([gestureState.dx, gestureState.dy]);
                setPoint([gestureState.dx, gestureState.dy]);

                // The most recent move distance is gestureState.move{X,Y}
                // The accumulated gesture distance since becoming responder is
                // gestureState.d{x,y}
            },
            onPanResponderTerminationRequest: (evt, gestureState) =>
                false,
            onPanResponderRelease: (evt, gestureState) => {
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            }
        })
    ).current;
    */

    // NOTE Random color code taken from https://css-tricks.com/snippets/javascript/random-hex-color/
    // Consider writing your own in the future
    return (
        <View style={styles.container}>
            <Animated.View style={{ backgroundColor: 'black', zIndex: 2, height: 20, width: 20, top: point[1], left: point[0] }}>

            </Animated.View>
            <FlatList
                horizontal={true}
                data={images.coconuts}
                renderItem={({ item, index }) => (
                    <View>
                        <Text> {index == 0 ? "coconutV2" : (index < 3 ? "coffee" : "coconut")} </Text>
                        {/*<View {...panResponder.panHandlers}>*/}
                        <View>
                            <Image
                                source={item}
                                style={{ tintColor: '#' + Math.floor(Math.random() * 16777215).toString(16) }}
                            />
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#93E9B',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});
