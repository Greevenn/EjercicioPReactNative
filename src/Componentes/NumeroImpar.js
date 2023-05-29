import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const ContadorDeImpares = () => {
  const [numero, setNumbers] = useState([]);

  const handleInputChange = (text) => {
    const inputNumbers = text
      .split(',')
      .map((num) => parseInt(num.trim(), 10))
      .filter((num) => !isNaN(num));

    setNumbers(inputNumbers);
  };

  const cantidadImpares = () => {
    return numero.filter((num) => num % 2 !== 0).length;
  };

  return (
    <View>
      <Text>Contador de números impares</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
        placeholder="Ingrese los números separados por coma"
        onChangeText={handleInputChange}
      />
      
      <Text>Cantidad de números impares: {cantidadImpares()}</Text>
    </View>
  );
};



export default ContadorDeImpares;