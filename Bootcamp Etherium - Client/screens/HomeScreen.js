import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import globalStyles from '../styles/styles'
import { IP_DEV } from '@env'

import LoansList from '../components/LoansList'

export default function Home() {
  const [loans, setLoans] = useState([]) 

  useEffect(() =>{
    getLoansList()
  }, [])

  async function getLoansList() {
    const res = await fetch('http://' + IP_DEV + '/getLoanList/-1')
    const data = await res.json()

    let loansResponse = []
    data.response.forEach(element => {
      let loanObject = {
        "id": element[0],
        "createDate": element[1],
        "description": element[2],
        "totalAmount": element[3],
        "payedAmount": element[4],
        "restAmount": element[5],
        "Status": element[6]
      }
  
      loansResponse.push(loanObject)
    });
    setLoans(loansResponse)
  }

  return (
    <View style={globalStyles.screens}>
      <LoansList loans={loans} getLoansList={getLoansList} />
    </View>
  )
}

const styles = StyleSheet.create({})