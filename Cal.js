import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      output: '0'
    };
  }
  
  numAndOpr(n) {
    if (this.state.output == '0') {
      this.setState({ output: n });
    } else {
        this.setState({ output: this.state.output + n });
    }
  }

  clear(x) {
    if (x == 'AC') {
      this.setState({ output: '0' });
    }
  }

  cal(y) {
    if (y == '=') {
      this.setState({ output: eval(this.state.output)});
    }
  }


  render() {
    return (

      <LinearGradient
        //https://uigradients.com/#Reef
        //colors={['#E7E9BB','#403B4A']}
        colors={['#000000','#000000']}
        style={{flex: 1}}
      >
        <View style={{flex: 1}}>
          <View style={{flex: 1,  backgroundColor: '#000000'}} />

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1,  backgroundColor: '#000000', margin : 5 , padding : 5}} ><Text style={styles.txt}>{this.state.output}</Text></View>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <TouchableOpacity style={styles.btn3} onPress={() => this.clear('AC')}><Text style={styles.txt2}>AC</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn3}><Text style={styles.txt2}>+/-</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn3}><Text style={styles.txt2}>%</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn2} onPress={() => this.numAndOpr('/')}><Text style={styles.txt4}>/</Text></TouchableOpacity>
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              
              <TouchableOpacity style={styles.btn} onPress={() => this.numAndOpr('7')}><Text style={styles.txt4}>7</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => this.numAndOpr('8')}><Text style={styles.txt4}>8</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => this.numAndOpr('9')}><Text style={styles.txt4}>9</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn2} onPress={() => this.numAndOpr('*')}><Text style={styles.txt4}>*</Text></TouchableOpacity>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <TouchableOpacity style={styles.btn} onPress={() => this.numAndOpr('4')}><Text style={styles.txt4}>4</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => this.numAndOpr('5')}><Text style={styles.txt4}>5</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => this.numAndOpr('6')}><Text style={styles.txt4}>6</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn2} onPress={() => this.numAndOpr('-')}><Text style={styles.txt4}>-</Text></TouchableOpacity>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <TouchableOpacity style={styles.btn} onPress={() => this.numAndOpr('1')}><Text style={styles.txt4}>1</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => this.numAndOpr('2')}><Text style={styles.txt4}>2</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => this.numAndOpr('3')}><Text style={styles.txt4}>3</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn2} onPress={() => this.numAndOpr('+')}><Text style={styles.txt4}>+</Text></TouchableOpacity>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              
              <TouchableOpacity style={styles.btn1} onPress={() => this.numAndOpr('0')}><Text style={styles.txt4}>0</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => this.numAndOpr('.')}><Text style={styles.txt4}>.</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn2} onPress={() => this.cal("=")}><Text style={styles.txt4}>=</Text></TouchableOpacity>
          </View>



        
          
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  btn:{
      alignItems: 'center',
      height:90,
      backgroundColor: '#414345',
      borderRadius: 100,
      borderColor:'white',
      borderWidth : 2,
      margin : 1,
      flex: 1
  },
  btn2:{
      alignItems: 'center',
      height:90,
      backgroundColor: '#f7b733',
      borderRadius: 100,
      borderColor:'white',
      borderWidth : 2,
      margin : 1,
      flex: 1
  },
  btn3:{
      alignItems: 'center',
      height:90,
      backgroundColor: '#bdc3c7',
      borderRadius: 100,
      borderColor:'white',
      borderWidth : 2,
      margin : 1,
      flex: 1
  },
  btn1:{
      alignItems: 'center',
      height:90,
      backgroundColor: '#414345',
      borderRadius: 100,
      borderColor:'white',
      borderWidth : 2,
      margin : 1,
      flex: 2
  },

  txt4:{
      textAlign:'center',
      padding: 20,
      //textAlignVertical:'center',
      fontSize:30,
      color:"#ffffff"
  },
  txt:{
      textAlign:'right',
      //padding: -50,
      //textAlignVertical:'center',
      //height:90,
      //margin : 10,
      fontSize:55,
      //paddingRight:30,
      color:"#ffffff"
  },
  txt2:{
      textAlign:'center',
      padding: 20,
      //textAlignVertical:'center',
      fontSize:30,
      color:"#00000"
  },

})
