import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';

import { CAMPSITES } from '../shared/campsites';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        CampsiteInfo: { screen: CampsiteInfo }
    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const AppNavigator = createAppContainer(DirectoryNavigator);

const Main = () => {
    const [campsites, updateCampsites] = useState({CAMPSITES});
    const [selectedCampsite, updateSelectedCampsite] = useState(null);
    const onCampsiteSelect = (campsiteId) => {
        console.log(campsiteId);
        updateSelectedCampsite(campsiteId)
    }
    return (
        <View 
            style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator />
            {/* <Directory 
                campsites={campsites.CAMPSITES}
                onPress={campsiteId => onCampsiteSelect(campsiteId)}
            />
            <CampsiteInfo
                campsite={campsites.CAMPSITES.filter(
                    campsite => campsite.id === selectedCampsite)[0]}
            /> */}
        </View>
    )
}

export default Main;
