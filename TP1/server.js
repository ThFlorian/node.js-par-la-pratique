const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const node_env = 'dev'
const port = Math.floor(Math.random() * (3000 - 4000)) + 3000
const randomPort = getRandomArbitrary(3000, 4000)

function getRandomArbitrary(min, max) {​​​​
    return Math.floor(Math.random() * (max - min + 1)) + min;
}​​​​

app.get('/ping', (req, res) =>  {​​
    tcpPortUsed.check(portCounter, '127.0.0.1')
        .then(function(inUse) {​​
            while(!inUse && portCounter != randomPort){​​
                portCounter++;
                console.log('port vérifier : ', portCounter)
            }​​
            console.log('Le port ' + portCounter + ' est utilisé ');
        }​​, function(err) {​​
            console.error('Erreur :', err.message);
    }​​)
    res.status(200).json("pong")
}​​)

app.listen(port, () => {
      console.log(`listening on port ${port} in ${node_env} mode`)
  })


