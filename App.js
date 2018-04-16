import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

// expo
import { FileSystem } from 'expo';

export default class App extends React.Component {

  imagesPool = {
    0: require("./img/carousel/1.jpeg"),
    1: require("./img/carousel/2.jpeg"),
    2: require("./img/carousel/3.jpeg"),
    3: require("./img/carousel/4.jpeg"),
    4: require("./img/carousel/5.jpeg"),
    5: require("./img/carousel/6.jpeg"),
    6: require("./img/carousel/7.jpeg"),
    7: require("./img/carousel/8.jpeg"),
    8: require("./img/carousel/9.jpeg"),
    9: require("./img/carousel/10.jpeg"),
    10: require("./img/carousel/11.jpeg"),
    11: require("./img/carousel/12.jpeg"),
    12: require("./img/carousel/13.jpeg"),
    13: require("./img/carousel/14.jpeg"),
    14: require("./img/carousel/15.jpeg"),
    15: require("./img/carousel/16.jpeg"),
    16: require("./img/carousel/17.jpeg"),
    17: require("./img/carousel/18.jpeg")
  }

  constructor(props){
    super(props)

    this.proceed = this.proceed.bind(this)

    this.state = {
      imagePointer: getRandomInt(0, 17),
      buttonActive: false,
      showImages: false
    }
  }

  componentDidMount() {
    // display proceed button 
    setInterval(() => {
      this.setState({buttonActive:true})
    }, 4000)
  }

  proceed() {
    // continue button has been clicked, start displaying images
    this.setState({showImages: true})
  }

  _beginButton() {
    if (!this.state.buttonActive)  {
      return null
    } else {
      return (
        <TouchableOpacity style={{borderColor:'#fff', borderWidth:3, height:50, width:150, borderRadius:50}} onPress={this.proceed}>
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:25, color:'white'}}>הפעל</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }

  render() {
    if (!this.state.showImages) {
      return (
        <View style={styles.container}>
          {/* background image */}
          <View style={{position: 'absolute',width: '100%',height: '100%'}}>
            <Image style={{flex: 1, resizeMode:'cover'}}
              source={require("./img/background.png")}/>
          </View>

          <View style={{flex:1, justifyContent:'space-around', alignItems:'center', marginTop:'10%'}}>
            {/* header */}
            <View style={{flex:1}}>
              <Text style={{fontSize:50, color:'white'}}>אבא</Text>
            </View>

            {/* body */}
            <View style={{flex: 3, alignItems:'center'}}>
              <Text style={{fontSize:25, color:'white'}}>אספנו בשבילך כמה זכרונות</Text>
              <Text style={{fontSize:25, color:'white'}}>מקווים שתהנה ומאחלים</Text>
              <Text style={{fontSize:32, color:'white', marginTop:20}}>יום הולדת שמח</Text>
              <Text style={{fontSize:30, color:'white'}}>והרבה הצלחה בכל</Text>
              <Text style={{fontSize:25, color:'white', marginTop:20}}>אוהבים מאוד </Text>
              <Text style={{fontSize:25, color:'white'}}>לי, לאון ובוריס</Text>
            </View>

            {/* begin button */}
            <View style={{flex:1, justifyContent:'center'}}>
              
              {this._beginButton()}
            </View>


          </View>

        </View>
      );
    } else {
      // start rolling images
      return(
        <TouchableWithoutFeedback onPress={() => {
          this.setState({imagePointer: getRandomInt(0,17)})}
            }>
            <View style={{flex:1, alignItems:'center', backgroundColor:'#000'}}>
              {/* <View> */}
              <Image style={{flex:1, width:'100%', resizeMode:'contain'}}
                source={this.imagesPool[this.state.imagePointer]}/>
            </View>
          </TouchableWithoutFeedback>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
