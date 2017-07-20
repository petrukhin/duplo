# SSL tunnel for remote debugging

install ngrock from https://ngrok.com/

install vorlon

    npm i -g vorlon

run vorlon

    # server 1337 / client 5050
    vorlon

open tunnel for vorlon proxy server

    # https://vorlon-server.ngrok.io -> localhost:1337
    ./ngrock http 1337

open vorlon tools

    open https://vorlon-server.ngrok.io

copy&pate link to weinre client script tunneled by ngrock

    <script src="https://vorlon-server.ngrok.io/vorlon.js"></script>

run http-server on localhost

    http-server -p 8080

open tunnel for http-server

    # https://app.ngrok.io -> localhost:8080
    ./ngrock http 8080

open https://app.ngrok.io on any device