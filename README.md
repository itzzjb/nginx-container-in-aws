> [!NOTE]
> Remember to link (with a link or a network) both nginx container and nodejs container in order them to work.

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
