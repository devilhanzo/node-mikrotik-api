# node-mikrotik-api

Node Express Mikrotik API
Version 1.1.0
<br>
Feature:<br>
-Show Mikrotik Interface IP Address<br>
-Find and Disconnect Mikrotik Hotspot active users<br>

Method GET<br>
http://localhost:50453/ip/address List all ip address setup on interfaces<br>
http://localhost:50453/ip/hotspot/active List all hotspot active users<br>
http://localhost:50453/ip/hotspot/active/find/puck Find hotspot active user by username "puck"<br>
<br>
Method DELETE<br>
http://localhost:50453/ip/hotspot/active/*ID Disconnect hotspot active user by *ID of result of finding hotspot active user<br>
<br>

Install:<br>
1. Rename env.txt to .env
2. Change config in .env to your environment
3. Install package #npm install
4. Start server  #node ./bin/wwww
