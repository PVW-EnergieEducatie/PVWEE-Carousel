(function (window) {
  window.env = window.env || {};

  // Environment variables
  window['env']['mqtturl'] = '${MQTT_URL}';
})(this);
