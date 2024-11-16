# amitsama.github.io




# Stylish Portolio template for Jekyll

A Jekyll implementation of the [Stylish Portfolio](http://startbootstrap.com/template-overviews/stylish-portfolio/) template by [Start Bootstrap](http://startbootstrap.com/).

See the site in action at https://volny.github.io/stylish-portfolio-jekyll/

## To use the Stylish Portfolio template in your project

- Start by adding your info in `_config.yml`
- Add as many address lines as you want. Your address will also be used to show your location on the map.
- For the emdeded map to work you'll need to [get a key from Google Maps Embed API](https://developers.google.com/maps/documentation/embed/?hl=en)
- In `_layouts/front.html` reorder or remove section as you prefer.

## Build Docker image
- docker build -f _docker/Dockerfile -t amit0645/ruby:v1.0.0
- docker build . -f _docker/Dockerfile -t amit0645/ruby:v1.0.0

## Run Docker container
- docker run -p 4000:4000 -it --rm --name ruby_v1.0.0 amit0645/ruby:v1.0.0
- docker run --add-host=localhost=192.168.0.151 -it --rm --name ruby_v1.0.0 amit0645/ruby:v1.0.0

## Changing firewall rule - Not Working
- iptables -t nat -A OUTPUT -o lo -p tcp --dport 80 -j REDIRECT --to-port 4000
- iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 4000

## Running jekyll with url
- bundle exec jekyll serve --livereload --open-url http://192.168.0.151:4000/
- jekyll serve --livereload --open-url http://192.168.0.151:4000/
- jekyll serve --host 0.0.0.0 #works using Bcast