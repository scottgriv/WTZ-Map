<!-- Begin README -->

<div align="center">
    <a href="https://github.com/scottgriv/WTZ-Map" target="_blank">
        <img src="./docs/images/icon.png" width="200" height="200"/>
    </a>
</div>
<br>
<p align="center">
    <a href="https://nuxt.com/"><img src="https://img.shields.io/badge/Nuxt.js-2.15.8-00DC82?style=for-the-badge&logo=nuxtdotjs" alt="JavaScript Badge" /></a>
    <br>
    <a href="https://github.com/scottgriv"><img src="https://img.shields.io/badge/github-follow_me-181717?style=for-the-badge&logo=github&color=181717" alt="GitHub Badge" /></a>
    <a href="mailto:scott.grivner@gmail.com"><img src="https://img.shields.io/badge/gmail-contact_me-EA4335?style=for-the-badge&logo=gmail" alt="Email Badge" /></a>
    <a href="https://www.buymeacoffee.com/scottgriv"><img src="https://img.shields.io/badge/buy_me_a_coffee-support_me-FFDD00?style=for-the-badge&logo=buymeacoffee&color=FFDD00" alt="BuyMeACoffee Badge" /></a>
    <br>
    <a href="https://github.com/scottgriv/WTZ-Map/actions/workflows/nuxtjs.yml" target="_blank"><img alt="GitHub Workflow Status (with event)" src="https://img.shields.io/github/actions/workflow/status/scottgriv/WTZ-Map/nuxtjs.yml?style=for-the-badge&logo=github&label=GitHub%20Pages"></a>
    <a href="https://prgportfolio.com" target="_blank"><img src="https://img.shields.io/badge/PRG-Silver Project-C0C0C0?style=for-the-badge&logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMjYuMDAwMDAwcHQiIGhlaWdodD0iMzQuMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAyNi4wMDAwMDAgMzQuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwzNC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiNDMEMwQzAiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiAzMjggYy04IC04IC0xMiAtNTEgLTEyIC0xMzUgMCAtMTA5IDIgLTEyNSAxOSAtMTQwIDQyIC0zOCA0OAotNDIgNTkgLTMxIDcgNyAxNyA2IDMxIC0xIDEzIC03IDIxIC04IDIxIC0yIDAgNiAyOCAxMSA2MyAxMyBsNjIgMyAwIDE1MCAwCjE1MCAtMTE1IDMgYy04MSAyIC0xMTkgLTEgLTEyOCAtMTB6IG0xMDIgLTc0IGMtNiAtMzMgLTUgLTM2IDE3IC0zMiAxOCAyIDIzCjggMjEgMjUgLTMgMjQgMTUgNDAgMzAgMjUgMTQgLTE0IC0xNyAtNTkgLTQ4IC02NiAtMjAgLTUgLTIzIC0xMSAtMTggLTMyIDYKLTIxIDMgLTI1IC0xMSAtMjIgLTE2IDIgLTE4IDEzIC0xOCA2NiAxIDc3IDAgNzIgMTggNzIgMTMgMCAxNSAtNyA5IC0zNnoKbTExNiAtMTY5IGMwIC0yMyAtMyAtMjUgLTQ5IC0yNSAtNDAgMCAtNTAgMyAtNTQgMjAgLTMgMTQgLTE0IDIwIC0zMiAyMCAtMTgKMCAtMjkgLTYgLTMyIC0yMCAtNyAtMjUgLTIzIC0yNiAtMjMgLTIgMCAyOSA4IDMyIDEwMiAzMiA4NyAwIDg4IDAgODggLTI1eiIvPgo8L2c+Cjwvc3ZnPgo=" alt="Silver" /></a>
</p>

---------------

<h1 align="center">Weather Time Zone (WTZ) Map</h1>

This Nuxt application allows you to discover the current weather and time zone information for any location around the world. Simply input a location, and the app will display the relevant data, including weather conditions, time zone, and current time.

<div align="center">
    <a href="https://scottgriv.github.io/WTZ-Map/" target="_blank">
        <img src="./docs/images/demo.png" style="width: 80%;"/>
    </a>
    <br>
    <i>Application Preview</i>
</div>

---------------

## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
- [Resources](#resources)
- [License](#license)
- [Credits](#credits)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).
- You have a GitHub account.

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/scottgriv/WTZ-Map.git
    cd WTZ-Map
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Obtain API keys:**
    - [TimeZoneDB](https://timezonedb.com/register) - Sign up and get your API key.
    - [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) - Sign up and get your API key.

4. **Set up environment variables:**

    Create a `.env` file in the root directory of your project and add your API keys:
    ```plaintext
    NUXT_ENV_OPENWEATHER_API_KEY=your_openweathermap_api_key
    NUXT_ENV_TIMEZONEDB_API_KEY=your_timezonedb_api_key
    ```

5. **Run the application locally:**
    ```bash
    npm run dev
    ```

    The application should now be running on `http://localhost:3000`.

To deploy your Nuxt application to GitHub Pages, follow these steps:

6. **Add your API keys as GitHub Secrets:**
    - Go to your GitHub repository.
    - Click on `Settings`.
    - Navigate to `Secrets and variables` > `Actions`.
    - Click on `New repository secret`.
    - Add the following secrets:
        - `NUXT_ENV_OPENWEATHER_API_KEY`
        - `NUXT_ENV_TIMEZONEDB_API_KEY`

> [!CAUTION]
> Secrets must have the `NUXT_ENV` prefix to properly work.
> See [this Nuxt.js documentation here](https://v2.nuxt.com/docs/configuration-glossary/configuration-env/#automatic-injection-of-environment-variables) for more information.

## Usage

1. Enter a location in the search bar.
2. Click the search button or hit the enter key.
3. View the corresponding data on the screen.
4. Click the reset button to clear the results and reset the map view.

## Resources

**APIs:**
- [TimeZoneDB](https://timezonedb.com/)
- [OpenWeatherMap](https://openweathermap.org/)
- [Iowa State University's Mesonet](https://mesonet.agron.iastate.edu/ogc/)

**Technologies:**
- [JavaScript](https://www.javascript.com/)
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [Nuxt.js](https://nuxtjs.org/)
- [Vue.js](https://vuejs.org/)
- [Leaflet](https://leafletjs.com/)
- [Axios](https://axios-http.com/)
- [Leaflet.timezones](https://github.com/dj0001/Leaflet.timezones)

**Maps**
_Free Tile Providers (No API Key Required)_
- [Esri](https://www.esri.com/en-us/capabilities/mapping/overview)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [CartoDB](https://carto.com/)
_Tile Providers Requiring API Key_
- [Mapbox](https://www.mapbox.com/)
- [Stadia x Stamen](https://stadiamaps.com/stamen)
- [HERE Maps](https://www.here.com//)
- [Thunderforest](https://www.thunderforest.com/)
- [MapTiler](https://www.maptiler.com/)

> [!NOTE] 
> Easily swap out your map provider by searching for the `Change Map Provider Here` comment in the code base.
> Replace it with your map/tile provider or one of the providers mentioned above.
> By default, I'm using **Esri** with the `World_Topo_Map` (topological) style.

## License

This project is released under the terms of the **MIT License**, which permits use, modification, and distribution of the code, subject to the conditions outlined in the license.
- The [MIT License](https://choosealicense.com/licenses/mit/) provides certain freedoms while preserving rights of attribution to the original creators.
- For more details, see the [LICENSE](LICENSE) file in this repository. in this repository.

## Credits

**Author:** [Scott Grivner](https://github.com/scottgriv) <br>
**Email:** [scott.grivner@gmail.com](mailto:scott.grivner@gmail.com) <br>
**Website:** [scottgrivner.dev](https://www.scottgrivner.dev) <br>
**Reference:** [Main Branch](https://github.com/scottgriv/WTZ-Map) <br>

---------------

<div align="center">
    <a href="https://scottgrivner.dev" target="_blank">
        <img src="./docs/images/footer.png" width="100" height="100"/>
    </a>
</div>

<!-- End README -->
