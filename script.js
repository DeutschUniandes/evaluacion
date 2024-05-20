$(document).ready(function() {
  var Items = [
    "Flexibilidad", "Falta de flexibilidad", "Falta de Paciencia", "claridad en las reglas",
    "Preparación Clase", "Trato", "Instrucciones de clase", "entretenida", "preferencias",
    "Reglas claras", "Percepción de Falta de", "Incumplimiento Clase", "Instrucciones claras",
    "Impaciencia", "monótona", "empatía", "Variedad", "Cumplimiento", "respeto", "Creatividad",
    "Empatía", "Respeto en la interacción", "Clase principalmente frontal", "Clase con diferentes estilos de socialización",
    "Calificación eficiente", "Calificación deficiente", "Capacidad de adaptación", "Entusiasmo",
    "Falta de entusiasmo", "Falta de exigencia", "Demasiada exigencia", "Impuntualidad", "Comunicación efectiva",
    "Trabajo sólo con el libro", "Puntualidad"
  ];

  var firstHalfColor = '#800080'; // Purple color
  var secondHalfColor = '#81F7F3'; // Original color

  $.each(Items, function(i) {
    var color = i < Items.length / 2 ? firstHalfColor : secondHalfColor;
    $('#Holder').append("<div id='" + i + "' class='draggable' style='background-color:" + color + ";'>" + Items[i] + "</div>");
    $('#' + i).draggable();
  });

  $('#resetButton').click(function() {
    $.each(Items, function(i) {
      $('#' + i).animate({ top: 0, left: 0 }, 'fast');
    });
  });
});
