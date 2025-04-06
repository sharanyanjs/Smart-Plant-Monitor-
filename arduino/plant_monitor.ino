Firebase Version

#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

#define WIFI_SSID "your-ssid"
#define WIFI_PASSWORD "your-password"
#define FIREBASE_HOST "your-project-id.firebaseio.com"
#define FIREBASE_AUTH "your-database-secret"

int sensorPin = A0;

void setup() {
  Serial.begin(9600);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop() {
  int moisture = analogRead(sensorPin);
  Serial.println(moisture);
  Firebase.pushInt("/moisture", moisture);
  delay(5000); // Send every 5 seconds
}
