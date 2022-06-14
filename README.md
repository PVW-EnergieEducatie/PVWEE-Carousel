# PVWEE-Carousel
 
## Deployment
**! Voor de volledige deployment (in Docker) van de frontend + backend, [zie de wiki hier](https://github.com/PVW-EnergieEducatie/PVWEE-frontend/wiki/Installation-Deployment)**

### Local deployment
Local deployment heeft de kans om minder performant te zijn, want deze is vooral bedoeld voor development! Voor production gebruik je best een web server zoals Nginx of gebruik je de docker-compose die je op bovenstaande link terugvindt<br><br>
Deze app maakt gebruik van PVWEE-API [[GH](https://github.com/PVW-EnergieEducatie/PVWEE-backend)|[PKG](https://github.com/PVW-EnergieEducatie/PVWEE-backend/pkgs/container/pvwee-api)] & een MQTT broker (zoals [mosquitto](https://hub.docker.com/_/eclipse-mosquitto))

1) clone deze repository
2) Maak een `env.js` file aan onder `public/assets/env.js` , vervang de placeholders
```js
(function (window) {
  window.env = window.env || {};

  // Environment variables
  window['env']['MQTT_URL'] = '<MQTT_URL>';
  window['env']['API_INFLUX_URL'] = '<API_INFLUX_URL>';
  window['env']['AIRTABLE_KEY'] = '<AIRTABLE_KEY>';
})(this);
```
3) installeer je dependencies
```
$ npm i
```
4) start je app op
```
$ npm run dev
```
of een preview build
```
$ npm run build
$ npm run preview
```
