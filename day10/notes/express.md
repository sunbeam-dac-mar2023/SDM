### expressjs

- package developed in JS on top of nodejs to provide web server implementation
- to install / download the express 

  ```bash

    npm init 

    npm install express --save
  ```

- **npm**
  - node package manager
  - a utility to manage the packages developed for nodejs
  - can be used for
    - installing packages
    - upgrading packages
    - updating packages
    - uinstalling packages
  - arguments
    - init: used to initialize the package.json
    - install: used to install a package
  

#### a basic express application

```js

  // require the express package
  const express = require('express')

  // create a server instance
  const app = express()

  // listen on port 3000 (start the server)
  app.listen(3000, '0.0.0.0', () => {
    console.log('server started on port 3000')
  })

```

#### route

- mapping of http method, url and handler (function)
- e.g.

  ```js

    // this route will be invoked when the request
    // contains http method GET and url as '/'
    app.get('/', (request, response) => {
        // code here to process the request
        response.end()
    })

    // this route will be invoked when the request
    // contains http method POST and url as '/'
    app.post('/', (request, response) => {
        // code here to process the request
        response.end()
    })

  ```