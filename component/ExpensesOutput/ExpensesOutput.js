import { View, StyleSheet } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalColor } from '../Styles';

const Dummy_Data = [
  {
    id: 'e1',
    description: 'To buy a laptop',
    amount: 3454,
    date: new Date('2021-12-19')
  },
  {
    id: 'e2',
    description: 'To buy a book',
    amount: 365,
    date: new Date('2021-11-19')
  },
  {
    id: 'e3',
    description: 'for some chokolate',
    amount: 756,
    date: new Date('2021-03-7')
  },
  {
    id: 'e4',
    description: 'for giving gift to friend',
    amount: 5,
    date: new Date('2021-01-2')
  },
  {
    id: 'e5',
    description: 'For but to a cycle',
    amount: 301,
    date: new Date('2021-12-19')
  }
];


const ExpensesOutput = ({ Expenses, periodName }) => {


  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={Dummy_Data} periodName={periodName} />
      <ExpensesList expenses={Dummy_Data} />
    </View>
  )
}

export default ExpensesOutput


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColor.Colors.primary500,
    padding: 16

  }
})