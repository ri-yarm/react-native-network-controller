import React, {useState} from 'react';
import {ActivityIndicator, Alert, Button, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const DeliveryClosure = () => {
  const [loading, setLoading] = useState(false);

  const handleCloseDelivery = async () => {
    setLoading(true);

    try {
      const isConnected = await NetInfo.fetch().then(
        state => state.isConnected,
      );
      console.log('isConnected:', isConnected);

      if (!isConnected) {
        setLoading(false);
        Alert.alert('Отсутствует интернет соединение');
        return;
      }

      setLoading(true);
      const isSuccess = await simulateRequest();
      console.log('isSuccess:', isSuccess);
      Alert.alert(
        'Доставка',
        isSuccess
          ? 'Доставка закрыта'
          : 'Не удалось закрыть доставку повторите ещё раз',
      );
    } catch (error) {
      console.error(error);
      setLoading(false);
      Alert.alert('Ошибка при закрытии доставки');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Закрыть доставку" onPress={handleCloseDelivery} />
      )}
    </View>
  );
};

const simulateRequest = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random() < 0.8);
    }, 800);
  });
};
export default DeliveryClosure;
