> [!NOTE]
> Remember to link (with a link or a network) both nginx container and nodejs container in order them to work. If you are using a docker-compose file of version 3 the links will be automatically created by the bridge network.

# Creating a new image out of a container without a Dockerfile

### Copying files between file nginx container and Desktop (Docker host)

First we are getting a copy of

```sh
docker cp nginxproxy:/etc/nginx/conf.d/default.conf ~/Desktop/default.conf
```

After doing the required changes we can can save the local file, and then replace the file inside the container with it

```sh
docker cp ~/Desktop/default.conf nginxproxy:/etc/nginx/conf.d/
```

We can validate and test nginx after the changes. (Testing to check whether the nginx command works inside the container)

```sh
docker exec nginxproxy nginx -t
```

Now, to see the changes we are going to reload the nginx inside the nginx container.

```sh
docker exec nginxproxy nginx -s reload
```

## Copying the docker-compose file into the AWS ec2 instance

First we need to setup the ec2 instance by installing docker and docker-compose.
[ Click here](https://tejaksha-k.medium.com/how-to-install-docker-and-docker-compose-to-ubuntu-20-04-azure-vm-and-aws-ec2-instances-72a498755c15)

Open the terminal from the folder where the pem file is, and copy the local file to the ec2 instance using a command similar to the below command.

```sh
 scp -i "docker.pem" /Users/janudabethmin/Desktop/nginx-container-in-aws/docker-compose.yml  ubuntu@ec2-3-82-220-118.compute-1.amazonaws.com:/home/ubuntu/
```
