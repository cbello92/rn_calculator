import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import stylesAppTheme from '../theme/appTheme';

interface Props {
    text: string;
    color?: '#9B9B9B' | '#2D2D2D' | '#FF9427',
    setWidth?: boolean;
    action: (numberText: string) => void;
}

const ButtonCalculator = ({ text, color = '#2D2D2D', setWidth = false, action }: Props) => {
    let stylesButton = {
        ...stylesAppTheme.button,
        width: setWidth ? 180 : 80
    };

    if (color) {
        stylesButton = { ...stylesButton, backgroundColor: color }
    }

    return (
        <TouchableOpacity onPress={() => action(text)}>
            <View style={stylesButton}>
                <Text style={{
                    ...stylesAppTheme.buttonText,
                    color: (color === '#9B9B9B' ? 'black' : 'white')
                }}>{text}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default ButtonCalculator;