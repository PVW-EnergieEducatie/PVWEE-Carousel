(function (window) {
  window.env = window.env || {};

  // Environment variables
  window['env']['MQTT_URL'] = '${MQTT_URL}';
  window['env']['API_URL'] = '{API_URL}';
})(this);
