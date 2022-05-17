import { useEffect, useState } from 'react';
import mqtt from 'mqtt/dist/mqtt.min';
import { MqttClient } from 'mqtt/dist/mqtt.min';
import EmblaOptions from '../types/EmblaOptions';
import { useMQTT } from '../types/MqttClient';

function Settings() {
  const [client] = useMQTT();
  const [values, setValues] = useState<EmblaOptions>({ speed: 3, delay: 8000 });

  useEffect(() => {
    client.on('connect', () => {
      console.log('settings connected to mqtt broker');
    });
    client.on('message', (topic, message) => {
      console.log(message.toString());
    });
  }, []);

  const handleControl = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    client.publish('/configure/controls', e.currentTarget.id);
  };

  const handleValues = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    client.publish('/configure/values', JSON.stringify(values));
  };

  return (
    <div className="m-5">
      <h1 className="mb-3 text-xl font-bold">Settings</h1>
      {/* @ts-ignore */}
      <h1>Mqtt: {window['env']['mqtturl']}</h1>
      <div className="flex flex-row">
        <div>
          <h1>Delay</h1>
          <input
            placeholder="0"
            value={values.delay}
            type="number"
            onChange={(delay) =>
              setValues({ ...values, delay: parseInt(delay.target.value) })
            }
          />
        </div>
        <div>
          <h1>Speed</h1>
          <input
            placeholder="0"
            value={values.speed}
            onChange={(speed) =>
              setValues({ ...values, speed: parseInt(speed.target.value) })
            }
          />
        </div>
        <button onClick={handleValues}>Save</button>
      </div>
      <div className="flex flex-row">
        <button
          id="PREVIOUS"
          className="rounded-lg bg-amber-500 px-2 py-1"
          onClick={handleControl}
        >
          Previous
        </button>
        <button
          id="PAUSE"
          className="mx-3 rounded-lg bg-amber-500 px-2 py-1"
          onClick={handleControl}
        >
          Pause
        </button>
        <button
          id="PLAY"
          className="mx-3 rounded-lg bg-amber-500 px-2 py-1"
          onClick={handleControl}
        >
          Play
        </button>
        <button
          id="NEXT"
          className="rounded-lg bg-amber-500 px-2 py-1"
          onClick={handleControl}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Settings;
