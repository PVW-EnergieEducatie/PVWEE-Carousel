import { useEffect, useState } from 'react';
import EmblaOptions from '../types/EmblaOptions';
import { useMQTT } from '../types/MqttClient';

function Settings() {
  const client = useMQTT();
  const [connected, setConnected] = useState(false);
  const [values, setValues] = useState<EmblaOptions>({ speed: 3, delay: 8000 });

  useEffect(() => {
    if (client) {
      client.on('connect', () => {
        console.log('settings connected to mqtt broker');
        setConnected(client.connected);
      });
      client.on('disconnect', () => {
        console.log('settings disconnected from mqtt broker');
        setConnected(client.connected);
      });
      client.on('message', (topic, message) => {
        console.log(message.toString());
      });
    }
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
      <h1 className="font-bold">
        Status:{' '}
        <span
          className={`py-0.5 px-1.5 font-mono font-bold ${
            connected ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {connected ? 'connected' : 'not connected'}
        </span>
      </h1>
      <h1 className="font-bold">
        MQTT:{' '}
        <span className="rounded-lg bg-neutral-200 py-0.5 px-1.5 font-mono font-semibold">
          {/* @ts-ignore */}
          {window['env']['MQTT_URL']}
        </span>
      </h1>
      <div className="flex flex-row">
        <div>
          <h1>Delay</h1>
          <input
            className="mr-5 border-2"
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
            className="mr-5 border-2"
            placeholder="0"
            type="number"
            value={values.speed}
            onChange={(speed) =>
              setValues({ ...values, speed: parseInt(speed.target.value) })
            }
          />
        </div>
      </div>
      <button
        className="mt-3 mb-5 rounded-lg bg-amber-500 px-2 py-1"
        onClick={handleValues}
      >
        Save
      </button>
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
