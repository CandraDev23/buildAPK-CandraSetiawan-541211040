import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const MyButton = ({ url }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#404040',
        width:140,
        padding: 10,
        marginTop:10,
        borderRadius: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
      onPress={handlePress}
    >
      <Text style={{ textTransform: 'capitalize', textAlign:'center', color: 'white', marginRight:6 }}>
        Open Dribbble
      </Text>
      <FontAwesome name="dribbble" size={20} color="white" />
    </TouchableOpacity>
  );
};

export default MyButton;