import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from '../styles/styles'
import { IP_DEV } from '@env'
import { PORT_DEV } from '@env'

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function CreateLoanScreen({ navigation }) {

    const [Loan, setLoan] = useState({
        description: "",
        amount: 0
    })

    const dateNow = new Date()
    var formattedTime = dateNow.getDate() + '/' + dateNow.getMonth() + '/' + dateNow.getFullYear();

    function handleChange(name, value) {
        setLoan({...Loan, [name]: value})
    }

    async function createLoanClick() {
        const res = await fetch ('http://' + IP_DEV + ':' + PORT_DEV + '/createLoan/2',{
            method: "post", 
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(Loan)
        })
        const response = await res.json()
        Alert.alert(
            'Tarea añadida',
            'Tarea agregada satisfactoriamente',
            [
              {text: 'OK', onPress: navigation.goBack()},
            ],
            { cancelable: false }
          )
        console.log(response)
    }

    return (
        <View style={[globalStyles.screens, {paddingVertical: 25}]}>
            <View style={styles.inLineTextLabel}>
                <Text style={[globalStyles.text, {color: "white"}]}>Fecha:</Text>
                <Text style={[globalStyles.text, {color: "white", fontWeight: "bold"}]}>{formattedTime}</Text>
            </View>
            <View style={styles.inLineTextLabel}>
                <Text style={[globalStyles.text, {color: "white"}]}>Estado:</Text>
                <Text style={[globalStyles.text, {color: "white", fontWeight: "bold"}]}>C</Text>
            </View>
            <View style={styles.inLineTextLabel}>
                <Text style={[globalStyles.text, {color: "white"}]}>Monto:</Text>
                <TextInput style={styles.input} placeholder='Monto del préstamo' maxLength={20} onChangeText={(text)=>handleChange("amount",text)}  />  
                {/* {inputErrors && inputError("amount")} */}
            </View>
            <View style={styles.inLineTextLabel}>
                <Text style={[globalStyles.text, {color: "white"}]}>Descripción:</Text>
                <TextInput style={styles.input} placeholder='Descripcion corta del préstamo' maxLength={35} numberOfLines={3} onChangeText={(text)=>handleChange("description",text)}  /> 
                {/* {inputErrors && inputError("description")}  */}
            </View>
            <Button title="Crear" onPress={createLoanClick}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
    },
    inLineTextLabel: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 10,
    },
    error: {
        color: "red"
    }

})