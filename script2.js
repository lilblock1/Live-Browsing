function submit() {
    document.getElementById('content').innerHTML = '';
    var val = document.getElementById('search').value;
    var newElement = document.createElement('script');
    newElement.scr = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBgqTpHgS_akhX0-des2nGWBX42eiBoWsA&cx=938838ca299c6a840&q=${val}&callback=hndlr';
    newElement.id = "mainscript";
    document.body.appendChild(newElement);
}