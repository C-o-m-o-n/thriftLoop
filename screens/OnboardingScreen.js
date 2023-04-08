import Onboarding from 'react-native-onboarding-swiper';
import { StyleSheet, Image,Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import donate from './/../assets/donate.jpg'
import market from './/../assets/market.jpg'
import recycle from './/../assets/recycle.jpg'
import vector from './/../assets/vector.jpg'

export default function OnboardingScreen({navigation}) {
  return (

    <Onboarding
      onSkip={()=>navigation.navigate("Home")}
      onDone={()=>navigation.navigate("Home")}
      pages={[
        {
          backgroundColor: '#6dd6cbc3',
          image: <Image style={styles.onbordimg} source={vector} />,
          title: 'Welcome to ThriftLoop',
          subtitle: 'Do you have so many staff you do not use at home, work, or school,and have no idea on what to do with them?.' ,
        },
        {
          backgroundColor: '#db9e15b7',
          image:<Image style={styles.onbordimg} source={donate} />,
          title: 'Donating',
          subtitle: 'Donate the them to people who need them across the globe',
        },
        {
          backgroundColor: '#bfdde9e7',
          image: <Image style={styles.onbordimg} source={recycle} />,
          title: 'Recycling',
          subtitle: 'Or you can recycle them',
        },
        {
          backgroundColor: '#4069e7',
          image: <Image style={styles.onbordimg} source={market} />,
          title: 'Start a bussiness',
          subtitle: 'Or Sell them for money or for other goods',
        },

      ]}
    />

  );
}
const styles = StyleSheet.create({
  onbordimg: {
    width:350,
    height:240,
    marginTop:10,
    borderRadius:20,
    
  },
}
)