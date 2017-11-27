# Gloryhole

Inspired by a horrible experience I walked in on while traveling in Australia, Gloryhole is an experiment to better acquaint myself with Webpack, Node Modules, and HTML5 video events.

## Getting Started

Gloryhole was built with the intention of being an all-inclusive project. One should be able to clone the project to their computer, install the dependencies, and run webpack to have a working demo project. I have included some basic steps to get the project working on your own, but if you are intending on actually using this for something; definitely take a look at the code to see what is really going on (/src/js/Gloryhole.js).

### Prerequisites

You will need:

1) **Git**

```
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
```

2) **Node.js**

```
https://nodejs.org/en/download/
```

3) **NPM (in the case is is gone or wasn't installed with Node.js)**

```
https://www.npmjs.com/get-npm
```

4) **Webpack**

```
https://webpack.js.org/
```

### Installing

Installing Gloryhole is pretty basic (thank you webpack). Check out the steps below:

Clone the project

```
git clone https://github.com/jessejessee/gloryhole.git
```

Navigate to to project via command line

```
cd /<path to cloned repo>/Gloryhole
```

Install project dependencies using NPM

```
npm install
```

Run Webpack config

```
npm run build
```

### Using Gloryhole on your own

With a few basic steps you can get yourself up and running with this simple API

**Load the code**
```
var Gloryhole = require('./gloryhole.js');
```

**Set the player**
```
var video = Gloryhole.setVideo(document.getElementById("video"));
```

**Create a playlist**
```
var playlist = [
	['/videos/0.ogg','/videos/0.mp4','/videos/0.webm'],
	['/videos/1.ogg','/videos/1.mp4','/videos/1.webm'],
	['/videos/2.ogg','/videos/2.mp4','/videos/2.webm']
];


Gloryhole.createPlaylist(playlist);
```

**Play the video**
```
Gloryhole.sneakAPeak();
```

## Deployment

If you would like to use this project in the wild, be sure to point your pubic root path to the build directory which is generated via Webpack (/dist)

## Built With

* [NPM](https://www.npmjs.com/get-npm) - Depedency management
* [Webpack](https://webpack.js.org/) - Asset Management

## Authors

* **JesseJessee** - *Concept/Developent* - [Hyperspace Homesite](https://jessejessee.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
