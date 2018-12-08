![Logo](https://github.com/tibrahul/Mongo-Docker/blob/master/docs/GeppettoIcon.png?raw=true"Logo")

# Docker with Mongo<br/>
 In this section we will how to connect your node application with mongo container.
 
# Content<br/>
 1. [Prerequisites](#prerequisites)
 
 
# Prerequisites<br/> 
  [Install docker](https://docs.docker.com/install/)
  
 
# Mongo Installation<br/>
   Mongo is Database which can be used to store your data. In here i am going to containerize Mongo DB in docker with volumes and show how to connect it with you node application.
   
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
            "Name": "/mongofirst",
            "RestartCount": 0,
            "Driver": "aufs",
            "Platform": "linux",
            "MountLabel": "",
            "ProcessLabel": "",
            "AppArmorProfile": "docker-default",
            "ExecIDs": null,
            "HostConfig": {
                "Binds": [
                    "/home/tendecoders/Desktop/NodeMongoose/data:/data/db:rw"
                ],
                "ContainerIDFile": "",
                "LogConfig": {
                    "Type": "json-file",
                    "Config": {}
                },
                "NetworkMode": "nodemongoose_default",
                "PortBindings": {
                    "27017/tcp": [
                        {
                            "HostIp": "",
                            "HostPort": ""
                        }
                    ]
                },
                "RestartPolicy": {
                    "Name": "",
                    "MaximumRetryCount": 0
                },
                "AutoRemove": false,
                "VolumeDriver": "",
                "VolumesFrom": [],
                "CapAdd": null,
                "CapDrop": null,
                "Dns": null,
                "DnsOptions": null,
                "DnsSearch": null,
                "ExtraHosts": null,
                "GroupAdd": null,
                "IpcMode": "shareable",
                "Cgroup": "",
                "Links": null,
                "OomScoreAdj": 0,
                "PidMode": "",
                "Privileged": false,
                "PublishAllPorts": false,
                "ReadonlyRootfs": false,
                "SecurityOpt": null,
                "UTSMode": "",
                "UsernsMode": "",
                "ShmSize": 67108864,
                "Runtime": "runc",
                "ConsoleSize": [
                    0,
                    0
                ],
                "Isolation": "",
                "CpuShares": 0,
                "Memory": 0,
                "NanoCpus": 0,
                "CgroupParent": "",
                "BlkioWeight": 0,
                "BlkioWeightDevice": null,
                "BlkioDeviceReadBps": null,
                "BlkioDeviceWriteBps": null,
                "BlkioDeviceReadIOps": null,
                "BlkioDeviceWriteIOps": null,
                "CpuPeriod": 0,
                "CpuQuota": 0,
                "CpuRealtimePeriod": 0,
                "CpuRealtimeRuntime": 0,
                "CpusetCpus": "",
                "CpusetMems": "",
                "Devices": null,
                "DeviceCgroupRules": null,
                "DiskQuota": 0,
                "KernelMemory": 0,
                "MemoryReservation": 0,
                "MemorySwap": 0,
                "MemorySwappiness": null,
                "OomKillDisable": false,
                "PidsLimit": 0,
                "Ulimits": null,
                "CpuCount": 0,
                "CpuPercent": 0,
                "IOMaximumIOps": 0,
                "IOMaximumBandwidth": 0,
                "MaskedPaths": [
                    "/proc/acpi",
                    "/proc/kcore",
                    "/proc/keys",
                    "/proc/latency_stats",
                    "/proc/timer_list",
                    "/proc/timer_stats",
                    "/proc/sched_debug",
                    "/proc/scsi",
                    "/sys/firmware"
                ],
                "ReadonlyPaths": [
                    "/proc/asound",
                    "/proc/bus",
                    "/proc/fs",
                    "/proc/irq",
                    "/proc/sys",
                    "/proc/sysrq-trigger"
                ]
            },
            "GraphDriver": {
                "Data": null,
                "Name": "aufs"
            },
            "Mounts": [
                {
                    "Type": "bind",
                    "Source": "/home/tendecoders/Desktop/NodeMongoose/data",
                    "Destination": "/data/db",
                    "Mode": "rw",
                    "RW": true,
                    "Propagation": "rprivate"
                },
                {
                    "Type": "volume",
                    "Name": "c95292fe190c8563e1f73a313a93598471413b5d09dbdc9e7d9066bfb24a5656",
                    "Source": "/var/lib/docker/volumes/c95292fe190c8563e1f73a313a93598471413b5d09dbdc9e7d9066bfb24a5656/_data",
                    "Destination": "/data/configdb",
                    "Driver": "local",
                    "Mode": "",
                    "RW": true,
                    "Propagation": ""
                }
            ],
            "Config": {
                "Hostname": "46cb45972920",
                "Domainname": "",
                "User": "",
                "AttachStdin": false,
                "AttachStdout": false,
                "AttachStderr": false,
                "ExposedPorts": {
                    "27017/tcp": {}
                },
                "Tty": false,
                "OpenStdin": false,
                "StdinOnce": false,
                "Env": [
                    "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                    "GOSU_VERSION=1.10",
                    "JSYAML_VERSION=3.10.0",
                    "GPG_KEYS=DFFA3DCF326E302C4787673A01C4E7FAAAB2461C \t42F3E95A2C4F08279C4960ADD68FA50FEA312927",
                    "MONGO_PACKAGE=mongodb-org",
                    "MONGO_REPO=repo.mongodb.org",
                    "MONGO_MAJOR=3.2",
                    "MONGO_VERSION=3.2.21"
                ],
                "Cmd": [
                    "mongod"
                ],
                "ArgsEscaped": true,
                "Image": "mongo:3.2",
                "Volumes": {
                    "/data/configdb": {},
                    "/data/db": {}
                },
                "WorkingDir": "",
                "Entrypoint": [
                    "docker-entrypoint.sh"
                ],
                "OnBuild": null,
                "Labels": {
                    "com.docker.compose.config-hash": "d5efe6fd94bab4b5f8e9fe00f7fbcf48821c34c0bbcebd8ae562724ecce6db67",
                    "com.docker.compose.container-number": "1",
                    "com.docker.compose.oneoff": "False",
                    "com.docker.compose.project": "nodemongoose",
                    "com.docker.compose.service": "mongodb",
                    "com.docker.compose.version": "1.22.0"
                }
            },
            "NetworkSettings": {
                "Bridge": "",
                "SandboxID": "af472f4f3f13a4ded2d44a536e6713597f5504419a0f50c1dc3e97e2f61c0601",
                "HairpinMode": false,
                "LinkLocalIPv6Address": "",
                "LinkLocalIPv6PrefixLen": 0,
                "Ports": {
                    "27017/tcp": [
                        {
                            "HostIp": "0.0.0.0",
                            "HostPort": "32771"
                        }
                    ]
                },
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


