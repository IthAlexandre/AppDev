$(document).ready(function() {
  defineFunctions();
});

function defineFunctions() {
  $('#connexion-form').submit(function(event) {
    var login = $('#login').val();
    var password = $('#password').val();
    connexion(login, password);

    return false;
  });

  $('#localisation').on('pageshow', function(event, ui) {
    initializeMap();
  });

  $('#choice').on('pageshow', pageChoice);
}

function connexion(login, password) {
  $.ajax({
    type: 'POST', // methode de transmission des données au fichier php
    url: 'connexion.php', // url du fichier php
    data: 'login=' + login + '&password=' + password, // données à transmettre
    success: function(msg) {
      if (msg == 1) {
        $.mobile.changePage('#accueil');
      } else {
        return false;
      }
    },
  });
}

function initializeMap() {
  //on note la position du lieu a afficher
  var center = new google.maps.LatLng(48.846315, 2.263625);

  //on initialise la carte
  var map_ = document.getElementById('map');
  var options = {
    zoom: 17,
    center: center,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  //on charge la carte
  var map = new google.maps.Map(map_, options);
}

function pageChoice() {
  var cardCurrent;
  var cardNext;
  displayCard();
}

function displayCard(card) {
  // var html = '<div class="card"><div class="card-header ui-grid-solo"></div><div class="card-content ui-grid-solo"></div><div class="card-footer ui-grid-b"></div></div>';
  // $('#cards').html(html);
}
