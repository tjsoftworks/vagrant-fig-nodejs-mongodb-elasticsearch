

Kickstart your next Nodejs-Express-Mongodb-Elasticsearch project with Docker and Fig.

Works on every OS where you can install Vagrant ( Windows, Mac and Linux )

Just work through the Getting Started section and you are good to go !


Getting Started
---------------

First of all, download and install the enabling software

Vagrant :
```
https://www.vagrantup.com/downloads
```

Virtualbox:
```
https://www.virtualbox.org/wiki/Downloads
```

Clone the repo and vagrant up

```bash
git clone https://github.com/kristofsajdak/vagrant-fig-nodejs-mongodb-elasticsearch
cd vagrant-fig-nodejs-mongodb-elasticsearch/provision
vagrant up
```

ssh into the machine, install npm dependencies and fig up
```bash
vagrant ssh
cd /src/provision && fig run web npm install && fig up -d
```

Express running on Nodejs :
```
http://192.168.50.4:8080/
```

node-inspector:
```
http://192.168.50.4:8081/debug
```

logs:
```
http://192.168.50.4:8080/logs/
```

Elasticsearch:
```
http://192.168.50.4:9200
```

Ad-hoc commands
---------------

ssh into the Vagrant box
```bash
vagrant ssh
```

cd into the /src/provision directory ( where the fig.yml, supervisord.conf and Dockerfiles live )
```bash
cd /src/provision
```

Launch some often required ad-hoc commands
```bash

fig run web npm prune
fig run web npm install

fig run db /bin/sh -c "mongo 192.168.50.4:27017"

```
