import * as React from "react";
import {useState} from "react";
import {StyleSheet, View} from 'react-native'
import LearnButton from "./LearnButton";

interface ISelectButtons {
    values: string[] | number[],
    selectedValue?: string | number,
    onSelectedValueChanged: (value: string | number) => void,
}

function SelectButtons(props: ISelectButtons) {
    const [currentValue, setCurrentValue] = useState(props.values.indexOf(props.selectedValue)<0?props[0]:props.selectedValue)
    return (
        <View style={styles.container}>
            {
                props.values.map(value => (
                    <LearnButton
                        selected={value === currentValue}
                        value={value}
                        onValueClicked={(a) => {
                            if (currentValue !== a) {
                                setCurrentValue(a)
                                props.onSelectedValueChanged(a)
                            }
                        }}/>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: "wrap"
    }
})


export default SelectButtons
