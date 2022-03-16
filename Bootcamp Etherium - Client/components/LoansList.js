import { StyleSheet, Text, View, FlatList, RefreshControl, Dimensions } from 'react-native'
import globalStyles from '../styles/styles'
import React, { useEffect, useState } from 'react'

import LoanItem from './LoanItem'

export default function LoansList({loans, getLoansList}) {
  // Se crea un estado de refreshing para saber si la app esta refrescando (sino hace un loop)
  const [refreshing, setRefreshing] = useState(false)
  // Se crea un estado de mensaje de error para comprobar si la lista está vacia
  const [showMessage, setShowMessage] = useState(false)

  // Cada vez que se actualiza "loans" se vuelve a comprobar el estado del mensaje
  useEffect(() => {
    setShowMessage(loans.length === 0)
  }, [loans])

  const emptyLoansList = (
    <View style={styles.emptyText}><Text style={{ color:"white", fontSize: 20 }}>No hay préstamos disponibles</Text><Text style={{ color:"white", fontSize: 20 }}>Intente refrescar</Text></View>
    );

  // Este método se llama desde la herramienta RefreshControl para recargar los prestamos
  const onRefresh = React.useCallback(async () => {
    // Seteo la carga y al finalizar la freno para evitar ese loop
    setRefreshing(true)
    await getLoansList()
    setRefreshing(false)
  })
  
  function renderItem({item}) {
    return <LoanItem loan={item} />
  }

  // RefreshControl es la herramienta que nos permite refrescar y ejecutar una función mientras
  // lo está haciendo
  return (
  <View>
    {showMessage && emptyLoansList}
    <FlatList data={loans} keyExtractor={(item)=>item.id} renderItem={renderItem} refreshControl={
      <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
    }/>
  </View>
  )
}

const styles = StyleSheet.create({
  emptyText: {
    width: "100%",
    marginTop: '10%',
    alignItems: 'center',
  }
})