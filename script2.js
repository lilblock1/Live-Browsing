

function submit() {
  document.getElementById('buttons').style.display = 'block';
  document.getElementById('content').innerHTML = '';
  var val = document.getElementById('search').value;
  var newelement = document.createElement('script');
  newelement.src = `https://www.googleapis.com/customsearch/v1?key=AIzaSyB06Unrbi3Dh3LH-Hbgsdm7qd9HIDWj7gE&cx=938838ca299c6a840&q=${val}&callback=hndlr`;
  newelement.id = 'mainscript';
  document.body.appendChild(newelement);
}

async function submitImages() {
  document.getElementById('content').innerHTML = '';
  var val = document.getElementById('search').value;
  var clientId = "4N8myJtDKWa_ka7K1sqV1Y5pcRXsDjJqL5J-tx0nTtk";
  var url = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${val}&per_page=30`;

  var promise = await fetch(url);
  var data = await promise.json();

  data.results.forEach(function(photo) {
    var result = `<img src=${photo.urls.regular} style="width: 200px; height: 133px; margin: 10px; vertical-align: top; object-fit: cover;">`;
    document.getElementById('content').innerHTML += result;
  })
}