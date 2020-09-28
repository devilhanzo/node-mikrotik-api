# node-mikrotik-api

Node Express Mikrotik RouterOS API<br>
<br>
Version 1.1.0<br>
<br>
Feature:<br>
-Login method are supported in versions above 6.45.1<br>
-Show Mikrotik RouterOS Interface IP Address<br>
-Find and Disconnect Mikrotik RouterOS Hotspot active users<br>
<br>

Install:<br>
1. Rename env.txt to .env
2. Change config in .env to your environment
3. Install package #npm install
4. Start server  #node ./bin/www
<br>
Usage:<br>
<br>
Method GET<br>
  <a href>http://localhost:50453</a>  API welcome page<br>
  <a href>http://localhost:50453/version</a>  Show API version<br>
  <a href>http://localhost:50453/ip/address</a>  List all ip address setup on interfaces<br>
  <a href>http://localhost:50453/ip/hotspot/active</a> List all hotspot active users<br>
  <a href>http://localhost:50453/ip/hotspot/active/find/puck</a>  Search hotspot active user by username "puck"<br>
  <a href>http://localhost:50453/ip/firewall/address-list</a> List all firewall address-list<br>
  <a href>http://localhost:50453/ip/firewall/address-list/find/445-Malware</a> Find address-list by list name "445-Malware"<br>
<br>
Method DELETE<br>
  <a href>http://localhost:50453/ip/hotspot/active/.id</a>  Disconnect hotspot active user by .id from search results of hotspot active user<br>
