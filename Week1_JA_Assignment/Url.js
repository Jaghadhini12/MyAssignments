let URL="http://leaftaps.com/opentaps/control/login"
let Spliturl = URL.split('/')
console.log(Spliturl)
console.log(Spliturl[3])
console.log(Spliturl[5])
console.log(URL.replace("login","main"))