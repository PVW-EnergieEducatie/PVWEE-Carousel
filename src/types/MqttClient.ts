import { createContext, useContext } from 'react';
import mqtt from 'mqtt/dist/mqtt.min';

export const MQTT_URL = window['env']['MQTT_URL'];

export const MqttClient = () => {
  let mClient = mqtt.connect(MQTT_URL);
  mClient.on('connect', () => {
    console.log('MQTT connected to broker');
    mClient.subscribe('/configure/controls');
    mClient.subscribe('/configure/values');
  });
  return mClient;
};

export const MqttContext = createContext<mqtt.MqttClient>(MqttClient());

export const useMQTT = () => useContext(MqttContext);
