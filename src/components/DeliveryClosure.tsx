import React from 'react';
import {ActivityIndicator, Button, View} from 'react-native';
import {useDeliveryClosure} from './useDeliveryClosure.ts';
import {styles} from './DeliveryClosure.styles.ts';

const DeliveryClosure = () => {
  const {loading, handleCloseDelivery} = useDeliveryClosure();
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Закрыть доставку" onPress={handleCloseDelivery} />
      )}
    </View>
  );
};

export default React.memo(DeliveryClosure);
