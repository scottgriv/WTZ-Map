<template>
  <div>
    <div class="header">
      <div class="header-title">
        <img src="/WTZ-Map/icon.png" alt="Logo" class="logo" />
        <h1>Weather Time Zone (WTZ) Map</h1>
      </div>
      <div class="header-description">
        <p>
          Discover the current weather and time zone information for any
          location around the world using this interactive map.
        </p>
        <ol>
          <li>Enter a location in the search bar.</li>
          <li>Click search or hit the enter key.</li>
          <li>View the corresponding data on the bottom of the screen.</li>
        </ol>
      </div>
    </div>
    <div class="container">
      <div class="search-bar">
        <input
          id="search-bar"
          type="text"
          v-model="location"
          placeholder="Enter a location"
          @keyup.enter="fetchTimeZone"
        />
        <button @click="fetchTimeZone" class="search-button">Search</button>
        <button @click="resetMap" class="reset-button">Reset</button>
      </div>
      <div ref="mapElement" class="map"></div>
      <div class="info">
        <p v-if="timezone" class="result-text">Time Zone: {{ timezone }}</p>
        <p v-if="currentTime" class="result-text">
          Current Date/Time: {{ currentTime }}
        </p>
        <p v-if="weather" class="result-text">Weather: {{ weather }}</p>
      </div>
    </div>
    <footer>
      <a href="https://github.com/scottgriv/WTZ-Map" target="_blank" rel="noreferrer">
        Check out this Project on GitHub! <i class="fa-brands fa-github fa-bounce"></i>
      </a>
    </footer>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, nextTick } from "vue";
import axios from "axios";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "~/public/L.timezones.js"; // Ensure this path is correct
import moment from "moment-timezone";

export default defineComponent({
  setup() {
    const openWeatherApiKey = process.env.OPENWEATHER_API_KEY;
    const timeZoneDbApiKey = process.env.TIMEZONEDB_API_KEY;
    const location = ref("");
    const mapElement = ref(null);
    const map = ref(null);
    const timezoneLayer = ref(null);
    const radarLayer = ref(null);
    const timezone = ref("");
    const currentTime = ref("");
    const weather = ref("");

    const fetchTimeZone = async () => {
      console.log("fetchTimeZone called");
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?q=${location.value}&format=json`
        );
        console.log("Location response:", response.data);
        if (response.data.length === 0) {
          console.error("No location data found");
          return;
        }
        const { lat, lon } = response.data[0];
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lon);

        if (map.value) {
          map.value.setView([latitude, longitude], 5);
          console.log(
            `Map view set to latitude: ${latitude}, longitude: ${longitude}`
          );
        }

        const tz = await findTimezone(latitude, longitude);
        timezone.value = tz;
        currentTime.value = moment().tz(tz).format("YYYY-MM-DD h:mm:ss A");

        // Fetch current weather
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              lat: latitude,
              lon: longitude,
              appid: openWeatherApiKey, // Use the environment variable directly
              units: "metric",
            },
          }
        );
        const tempC = weatherResponse.data.main.temp;
        const tempF = (tempC * 9) / 5 + 32;
        weather.value = `${
          weatherResponse.data.weather[0].description
        }, ${tempF.toFixed(2)}°F / ${tempC.toFixed(2)}°C`;

        if (map.value && timezoneLayer.value) {
          map.value.removeLayer(timezoneLayer.value);
        }

        timezoneLayer.value = L.timezones
          .bindPopup(function (layer) {
            return new Date().toLocaleString("en-GB", {
              timeZone: layer.feature.properties.tz_name1st,
              timeZoneName: "short",
            });
          })
          .addTo(map.value);
        console.log("Added timezone layer to the map");

        // Add radar layer
        if (map.value && radarLayer.value) {
          map.value.removeLayer(radarLayer.value);
        }

        radarLayer.value = L.tileLayer
          .wms(
            "https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r-t.cgi",
            {
              layers: "nexrad-n0r-wmst",
              format: "image/png",
              transparent: true,
              opacity: 0.5,
              attribution: "Weather data © 2024 Iowa State University",
            }
          )
          .addTo(map.value);
        console.log("Added radar layer to the map");
      } catch (error) {
        console.error("Error fetching time zone data:", error);
      }
    };

    const findTimezone = async (lat, lon) => {
      try {
        const response = await axios.get(
          `http://api.timezonedb.com/v2.1/get-time-zone`,
          {
            params: {
              key: timeZoneDbApiKey, // Use the environment variable directly
              format: "json",
              by: "position",
              lat,
              lng: lon,
            },
          }
        );
        return response.data.zoneName;
      } catch (error) {
        console.error("Error fetching timezone:", error);
        return "Etc/UTC";
      }
    };

    const resetMap = () => {
      location.value = "";
      timezone.value = "";
      currentTime.value = "";
      weather.value = "";
      if (map.value) {
        map.value.setView([0, 0], 2);
        if (timezoneLayer.value) {
          map.value.removeLayer(timezoneLayer.value);
        }
        if (radarLayer.value) {
          map.value.removeLayer(radarLayer.value);
        }
      }
    };

    onMounted(async () => {
      await nextTick();
      if (mapElement.value) {
        console.log("Initializing map");
        map.value = L.map(mapElement.value).setView([0, 0], 2);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
        }).addTo(map.value);
        console.log("Map initialized");

        timezoneLayer.value = L.timezones
          .bindPopup(function (layer) {
            return new Date().toLocaleString("en-GB", {
              timeZone: layer.feature.properties.tz_name1st,
              timeZoneName: "short",
            });
          })
          .addTo(map.value);
        console.log("Added initial timezone layer to the map");
      } else {
        console.error("Map element not found");
      }
    });

    return {
      location,
      mapElement,
      fetchTimeZone,
      resetMap,
      timezone,
      currentTime,
      weather,
    };
  },
});
</script>

<style scoped>
body {
  background-color: #f4f4f9;
  font-family: "Arial", sans-serif;
}

.header {
  text-align: center;
}

.header-title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

.header-description {
  text-align: center;
}

.header p{
  margin: 10px;
}

.header ol {
  text-align: left;
  display: inline-block;
  margin: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1 {
  margin-bottom: 10px;
  font-size: 2em;
  color: #333;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

input[type="text"] {
  width: 40%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
}

button {
  padding: 10px 20px;
  border-radius: 0 5px 5px 0;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1em;
}

.search-button {
  background-color: #28a745;
  border-radius: 5px;
  margin-left: 5px;
}

.search-button:hover {
  background-color: #218838;
}

.reset-button {
  background-color: #dc3545;
  border-radius: 5px;
  margin-left: 5px;
}

.reset-button:hover {
  background-color: #c82333;
}

.map {
  height: 600px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.info {
  background-color: #e3f2fd;
  padding: 10px;
  border-radius: 5px;
}

.result-text {
  margin: 10px 0;
  font-size: 1.2em;
  color: #333;
}

:global(footer) {
  text-align: center;
  margin: 15px;
}

:global(footer a) {
  color: #000000;
  text-decoration: none;
}

:global(footer a:visited) {
  color: #000000;
}

:global(footer a:hover) {
  text-decoration: underline;
}
</style>
