import React, { useState } from 'react';
import Directory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';
import CampsiteInfo from './CampsiteInfoComponent';
import { View } from 'react-native';

const Main = () => {
    const [campsites, updateCampsites] = useState({CAMPSITES});
    const [selectedCampsite, updateSelectedCampsite] = useState(null);
    const onCampsiteSelect = (campsiteId) => {
        console.log(campsiteId);
        updateSelectedCampsite(campsiteId)
    }
    return (
        <View style={{flex: 1}}>
            <Directory 
                campsites={campsites.CAMPSITES}
                onPress={campsiteId => onCampsiteSelect(campsiteId)}
            />
            <CampsiteInfo
                campsite={campsites.CAMPSITES.filter(
                    campsite => campsite.id === selectedCampsite)[0]}
            />
        </View>
    )
}

export default Main;
