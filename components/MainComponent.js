import React, { useState } from 'react';
import Directory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';
import { View } from 'react-native';

const Main = () => {
    const [campsites, updateCampsites] = useState({
        campsites: CAMPSITES
    });
    console.log(campsites);
    return (
        <Directory campsites={campsites} />
    )
}

export default Main;
