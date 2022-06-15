import { createContext, useContext } from 'react';
import mqtt from 'mqtt/dist/mqtt.min';

export const MQTT_URL = window['env']['MQTT_URL'];

export const MqttClient = () => {
  let mClient = mqtt.connect(MQTT_URL, { keepalive: 60 });
  mClient.on('connect', () => {
    console.log('MQTT connected to broker');
    mClient.subscribe('/configure/controls');
    mClient.subscribe('/configure/values');
    mClient.subscribe('/configure/set_building');
    mClient.subscribe('/configure/ask_building');
    mClient.subscribe('/configure/response_building');
    mClient.subscribe('/configure/airtable_refresh');
  });
  // reconnect
  mClient.on('disconnect', () => setTimeout(() => mClient.reconnect(), 2000));
  return mClient;
};

export const MqttContext = createContext<mqtt.MqttClient>(MqttClient());

export const useMQTT = () => useContext(MqttContext);
