# 🌱 Smart Plant Monitor

An IoT-based soil moisture monitoring system that combines hardware (NodeMCU + Moisture Sensor) and a responsive web dashboard built with React. This project demonstrates real-time data visualization by pushing sensor data to Firebase and displaying it live using Chart.js.

![Smart Plant Monitor Demo](demo.gif)

---

## 🚀 Features

- 🔄 **Real-time Monitoring**: Sensor reads moisture every 5 seconds
- 📡 **IoT Enabled**: ESP8266 sends data to Firebase
- 📊 **Live Graphs**: Moisture trends displayed on a web dashboard
- 🧠 **Full-Stack Project**: Arduino + Firebase + React
- 💡 **Expandable**: Easily integrate alerts or mobile notifications

---

## 🛠 Tech Stack

| Layer        | Tech                          |
|--------------|-------------------------------|
| Hardware     | NodeMCU (ESP8266), Soil Sensor |
| Backend      | Firebase Realtime Database     |
| Frontend     | React, Chart.js, REST API      |

---

## 🔌 Hardware Setup

- **NodeMCU ESP8266**
- **Soil Moisture Sensor**
- Wiring:
  - VCC → 3.3V
  - GND → GND
  - AOUT → A0 (Analog input on NodeMCU)

---

## 📦 Folder Structure

