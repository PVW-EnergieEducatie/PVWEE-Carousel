import { useState } from 'react';
import mqtt from 'mqtt/dist/mqtt.min';

// @ts-ignore
let url = window['env']['mqtturl'];
export const useMQTT = () => useState(mqtt.connect(url));
