# node-mikrotik-api

Node Express Mikrotik API<br>
<br>
Version 1.1.0<br>
<br>
Feature:<br>
-Login method are supported in versions above 6.45.1<br>
-Show Mikrotik Router Interface IP Address<br>
-Find and Disconnect Mikrotik Router Hotspot active users<br>
<br>

Install:<br>
1. Rename env.txt to .env
2. Change config in .env to your environment
3. Install package #npm install
4. Start server  #node ./bin/wwww
<br>
Usage:<br>
Method GET<br>
  <a href>http://localhost:50453</a>  API welcom page<br>
  <a href>http://localhost:50453/version</a>  Show api version<br>
  <a href>http://localhost:50453/ip/address</a>  List all ip address setup on interfaces<br>
  <a href>http://localhost:50453/ip/hotspot/active</a> List all hotspot active users<br>
  <a href>http://localhost:50453/ip/hotspot/active/find/puck</a>  Find hotspot active user by username "puck"<br>
<br>
Method DELETE<br>
  <a href>http://localhost:50453/ip/hotspot/active/*ID</a>  Disconnect hotspot active user by *ID of result of finding hotspot active user<br>
