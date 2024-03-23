import {useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';
import {simulateRequest} from '../lib/func/simulateRequest.ts';

export const useDeliveryClosure = () => {
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

  return {loading, handleCloseDelivery};
};
