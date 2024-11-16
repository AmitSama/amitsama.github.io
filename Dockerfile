FROM ruby:3.4-rc-alpine

ENV USER_HOME="/home/demo"

# Add super user demo without password
RUN apk update && \
    apk upgrade && \
    apk add --no-cache gcc g++ make sudo && \
	adduser -g demo --disabled-password demo && \
    echo "demo ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/demo && chmod 0440 /etc/sudoers.d/demo

USER demo

RUN cd /home/demo && \ 
	gem install jekyll bundler

CMD ["/bin/sh"]