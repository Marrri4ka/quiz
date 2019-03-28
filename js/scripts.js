$(document).ready(function(){
  var name;
  var gender;
  var hair;
  var personality;
  $('#btn1').click(function(){
    name = $('#name').val();
    gender = $('#gender-select').val();
    if(name === "" || gender === "Who do you like to date?") {
      $(".show").text("Both fields are required!");
      //$('.form-group').addClass('has-warning');
    } else {
      $(".show").text("");
      $('#form1').hide();
      $('#form2').show();
    }
  });

  $('#btn2').click(function(){
    personality = $("input:radio[name=personality]:checked").val();
    $('#form2').hide();
    $('#form3').show();
  });

  $('#btn3').click(function(){
  hair = $("input:radio[name=hair]:checked").val();
  $('#form3').hide();
  if(gender === 'Men') {
    if(hair === 'dark') {
      $('#hagrid').show();
    } else if (hair === 'blonde'){
      $('#draco').show();
    } else if (hair === 'red') {
      $('#ron').show();
    }
  }


  if(gender === 'Women') {
    if(hair === 'dark') {
      $('#cho').show();
    } else if (hair === 'blonde'){
      $('#luna').show();
    } else if (hair === 'red') {
      $('#hermione').show();
    }
  }

  if(gender === 'Anybody!') {
    if(hair === 'dark') {
      $('#cho').show();
      $('#hagrid').show();
      if(personality === 'shy') {
        $('#dobby').show();
      }
    } else if (hair === 'blonde'){
      $('#luna').show();
      $('#draco').show();
      if(personality === 'shy') {
        $('#dobby').show();
      }
    } else if (hair === 'red') {
      $('#hermione').show();
      $('#ron').show();
      if(personality === 'shy') {
        $('#dobby').show();
      }
    }
  }


  });



});
