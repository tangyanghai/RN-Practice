import * as React from "react";
import {View,StyleSheet} from 'react-native'

interface IPreviewLayout {
    label: string,
    labelValue: string | number
}

function PreviewLayout(props: IPreviewLayout) {
    return (
        <View style={[styles.container,{[props.label]: props.labelValue}]}>
            <View style={[styles.box,{backgroundColor:'powderblue'}]}/>
            <View style={[styles.box,{backgroundColor:'skyblue'}]}/>
            <View style={[styles.box,{backgroundColor:'steelblue'}]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:8,
        backgroundColor:'red'
    },
    box:{
        width:50,
        height:50
    }
})

export default PreviewLayout
