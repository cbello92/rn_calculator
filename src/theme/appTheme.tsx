import { StyleSheet } from 'react-native';

const stylesAppTheme = StyleSheet.create({
    backgroundApp: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    resultLittle: {
        color: 'rgba(255,255, 255, 0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#9B9B9B',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    }
})

export default stylesAppTheme;