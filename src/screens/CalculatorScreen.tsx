import React from 'react'
import { Text, View } from 'react-native'
import stylesAppTheme from '../theme/appTheme';
import ButtonCalculator from '../components/ButtonCalculator';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorScreen = () => {

    const {
        reset,
        btnAdd,
        btnDivide,
        btnMultiply,
        btnSubstract,
        calculate,
        setPositiveOrNegative,
        deleteEndEntry,
        buildNumber,
        numberBefore,
        number
    } = useCalculator();

    return (
        <View style={stylesAppTheme.calculatorContainer}>
            {
                numberBefore !== '0' && (
                    <Text style={stylesAppTheme.resultLittle}>{numberBefore}</Text>
                )
            }
            <Text
                style={stylesAppTheme.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>

            <View style={stylesAppTheme.row}>
                <ButtonCalculator text="C" color="#9B9B9B" action={reset} />
                <ButtonCalculator text="+/-" color="#9B9B9B" action={setPositiveOrNegative} />
                <ButtonCalculator text="del" color="#9B9B9B" action={deleteEndEntry} />
                <ButtonCalculator text="/" color="#FF9427" action={btnDivide} />
            </View>

            <View style={stylesAppTheme.row}>
                <ButtonCalculator text="7" action={buildNumber} />
                <ButtonCalculator text="8" action={buildNumber} />
                <ButtonCalculator text="9" action={buildNumber} />
                <ButtonCalculator text="X" color="#FF9427" action={btnMultiply} />
            </View>

            <View style={stylesAppTheme.row}>
                <ButtonCalculator text="4" action={buildNumber} />
                <ButtonCalculator text="5" action={buildNumber} />
                <ButtonCalculator text="6" action={buildNumber} />
                <ButtonCalculator text="-" color="#FF9427" action={btnSubstract} />
            </View>

            <View style={stylesAppTheme.row}>
                <ButtonCalculator text="1" action={buildNumber} />
                <ButtonCalculator text="2" action={buildNumber} />
                <ButtonCalculator text="3" action={buildNumber} />
                <ButtonCalculator text="+" color="#FF9427" action={btnAdd} />
            </View>

            <View style={stylesAppTheme.row}>
                <ButtonCalculator text="0" setWidth action={buildNumber} />
                <ButtonCalculator text="." action={buildNumber} />
                <ButtonCalculator text="=" color="#FF9427" action={calculate} />
            </View>

        </View>
    )
}

export default CalculatorScreen;