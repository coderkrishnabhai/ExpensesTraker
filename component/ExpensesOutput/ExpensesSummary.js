import { View, Text , StyleSheet} from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GlobalColor } from '../Styles';

const ExpensesSummary = ({ expenses, periodName }) => {
    const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>₹{expensesSum}</Text>
        </View>
    );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:GlobalColor.Colors.supportColor1,
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20,
        borderRadius:6
        
    },
    period:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000'
    },
    sum:{
        fontSize:19,
        fontWeight:'bold',
        color:'#000'
    }
})

