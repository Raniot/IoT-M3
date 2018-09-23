# IoT - Milestone 3: Storing & Retrieving
## Desciption
This is the third Milestone assigment in the course "E18 - Building the Internet of Things with P2P and Cloud Computing"

## How is the image build?
An automatic build pipeline has been setup, which builds the image on a raspberry Pi and push it to Docker Hub.
The image of this repo is pushed to: https://hub.docker.com/r/raniot/storingretrieving

#### Requirements:
- A raspberry pi with docker installed
- The raspberry pi should be wired as shown below.

**Obs: There is a change to the wiring from the image!!!**

The wiring is setup using the text in the image, so the components are getting the correct voltage.

![alt text](https://github.com/Raniot/IoT-M2/blob/master/img/RaspberryGPIOSetup.png "Raspberry GPIO Setup")

#### To run the image run: 
- docker pull raniot/storingretrieving:latest
- docker run --privileged --env SIMULATE=true raniot/storingretrieving:latest (SIMULATE's default value is true set to false for run on rpi)
- Access https://raniot.github.io/?key=gImsuBhfnK8yITBIc7aUMv4b3nTWnloMpdI4B4ykNiZMqhTW5AUR7bFtl6xUc7iiEFc4y9FSJWvRASGD&thngId=U5HdPyHe42EQMeRwRkTFKFbd

#### To see the exposed site:
https://raniot.github.io/?key=gImsuBhfnK8yITBIc7aUMv4b3nTWnloMpdI4B4ykNiZMqhTW5AUR7bFtl6xUc7iiEFc4y9FSJWvRASGD&thngId=U5HdPyHe42EQMeRwRkTFKFbd

OBS: Lets hope no one abuse these keys before it has been tested :Deadline
Eveythng have an idea that they should lock our account whenever we use their service to much in a day, this has happende 2 times while setting it up. Lets hope, when we are no longer using simulations this will not be a problem.


## Milestone Description
### Milestone 3: Storing & Retrieving
The purpose of this milestone is to hook up your system, through MQTT, to cloud storage.

Create a storage component, hosted on a public accessible cloud server that can retrieve sensor data from your RPi over MQTT. You are encouraged to both try using [EVRYTHNG](https://evrythng.com/) as well as rolling your own solution in order to get a handle on the practicalities of building your own.

Your Docker image on the RPi should, upon start, connect to a MQTT broker running on your cloud server.

Your cloud instance should also host a Web page that retrieves and displays the collected data, as well as enabling control of LEDs on the RPi.

See [the Resources page](https://users-cs.au.dk/bouvin/dBIoTP2PC/2018/resources/#mqtt) for information on getting started with MQTT and cloud services.

You should keep your own RPi running, so that we, by running your code on our RPis, can see several RPis in action.

Your system should ideally contain a Dockerfile that can be built and started on a (sensor connected) RPi, as well as Dockerfiles for your cloud side components.

It is your responsibility that your cloud components are running.

You should deliver either a zip-file, or, better, a file consisting of the necessary git command to clone your repository.

There should be a README.md file in the root with instructions, as well as documentation of the REST endpoints and the possible HTTP they can support.

Add 'au589905' as a user to your group on GitLab, so that Michal can access your code.

Deadline: 23:59 23/Sept/2018
