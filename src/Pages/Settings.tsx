import { useEffect, useState } from 'react';
import EmblaOptions from '../types/EmblaOptions';
import { useMQTT } from '../utils/MqttClient';

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
    <div className=" flex h-screen w-screen  items-center justify-center bg-slate-200">
      <div className="flex flex-col items-center justify-center rounded-lg bg-white p-12">
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
        <h1 className="mb-3 font-bold">
          MQTT:{' '}
          <span className="rounded-lg bg-neutral-200 py-0.5 px-1.5 font-mono font-semibold">
            {/* @ts-ignore */}
            {window['env']['MQTT_URL']}
          </span>
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label>Delay</label>
            <input
              className="mb-3 rounded-lg border-2 px-2 hover:border-slate-50 focus:border-verbruik-72 focus:outline-none focus:ring-2 focus:ring-verbruik-100"
              placeholder="0"
              value={values.delay}
              type="number"
              onChange={(delay) =>
                setValues({ ...values, delay: parseInt(delay.target.value) })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="speed">Speed</label>
            <input
              className="mb-3 rounded-lg border-2 px-2 hover:border-slate-50 focus:border-verbruik-72 focus:outline-none focus:ring-2 focus:ring-verbruik-100"
              placeholder="0"
              type="number"
              value={values.speed}
              onChange={(speed) =>
                setValues({ ...values, speed: parseInt(speed.target.value) })
              }
              name="speed"
            />
          </div>
        </div>
        <button
          className="mt-3 mb-5 w-full rounded-lg bg-verbruik-100 bg-opacity-80 px-2 py-1 font-semibold text-white"
          onClick={handleValues}
        >
          Save
        </button>
        <div className="flex flex-row items-center justify-around gap-3">
          <button
            id="PREVIOUS"
            className=" rounded-lg bg-verbruik-72 bg-opacity-90 px-3 py-2"
            onClick={handleControl}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="19 20 9 12 19 4 19 20"></polygon>
              <line x1="5" y1="19" x2="5" y2="5"></line>
            </svg>
          </button>
          <button
            id="PAUSE"
            className=" rounded-lg bg-verbruik-72 bg-opacity-90 px-3 py-2"
            onClick={handleControl}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          </button>
          <button
            id="PLAY"
            className=" rounded-lg bg-verbruik-72 bg-opacity-90 px-3 py-2"
            onClick={handleControl}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
          <button
            id="NEXT"
            className="rounded-lg bg-verbruik-72 bg-opacity-90 px-3 py-2"
            onClick={handleControl}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="5 4 15 12 5 20 5 4"></polygon>
              <line x1="19" y1="5" x2="19" y2="19"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
