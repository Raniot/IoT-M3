# IoT - Milestone 3: Storing & Retrieving
## Desciption
This is the third Milestone assigment in the course "E18 - Building the Internet of Things with P2P and Cloud Computing"

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
### Milestone 3: Storing & Retrieving
The purpose of this milestone is to hook up your system, through MQTT, to cloud storage.

Create a storage component, hosted on a public accessible cloud server that can retrieve sensor data from your RPi over MQTT. You are encouraged to both try using EVRYTHNG as well as rolling your own solution in order to get a handle on the practicalities of building your own.

Your Docker image on the RPi should, upon start, connect to a MQTT broker running on your cloud server.

Your cloud instance should also host a Web page that retrieves and displays the collected data, as well as enabling control of LEDs on the RPi.

See the Resources page for information on getting started with MQTT and cloud services.

You should keep your own RPi running, so that we, by running your code on our RPis, can see several RPis in action.

Your system should ideally contain a Dockerfile that can be built and started on a (sensor connected) RPi, as well as Dockerfiles for your cloud side components.

It is your responsibility that your cloud components are running.

You should deliver either a zip-file, or, better, a file consisting of the necessary git command to clone your repository.

There should be a README.md file in the root with instructions, as well as documentation of the REST endpoints and the possible HTTP they can support.

Add 'au589905' as a user to your group on GitLab, so that Michal can access your code.

Deadline: 23:59 23/Sept/2018
