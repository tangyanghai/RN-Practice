import * as React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export interface IButton {
    selected: boolean,
    value: string | number,
    onValueClicked?: (value: string | number) => void | undefined
}

/**
 * 带点击状态的按钮
 * @param props
 * @constructor
 */
function LearnButton(props: IButton) {
    return (
        <TouchableOpacity
            style={[styles.btn, props.selected && styles.btnSelect]}
            onPress={() => {
                props.onValueClicked ? props.onValueClicked(props.value) : {}
            }}
        >
            <Text style={[styles.txt, props.selected && styles.txtSelect]}>{props.value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#FDF5E6',
        paddingVertical: 8,
        marginHorizontal: '1%',
        minWidth: '48%',
        marginBottom: 10
    },

    btnSelect: {
        backgroundColor: '#FF7F50',
    },

    txt: {
        color: '#FF7F50',
        textAlign: 'center'
    },

    txtSelect: {
        color: 'white'
    }
})

export default LearnButton
