import * as React from "react";
import {useEffect, useState} from "react";
import {View} from "react-native";
import SelectButtons from "./SelectButtons";
import PreviewLayout from "./PreviewLayout";
import {useLog} from "../Utils";
import {values} from "lodash";

export interface IStyles {
    label: string,
    values: string[] | number[],
    defaultValue: string | number
}

function StyleChangeLayout(props: IStyles) {
    const [selectedValue, setSelectedValue] = useState(props.defaultValue)
    useEffect(() => {
        useLog("=useEffect=", props)
        useLog("=useEffect selectedValue=", selectedValue)
    })

    const getSelectedValue = () => {
        useLog("==getSelectedValue==", props.label)
        const index = props.values.indexOf(selectedValue)
        if (index >= 0) {
            return selectedValue
        }
        setSelectedValue(props.values[0])
        return props.values[0]
    }

    return (
        <View>
            <SelectButtons values={props.values}
                           selectedValue={selectedValue}
                           onSelectedValueChanged={setSelectedValue}
            />
                <PreviewLayout label={props.label} labelValue={getSelectedValue()}/>
        </View>
    )
}

export default StyleChangeLayout
