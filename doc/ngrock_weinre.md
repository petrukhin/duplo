# SSL tunnel for remote debugging

install ngrock from https://ngrok.com/

install weinre

    npm -g install weinre

run weinre

    weinre --httpPort 9999

open tunnel for weinre

    # https://weinre-server.ngrok.io -> localhost:9999
    ./ngrock http 9999

open weinre tools

    open https://weinre-server.ngrok.io

copy&pate link to weinre client script tunneled by ngrock

    <script src='https://weinre-server.ngrok.io/target/target-script-min.js#anonymous'></script>

run http-server on localhost

    http-server -p 8080

open tunnel for http-server
    # https://app.ngrok.io -> localhost:8080
    ./ngrock http 8080

open https://app.ngrok.io on any device