import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../styles/styles'

// Estas dimensions se utilizan para calcular el ancho y el alto de la vista, en caso de necesitarlo
// para aplicar algún estilo que dependa de esto.
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function LoanItem({ loan }) {

    const dateNow = new Date(loan.createDate * 1000)
    var formattedTime = dateNow.getDate() + '/' + dateNow.getMonth() + '/' + dateNow.getFullYear();

    function handleClick() {
        Alert.alert("Pendiente")
    }

    return (
        <View style={styles.item} >
            <View style={styles.row}>
                <Text style={globalStyles.text}>Fecha:</Text>
                <Text style={[globalStyles.text, {textAlign: "right"}]}>{formattedTime}</Text>
            </View>
            <View style={styles.row}>
                <Text style={globalStyles.text}>Estado:</Text>
                <Text style={[globalStyles.text, {textAlign: "right"}]}>{loan.Status}</Text>
            </View>
            <View style={styles.row}>
                <Text style={globalStyles.text}>Monto:</Text>
                <Text style={[globalStyles.text, {textAlign: "right"}]}>{loan.totalAmount}</Text>
            </View>
            <View style={styles.row}>
                <Text style={globalStyles.text}>Monto a pagar:</Text>
                <Text style={[globalStyles.text, {textAlign: "right"}]}>{loan.restAmount}</Text>
            </View>
            <View style={styles.row}>
                <Text style={globalStyles.text}>Monto saldado:</Text>
                <Text style={[globalStyles.text, {textAlign: "right"}]}>{loan.payedAmount}</Text>
            </View>
            <View style={styles.row}>
                <Text style={globalStyles.text}>Descripción:</Text>
                <Text style={[globalStyles.text, {textAlign: "right"}]}>{loan.description}</Text>
            </View>
            <View style={styles.row}>
                <Button title="Actualizar" onPress={handleClick}/>
                <Button title="Borrar" onPress={handleClick}/>       
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: "red",
        alignContent: "center",
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 15,
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: 10
    },
    row: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})