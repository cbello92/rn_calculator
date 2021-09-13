import { useRef, useState } from "react";

enum Operators {
    add, substract, multiply, divide
}

export const useCalculator = () => {
    const [number, setNumber] = useState('0');
    const [numberBefore, setNumberBefore] = useState('0');

    const endOperation = useRef<Operators>();

    const reset = () => {
        setNumber('0');
        setNumberBefore("0");
    }

    const buildNumber = (numberText: string) => {
        if (number.includes(".") && numberText === ".") return;
        if (number.startsWith("0") || number.startsWith("-0")) {
            // Punto decimal
            if (numberText === ".") {
                setNumber(number + numberText)

                // Evaluar si es otro cero, y hay un punto
            } else if (numberText === "0" && number.includes(".")) {
                setNumber(number + numberText);

                // Evaluar si es diferente de cero y no tiene un punto
            } else if (numberText !== "0" && !number.includes(".")) {
                setNumber(numberText);

                // Evitar 0000.0
            } else if (numberText === "0" && !number.includes(".")) {
                setNumber(number);
            } else {
                setNumber(number + numberText)
            }
        } else {
            setNumber(number + numberText)
        }
    }

    const deleteEndEntry = () => {
        if (number.length > 1) {
            if (number.includes("-") && number.length === 2) return setNumber("0")
            return setNumber(number.slice(0, - 1))
        }

        setNumber("0");
    }

    const switchNumberBefore = () => {
        if (number.endsWith(".")) {
            setNumberBefore(number.slice(0, -1));
        } else {
            setNumberBefore(number);
        }
        setNumber("0");
    }

    const setPositiveOrNegative = () => {
        if (number.includes("-")) {
            setNumber(number.replace("-", ""));
        } else {
            setNumber(`-${number}`)
        }
    }

    const btnDivide = () => {
        switchNumberBefore();
        endOperation.current = Operators.divide;
    }


    const btnMultiply = () => {
        switchNumberBefore();
        endOperation.current = Operators.multiply;
    }

    const btnSubstract = () => {
        switchNumberBefore();
        endOperation.current = Operators.substract;
    }

    const btnAdd = () => {
        switchNumberBefore();
        endOperation.current = Operators.add;
    }

    const calculate = () => {
        const numberOne = Number(number);
        const numberTwo = Number(numberBefore);

        switch (endOperation.current) {
            case Operators.add:
                setNumber(`${numberOne + numberTwo}`)
                break;

            case Operators.substract:
                setNumber(`${numberTwo - numberOne}`)
                break;

            case Operators.multiply:
                setNumber(`${numberOne * numberTwo}`)
                break;

            case Operators.divide:
                if (isNaN(numberTwo / numberOne)) return;
                setNumber(`${numberTwo / numberOne}`)
                break;
        }

        setNumberBefore("0");
    }

    return {
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
    }
}