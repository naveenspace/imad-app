var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));




var planets = {
  
   'planet-one': {
    title: 'planet-one | naveen',
    heading: 'planet-one',
    
    content: `     <p>
            Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 88 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods.
        </p>
        
        
        
        <p>
            Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth. It is the smallest planet in the Solar System, with an equatorial radius of 2,439.7 kilometres.
        </p>`
},
   'planet-two': {
    title: 'planet-two | naveen',
    heading: 'planet-two',
    
    content: `     <p>
        My name is venus
        </p>`
        
}

};


function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate=`
  <html>
    <head>
 
 <title>
    ${title}
   </title>
        <meta name="viewport" content="width=device-width, intial=scale-1" />
    </head>    
    
<body>
        
    <div class="temp">
          
    
    <h1>
    ${heading}
    </h1>
     <div>
${content}

</div>


   </div>    
    </body>
    </html>

    
    `;

    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:planetName', function(req,res) {
    
  var planetName = req.params.planetName;
  res.send(createTemplate(planets[planetName]));
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
