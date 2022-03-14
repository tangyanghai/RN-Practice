import * as React from "react";
import {useState} from "react";
import {Text, View} from "react-native";
import SelectButtons from "./SelectButtons";
import StyleChangeLayout, {IStyles} from "./StyleChangeLayout";


const df = () => {
    const a = new Array<IStyles>(1);
    a[0] = {
        label: 'flexDirection',
        defaultValue: 'row',
        values: ['row', 'column', 'row-reverse', 'column-reverse']
    }
    a[1] = {
        label: 'direction',
        defaultValue: 'ltr',
        values: ['ltr', 'rtl']
    }
    a[2] = {
        label: 'justifyContent',
        defaultValue: 'flex-start',
        values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']
    }

    return a
}

function FlexLearnLayout() {
    const ps = df()
    const labels = getStyleNames(ps)
    const [index, setIndex] = useState(0)
    return (
        <View style={{flex: 1}}>
            <Text style={{color: 'black', marginBottom: 10, marginTop: 20}}>支持预览的属性：</Text>
            <SelectButtons values={labels}
                           onSelectedValueChanged={value => {
                               const tmp = labels.indexOf(typeof value === "string" ? value : labels[0])
                               setIndex(tmp)
                           }}
                           selectedValue={labels[index]}
            />

            <Text style={{color: 'black', marginBottom: 10, marginTop: 20}}>可选属性如下：</Text>
            <StyleChangeLayout
                label={ps[index].label}
                values={ps[index].values}
                defaultValue={ps[index].defaultValue}
            />
        </View>
    )
}

const getStyleNames = (s: IStyles[]) => {
    const names = new Array<string>(s.length)
    s.map((a, index) => {
        names[index] = a.label
    })
    return names
}

export default FlexLearnLayout
