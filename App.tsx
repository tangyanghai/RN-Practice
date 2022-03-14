/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LearnButton from "./src/flex/LearnButton";
import {useLog as log} from "./src/Utils";
import SelectButtons from "./src/flex/SelectButtons";
import PreviewLayout from "./src/flex/PreviewLayout";
import StyleChangeLayout from "./src/flex/StyleChangeLayout";
import FlexLearnLayout from "./src/flex/FlexLearnLayout";
import {values} from "lodash";


function App() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (

                <View style={{flex:1}}>
                    <FlexLearnLayout/>
                </View>
    );
}

export default App;
