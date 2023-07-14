// import { StatusBar } from 'expo-status-bar';
// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, View ,StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Router from './router/router';





const slides = [
  {
    id:1,
    title: "Welcome to the app",
    text: "This is the first slide",
    image: require('./assets/undraw_Beach_day_2cpx.png')
  },
  {
    id:2,
    title: "Welcome to the app",
    text: "This is the second slide",
    image: require('./assets/undraw_family_vg76.png')
  },
  {
    id:3,
    title: "Welcome to the app",
    text: "This is the third slide",
    image: require('./assets/undraw_Appreciate_it_qnkk.png')
  },
  {
    id:4,
    title: "Welcome to the app",
    text: "This is the fourth slide",
    image: require('./assets/undraw_Engineering_team_a7n2.png')
  }



]

export default function App() {

// ======================= use state for the slider pages ========================

const [showHomePage, setShowHomePage] = useState(true)

// ==================statusBar option=======================

StatusBar.setBarStyle("light-content",true)

// ======================== button of slider screen ========================


const buttonLabel = (label) => {
  return (
    <View style={styles.buttonLabel}>
      <Text style={styles.buttonLabelText}>{label}</Text>
    </View>
  )
}


if (!showHomePage) {
  return (


  // ==============================slider intro app =============================

    <AppIntroSlider

    data={slides}
    renderItem={({item})=>{
      return(
        <View style={styles.slide}>
          <Image source={item.image} style={styles.image}/>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      )
    }
    }
    activeDotStyle={{
      backgroundColor: '#24ffdb5e',
      width: 30
    }}
    showSkipButton
    showPrevButton
    renderPrevButton={() => buttonLabel('Prev')}
    renderNextButton={()=> buttonLabel('Next')}
    renderDoneButton={()=> buttonLabel('Done')}
    onDone={()=> setShowHomePage(true)}



    />
  )
}
  





// ======================== return screen ================================


  return (
    <Router/>

  );










}





// ========================= style =======================





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide:{
  //  borderColor:'#000',
  //  borderWidth:1,
   flex:1,
    justifyContent:'center',
    
    
  },
  image:{
    height:'50vh',
    marginTop:'50',
    padding:'10',
    resizeMode:'center'
  },
  title:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    color:'#000',
    padding:'10',
  },
  text:{
    textAlign:'center',
    fontSize:20,
    color:'#000',
    padding:'10',
  },
  buttonLabel:{
    padding:10,

  },
  buttonLabelText:{
    color:'#000',
    fontSize:20,
    fontWeight:'600'
  }

});




 