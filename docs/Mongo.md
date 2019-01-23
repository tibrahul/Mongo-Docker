![Logo](https://github.com/tibrahul/Mongo-Docker/blob/master/docs/GeppettoIcon.png?raw=true"Logo")

# Docker with Mongo<br/>
 In this section we will how to connect your node application with mongo container and check it with Studio 3T IDE software.
 
# Content<br/>
 1. [Prerequisites](#prerequisites)
 1. [Mongo](#mongo-installation)
 1. [Docker Compose File](https://github.com/tibrahul/Mongo-Docker/blob/master/docker-compose.yml)
 
 
# Prerequisites<br/> 
  [Install docker](https://docs.docker.com/install/)<br/>
  [Install MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)<br/>
  [Install Studio3T](https://studio3t.com/download/)
 
# Mongo Installation<br/>
   Mongo is Database which can be used to store your data. In here i am going to containerize Mongo DB in docker with volumes and show how to connect it with you node application.
   # Dan Edits<br/>
   these are place holders that Dan created - still need help from Rahul
   [instaling via docker contianer](https://www.tutorialspoint.com/docker/docker_setting_mongodb.htm)
   [basic commands](https://dzone.com/articles/top-10-most-common-commands-for-beginners)
   [listing collections](https://docs.mongodb.com/manual/reference/command/listCollections/)
   
### Setup Mongo in Docker
   To run this you need to first pull the image from the Docker hub by using this command.
   
      docker run --name some-mongo -d mongo:tag
   
   Here the tag is used for mentioning the version which you want to use. Once that is done you can verify by giving this command
   
      docker ps -a
   
   to check if your container is up and running. Once you have confirmed that you need to connect this mongo DB to your node application. In here i have written a docker compose file with volumes and put it inside my project folder.
   
   And in my config file i have written the path which to connect with the mongo DB. 
   
        'url':'mongodb://172.19.0.2:27017/Student_db'
        
   In the above url you will note that i have given a IP address **172.19.0.2** which is the mongo containers IP Address. To get this you need to give this command.
   
      docker inspect <ConatinerId or Containername>
      
 You will see something like this 
      
      [
        {
            "Id": "46cb45972920d0e47dde65f8043cff21973c8b50fc297ea42b46de96469e450e",
            "Created": "2018-12-08T06:13:02.414140309Z",
            "Path": "docker-entrypoint.sh",
            "Args": [
                "mongod"
            ],
            "State": {
                "Status": "running",
                "Running": true,
                "Paused": false,
                "Restarting": false,
                "OOMKilled": false,
                "Dead": false,
                "Pid": 3962,
                "ExitCode": 0,
                "Error": "",
                "StartedAt": "2018-12-08T06:13:04.999972749Z",
                "FinishedAt": "0001-01-01T00:00:00Z"
            },
            "Image": "sha256:fb885d89ea5c35ac02acf79a398b793555cbb3216900f03f4b5f7dc31e595e31",
            "ResolvConfPath": "/var/lib/docker/containers/46cb45972920d0e47dde65f8043cff21973c8b50fc297ea42b46de96469e450e/resolv.conf",
            "HostnamePath": "/var/lib/docker/containers/46cb45972920d0e47dde65f8043cff21973c8b50fc297ea42b46de96469e450e/hostname",
            "HostsPath": "/var/lib/docker/containers/46cb45972920d0e47dde65f8043cff21973c8b50fc297ea42b46de96469e450e/hosts",
            "LogPath": "/var/lib/docker/containers/46cb45972920d0e47dde65f8043cff21973c8b50fc297ea42b46de96469e450e/46cb45972920d0e47dde65f8043cff21973c8b50fc297ea42b46de96469e450e-json.log",
            ...............
            
                "SandboxKey": "/var/run/docker/netns/af472f4f3f13",
                "SecondaryIPAddresses": null,
                "SecondaryIPv6Addresses": null,
                "EndpointID": "",
                "Gateway": "",
                "GlobalIPv6Address": "",
                "GlobalIPv6PrefixLen": 0,
                "IPAddress": "",
                "IPPrefixLen": 0,
                "IPv6Gateway": "",
                "MacAddress": "",
                "Networks": {
                    "nodemongoose_default": {
                        "IPAMConfig": null,
                        "Links": null,
                        "Aliases": [
                            "mongodb",
                            "46cb45972920"
                        ],
                        "NetworkID": "d385b318569bee4f189d02ac015203cab8e403a982aae63f88a5870bb784fd6a",
                        "EndpointID": "260b7dd9620815e213f44e4f7078c1d25595709eb0ab2ae65893a9a157569b50",
                        "Gateway": "172.19.0.1",
                        "IPAddress": "172.19.0.2",
                        "IPPrefixLen": 16,
                        "IPv6Gateway": "",
                        "GlobalIPv6Address": "",
                        "GlobalIPv6PrefixLen": 0,
                        "MacAddress": "02:42:ac:13:00:02",
                        "DriverOpts": null
                    }
                }
            }
        }
    ]
    
 In above content you will see **"IPAddress": "172.19.0.2"** you need to take this IP address and put it in the url path which i have mentioned above.
 
Once you have done this you can try whatever action you need to via the api and check the Mongo DB to see whether your data is stored.

![Mongo](https://github.com/tibrahul/Mongo-Docker/blob/master/docs/Selection_075.png?raw=true"Mongo")


