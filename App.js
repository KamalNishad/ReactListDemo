import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,Image,TouchableOpacity,} from 'react-native';
import TextBox from 'react-native-password-eye';
import { Button } from 'react-native-web';
import { useState } from 'react';


export default function App() {

  const[enteredGoaltext,setEnteredGoalText] = useState('');    ///Value store karega state hooks k through
  const[courseGoalsList, setCourseGoals] = useState([])

  function goalInputHandler(enteredText){
      setEnteredGoalText(enteredText)
  }

  function addGoalHandler(){
      console.log(enteredGoaltext)
      setCourseGoals(currentCourseGoals =>[
        ...courseGoalsList,
        enteredGoaltext
      ]);
  }



  return (

    <View style={styles.container}>

      <View>
        <Image source={"https://www.blogger.com/img/logo_blogger_40px_2x.png"}  style={styles.tinyLogo}/>
      </View>

      <View style={styles.inputtype}>
          <TextInput placeholder='Enter Userid'></TextInput>
      </View>

      <View style={styles.inputtype}>
          <TextInput placeholder='Enter password'></TextInput>
      </View>


      <TouchableOpacity style={styles.btnstyle}
        onPress={() => navigation.navigate('LoginScreen')}
      >Sumbit</TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput placeholder='Search Here' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}></Button>
      </View>

      <View>
          {courseGoalsList.map((goal=> <Text>{goal}</Text>))}         
        <Text>List Of Goals...</Text>
      </View>


    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputtype:{
    margin:5,
    borderColor:"#000",
    borderWidth:1,
    borderRadius:20,
    padding:5,
    backgroundColor:"#eee", 
  },
  btnstyle:{
    margin:10,
    backgroundColor:"#003cb3",
    color:"#fff",
    padding:5,
    width:80,
    textAlign:'center',
    borderRadius:20
  },
  tinyLogo: {
    width: 50,
    height: 50,
    margin:30,
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:"center",
    width:"50%",
    backgroundColor:"#C0C0C0",
    borderRadius:5,
    height:50,
    marginTop:10,
    color:"#000",
    marginBottom:20,
    justifyContent:"center",
    padding:10
  }
});
