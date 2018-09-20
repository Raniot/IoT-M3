# IoT - Milestone 2: Inspecting & Adjusting
## Desciption
This is the second Milestone assigment in the course "E18 - Building the Internet of Things with P2P and Cloud Computing"

Two versions was created of this Milestone, first a version from our knowledge before reading chapter 6-7 which can be found here: https://github.com/Raniot/IoT/tree/master/IoT-M2-FirstEdition
And then a second version following the way in the book. Which is also the reason why a lot of the code is very similar to the code described in the book. 

## How is the image build?
An automatic build pipeline has been setup, which builds the image on a raspberry Pi and push it to Docker Hub.
The image of this repo is pushed to: https://hub.docker.com/r/raniot/inspectingadjusting

#### Requirements:
- A raspberry pi with docker installed
- The raspberry pi should be wired as shown below.

**Obs: There is a change to the wiring from the image!!!**

The wiring is setup using the text in the image, so the components are getting the correct voltage.

![alt text](https://github.com/Raniot/IoT-M2/blob/master/img/RaspberryGPIOSetup.png "Raspberry GPIO Setup")

#### To run the image run: 
- docker pull raniot/inspectingadjusting:latest
- docker run -p 3000:3000 raniot/inspectingadjusting:latest
- Access http://localhost:3000
- Access web page http://localhost:3000/web

#### To see the site on a raspberry:
http://89.150.134.103:3001 (The site is using the simulation values described in the book).
Access the Web page on http://89.150.134.103:3001/web

## Milestone Description
### Milestone 2: Inspecting & Adjusting
The purpose of this milestone is implement the Web of Things model in a REST API.

You should provide a properly structured REST API for the sensors (and LEDs) attached to your RPi, following the design guidelines from the WoT book.

You should create a Web page that dynamically, through your REST API, retrieves the information as well as enables the control of LEDs.

Deadline: Ultimo W37
