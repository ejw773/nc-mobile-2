import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import Image from './images/react-lake.jpg';

const Directory = (props) => {
    const [campsites, setCampsites] = useState({CAMPSITES})
    console.log(campsites);

    const { navigate } = props.navigation;

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                leftAvatar={{ source: Image }}
            />
        )
    }
    return (
        // <View></View>
        <FlatList 
            data={campsites.CAMPSITES}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

Directory.navigationOptions = {
    title: 'Directory'
}

export default Directory;