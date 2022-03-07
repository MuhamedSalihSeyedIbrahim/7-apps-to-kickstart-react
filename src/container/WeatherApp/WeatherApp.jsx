import React, { Component } from "react";
import "./WeatherApp.css";
class WeatherApp extends Component {
  constructor(props) {
    super(props);

    this.mainpulativeDOMElements = {
      input: React.createRef(),
      msg: React.createRef(),
      list: React.createRef(),
    };

    this.submit = this.submit.bind(this);
  }

  async weatherDataFetcher(place = null) {
    let currentLocationCoord = await this.getLocation();
    const APP_KEY = "xxxx";
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    let weatherData = await fetch(
      !place
        ? `http://api.openweathermap.org/data/2.5/weather?lat=${currentLocationCoord.lat}&lon=${currentLocationCoord.lng}&appid=${APP_KEY}`
        : `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APP_KEY}&units=metric`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result);

    return weatherData;
  }

  async getLocation() {
    if (navigator.geolocation) {
      return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(
          (position) =>
            res({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }),
          (err) => res({ lat: 111.127122499999999, lng: 178.6568942 })
        );
      });
    }
  }

  async submit(event) {
    let inputVal = this.mainpulativeDOMElements.input.value;
    //check if there's already a city
    const listItems = this.mainpulativeDOMElements.list.querySelectorAll(
      ".ajax-section .city"
    );
    const listItemsArray = Array.from(listItems);

    if (listItemsArray.length > 0) {
      const filteredArray = listItemsArray.filter((el) => {
        let content = "";
        if (inputVal.includes(",")) {
          if (inputVal.split(",")[1].length > 2) {
            inputVal = inputVal.split(",")[0];
            content = el.querySelector(".city-name span").textContent
              ? el.querySelector(".city-name span").textContent.toLowerCase()
              : "";
          } else {
            content = el.querySelector(".city-name").dataset.name.toLowerCase();
          }
        } else {
          content = el.querySelector(".city-name span").textContent
            ? el.querySelector(".city-name span").textContent.toLowerCase()
            : "";
        }
        return content === inputVal.toLowerCase();
      });

      if (filteredArray.length > 0) {
        this.mainpulativeDOMElements.msg.textContent = `You already know the weather for ${
          filteredArray[0].querySelector(".city-name span").textContent
        } ...otherwise be more specific by providing the country code as well 😉`;
        this.mainpulativeDOMElements.form.reset();
        this.mainpulativeDOMElements.input.focus();
        return;
      }
    }

    //ajax here
    try {
      const weatherData = await this.weatherDataFetcher(inputVal);
      console.log(weatherData);
      if (weatherData.cod === 404) {
        this.mainpulativeDOMElements.msg.textContent = weatherData.message;
        return;
      }

      const { main, name, sys, weather } = weatherData;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
      }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      this.mainpulativeDOMElements.list.appendChild(li);
    } catch (error) {
      this.mainpulativeDOMElements.msg.textContent =
        "Please search for a valid city 😩";
    }

    this.mainpulativeDOMElements.msg.textContent = "";
    this.mainpulativeDOMElements.form.reset();
    this.mainpulativeDOMElements.input.focus();
  }
  render() {
    return (
      <div className="weather-app">
        <section className="top-banner">
          <div className="container">
            <h1 className="heading">Weather App</h1>
            <form
              ref={(element) => (this.mainpulativeDOMElements.form = element)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  e.preventDefault();
                  return false;
                }
              }}
            >
              <input
                type="text"
                ref={(element) =>
                  (this.mainpulativeDOMElements.input = element)
                }
                placeholder="Search for a city"
                autoFocus
              />
              <button type="button" onClick={this.submit}>
                SUBMIT
              </button>
              <span
                className="msg"
                ref={(element) => (this.mainpulativeDOMElements.msg = element)}
              >
                {""}
              </span>
            </form>
          </div>
        </section>
        <section className="ajax-section">
          <div className="container">
            <ul
              className="cities"
              ref={(element) => (this.mainpulativeDOMElements.list = element)}
            ></ul>
          </div>
        </section>
        <footer className="page-footer">
          <div className="container">
            <small>
              Made with <span>❤</span> by{" "}
              <a
                href="https://github.com/muhamedsalihseyedibrahim/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MUHAMED SALIH SI
              </a>
            </small>
          </div>
        </footer>
      </div>
    );
  }
}

export default WeatherApp;
