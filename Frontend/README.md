# Build: 

$ `docker build -t nginx-thing .`

# Run:

$ `docker run -it --rm -d -p 8080:80 --name web nginx-thing`

# Stop:

$ `docker stop [container id]`