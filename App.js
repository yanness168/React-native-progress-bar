import * as Progress from "react-native-progress";
import * as React from "react";
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';



const MultiTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={101}
      style={styles.box}
    />
  );
}

export default function App() {
  const [progress, setProgress] = React.useState(0);
  const [text, setText] = React.useState("");
  const [color, setColor] = React.useState("blue");

  const change = (event) => {
    setText(event);
    var n = text.length*0.01;
    setProgress(n);
    if(text.length==100){
      setColor("red")
    }
  }

  function Seperator(){
     return <View style={styles.seperator}></View>
    }

  return (
    <View style={styles.container}>
      <MultiTextInput multiline onChangeText={e=>change(e)} value={text} numberOfLines={4}/>
      <Seperator/>
      <Button onPress={e=>{setText(""),setProgress(0)}} title={"Clear"}/>
      <Seperator/>
      <Progress.Bar progress={progress} color={color}/>
      <Seperator/>
      <Progress.Pie progress={progress} color={color}size={50}/>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seperator:{
    margin: 10
  },
  box:{
    padding: 10,
    borderColor: "blue",
    borderWidth: 1,
    width: 160
  }
});

