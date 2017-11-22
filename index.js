const remote = require('electron').remote
const main = remote.require('./main.js')



$(function(){

  const os = require('os')
  const prettyBytes = require('pretty-bytes')

  $('.stats').append('Numero de procesadores: <span>'+ os.cpus().length + '</span>')
  $('.stats').append('Memoria libre: <span>'+ prettyBytes(os.freemem()) + '</span>')

  const ul = $('.flipster ul');

  $.get('https://enupal.com/blog/rss',function(response){
    const rss = $(response)
    rss.find('item').each(function(){
      const item =$(this)
      const contenido = item.find('description').html().split('</a><div>')[0]+'</a></div>'

      const urlRegex = /(http|ftp|https)\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%amp;:/~\#]*[\w\-@?^=%amp;/~\+#])?/g
      const imageSource = contenido.match(urlRegex)[0];
      const li = $('<li><img /><a target="_blank"></a></li>')

      li.find('a').attr('href',item.find('link').text()).html('<br>'+ item.find('tittle').text())

      li.find('img').attr('src',imageSource)
      li.find('img').attr('width', 400)
      li.find('img').attr('height', 300)

      li.appendTo(ul)
    });

    $('.flipster').flipster({
      style:'carousel'
    });
  });
});
