import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import Image from './images/react-lake.jpg'

const RenderCampsite = ({campsite}) => {
    if (campsite) {
        return (
            <Card
                featuredTitle={campsite.name}
                image={Image}
                // image={require('./images/react-lake.jpg')}
            >
                <Text style={{margin: 10}}>
                    {campsite.description}
                </Text>
            </Card>
        )
    }
    return <View />
}

const CampsiteInfo = (props) => {
    const [campsites, updateCampsites] = useState({CAMPSITES});
    const campsiteId = props.navigation.getParam('campsiteId');
    const campsite = campsites.CAMPSITES.filter(campsite => campsite.id === campsiteId)[0];
    return (
        <RenderCampsite campsite={campsite} />
    )
}

CampsiteInfo.navigationOptions = {
    title: 'Campsite Information'
}

export default CampsiteInfo;