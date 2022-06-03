(function (window) {
  window.env = window.env || {};

  // Environment variables
  window['env']['MQTT_URL'] = '${MQTT_URL}';
  window['env']['INFLUX_URL'] = '${INFLUX_URL}';
  window['env']['AIR_KEY'] = '${AIR_KEY}';
})(this);
