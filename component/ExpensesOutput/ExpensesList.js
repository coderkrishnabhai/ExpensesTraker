import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { getFormetedDate } from '../../utility/Date'




const renderExpenses = (itemData ) => {

  const navigation = useNavigation();

  const ExpensesManager = () => {
    navigation.navigate('ManageExpenses')
  }


  return (
    <Pressable onPress={ExpensesManager()} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.container} >
        <View>

          <Text style={styles.discription}>{itemData.item.description}</Text>
          <Text style={styles.date}>{getFormetedDate(itemData.item.date)}</Text>
        </View>
        <View>
          <Text style={styles.amount}>₹{itemData.item.amount}</Text>
        </View>

      </View>
    </Pressable>
  )
}

const ExpensesList = ({ expenses }) => {
  return <FlatList
    data={expenses}
    renderItem={renderExpenses}
    keyExtractor={(item) => item.id} />


}

export default ExpensesList


const styles = StyleSheet.create({
  pressed: {
    opacity: 0.50,
  },

  container: {
    flexDirection: 'row',
    padding: 3,
    backgroundColor: '#43c8e6',
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 7,


  },
  discription: {
    color: '#de710b',
    fontSize: 17,
    fontWeight: '800'
  },

  amount: {
    color: '#e4e9e6',
    fontWeight: '900',
    backgroundColor: '#2c3a2a',
    margin: 3,
    padding: 3,
    borderRadius: 6,
    paddingHorizontal: 8,


  },
  date: {
    fontSize: 15,
    color: '#fff'
  }


})