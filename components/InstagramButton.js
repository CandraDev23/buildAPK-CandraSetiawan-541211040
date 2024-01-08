import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const InstagramButton = ({ url }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#404040',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
      onPress={handlePress}
    >
      <Text style={{ textTransform: 'capitalize', textAlign:'center', color: 'white', marginRight:4 }}> 
        Instagram
      </Text>
        <FontAwesome5 name="instagram" size={24} color="white" />      
    </TouchableOpacity>
  );
};

export default InstagramButton;