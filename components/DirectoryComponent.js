import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

const Directory = (props) => {
    console.log(props);
    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                onPress={() => props.onPress(item.id)}
                // onPress={() => console.log('hello')}
                // leftAvatar={{ source: require('./images/react-lake.jpg')}}
            />
        )
    }
    return (
        <FlatList 
            data={props.campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default Directory;