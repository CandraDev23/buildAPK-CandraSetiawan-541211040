import React, {useCallback} from 'react';
import { Text, ScrollView, StyleSheet, View, Image, ImageAlert, Button, Linking, Alert, TouchableOpacity } from 'react-native';
import MyButton from './components/Button1';
import MyButton2 from './components/Button2';
import InstagramButton from './components/InstagramButton';
import FacebookButton from './components/FacebookButton';
import LinkedinButton from './components/LinkedinButton';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.overviewheading}>
        Overview
      </Text>
      <Card style={styles.card}>
        <View style={styles.inner_card}>
          <View style={{position:'relative', height:100}}>
            <Image style={{width:98, height:140, position:'absolute', bottom:-18, left:-8}} source={require('./assets/MyPhoto.png')} />
          </View>
          <View style={{flex:1, marginLeft:104}}>
            <Text style={styles.pb1}>
              Candra Setiawan
            </Text>
            <Text style={styles.pb3}>
              Have interest in web programming and backend development, and always trying to be better for life.
            </Text>
          </View>
        </View>
      </Card>
      <View
        style={{
          marginVertical:16,
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <Text style={styles.projectheading}>
        Design
      </Text>
      <View>
        <View style={{marginBottom:14}}>
          <Card style={styles.card}>
            <View style={styles.inner_card1}>
              <View>
                <Image style={{width: 310, height:210, borderRadius:5}} source={require('./assets/WaViePresentation.png')} />
              </View>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
                  <MyButton url="https://dribbble.com/shots/20688937-Wavie-Web-Design?utm_source=Clipboard_Shot&utm_campaign=DesignByCandra&utm_content=Wavie%20%7C%20Web%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=DesignByCandra&utm_content=Wavie%20%7C%20Web%20Design&utm_medium=Social_Share" />
              </View>
            </View>
          </Card>
        </View>
        <View style={{marginBottom:14}}>
          <Card style={styles.card}>
            <View style={styles.inner_card1}>
              <View>
                <Image style={{width: 310, height:210, borderRadius:5}} source={require('./assets/MuzaixAppPresent.png')} />
              </View>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
                  <MyButton url="https://dribbble.com/shots/22875584-Muzaix-App-Music-Playlist?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=DesignByCandra&utm_content=Muzaix%20App%20-%20Music%20Playlist&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=DesignByCandra&utm_content=Muzaix%20App%20-%20Music%20Playlist&utm_medium=Social_Share" />
              </View>
            </View>
          </Card>
        </View>
        <View style={{marginBottom:14}}>
          <Card style={styles.card}>
            <View style={styles.inner_card1}>
              <View>
                <Image style={{width: 310, height:210, borderRadius:5}} source={require('./assets/TechSchoolPresentation.png')} />
              </View>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
                  <MyButton url="https://dribbble.com/shots/20507163-TechSchool-Web-App-Web-Design?utm_source=Clipboard_Shot&utm_campaign=DesignByCandra&utm_content=TechSchool%20Web%20App%20%7C%20Web%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=DesignByCandra&utm_content=TechSchool%20Web%20App%20%7C%20Web%20Design&utm_medium=Social_Share" />
              </View>
            </View>
          </Card>
        </View>
      </View>
      <Text style={styles.projectheading}>
        Coding
      </Text>
      <View>
        <View style={{marginBottom:14}}>
          <Card style={styles.card}>
            <View style={styles.inner_card2}>
              <View style={{flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'flex-start',}}>
                    <FontAwesome name="gitlab" size={42} color="#404040" style={{marginRight:10}} />
                  <Text style={styles.pb1}>
                    Gitlab
                  </Text>
              </View>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
                  <MyButton2 url="https://gitlab.com/candrakun23" />
              </View>
            </View>
          </Card>
        </View>
        <View style={{marginBottom:14}}>
          <Card style={styles.card}>
            <View style={styles.inner_card2}>
            <View style={{flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'flex-start',}}>
                <AntDesign name="github" size={42} color="#404040"  style={{marginRight:10}}/>
                  <Text style={styles.pb1}>
                    Github
                  </Text>
              </View>
              <View>
                  <MyButton2 url="https://github.com/CandraDev23" />
              </View>
            </View>
          </Card>
        </View>
        <View style={{marginBottom:14}}>
          <Card style={styles.card}>
            <View style={styles.inner_card2}>
            <View style={{flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'flex-start',}}>
                  <MaterialCommunityIcons name="web" size={42} color="#404040" style={{marginRight:10}}/>
                  <Text style={styles.pb1}>
                    Portfolio Website
                  </Text>
              </View>
              <View>
                  <MyButton2 url="https://candradev.vercel.app/" />
              </View>
            </View>
          </Card>
        </View>
      </View>
      <View style={{paddingBottom:20}}>
        <Text style={styles.projectheading}>
        Social Media
      </Text>
        <View style={{flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center', justifyContent:'space-between',}}>
          <InstagramButton url="https://www.instagram.com/can_setiawan/" />
          <FacebookButton url="https://www.facebook.com/chandra.setyawan.7146/" />
          <LinkedinButton url="https://www.linkedin.com/in/candra-setiawan-783857253" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor:'#DDDDDD',
  },
  overviewheading: {
    paddingTop:52,
    marginBottom: 4,
    fontSize: 24,
    fontWeight: 'bold',
  },
  projectheading: {
    marginBottom: 4,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    position:'relative',
    padding:18,
    backgroundColor: '#EEEEEE',
  },
  inner_card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  inner_card1: {
    textAlign:'center',
  },
  inner_card2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  marginbottomcard: {
    marginBottom:10,
  },
  textcenter: {
    textAlign:'center',
  },
  textleft: {
    textAlign:'left',
  },
  textright: {
    textAlign:'right',
  },
  // p1: {
  //   fontSize: 20,
  // },
  pb1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  // p2: {
  //   fontSize: 16,
  // },
  pb2: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  p3: {
    fontSize: 14,
  },
  pb3: {
    fontSize: 14,
  fontWeight: 'bold',
  },
});
