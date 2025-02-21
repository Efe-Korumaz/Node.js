const QRCode = require("qrcode")


let content = 
{
    name: "my glorious king Lebron James",
    job: "een goat zijn"
}

//zet data om naar een string
let stringData = JSON.stringify(content);

//print qrcode naar terminal
QRCode.toString(stringData,{type:'terminal'},function (err, QRcode)
{
    //foutmelding
    if(err) return console.log('er is iets misgegaan')
        //print qr-code in terminal
        console.log(QRcode)
})

QRCode.toDataURL(stringData, function(err, QRcode)
{
    if(err) return console.log("er is iets kut")
        console.log(QRcode)
})

