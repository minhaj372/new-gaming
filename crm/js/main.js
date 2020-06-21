// pagination
window.onload = function(){
    var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
    $('.cdp_i').on('click', function(){
      var go = $(this).attr('href').replace('#!', '');
      if (go === '+1') {
        paginationPage++;
      } else if (go === '-1') {
        paginationPage--;
      }else{
        paginationPage = parseInt(go, 10);
      }
      $('.cdp').attr('actpage', paginationPage);
    });   
  };
// floating button
$(document).ready(function(){
  $('.zoomBtn').click( function(e) {
      e.preventDefault(); // stops link from making page jump to the top
      e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
      $('.zoom-card').toggle();     
  });
  $( ".zoomBtn" ).click(function() {
    $( this ).toggleClass( "highlights" );
  });
  $('body').click( function() {     
      $('.zoom-card').hide();
      $( ".zoomBtn" ).removeClass('highlights'); 
  });

  // floaTING active
  $('.zoom-card ul:first li' ).on( 'click', function() {
    $( this ).parent().find( 'li.active' ).removeClass( 'active' );
    $( this ).addClass( 'active' );
});
// for s
});


// toltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

// Click to remove 
$(document).ready(function(){
    // setting.html
  $("#remove1").click(function(){
    $(".recruiment-frm").remove();
  });
  // setting.html
  $("#remove2").click(function(){
    $(".recruiment-frm-1").remove();
  });
  // viewjob.html
  $("#remove3").click(function(){
    $("#card-1").remove();
  });
});

// click to reset form -- Employee
$(document).ready(function(){
  $(".reset-btn").click(function(){
    confirm("Press a button!");
      $("#employee-frm").trigger("reset");
  });
});
$(document).ready(function(){
// click to edit
$('#edit').on('click', function() {
  if ($(this).hasClass('save')) {
    alert("Are You Sure to Saved!!!");
    $(this).text("Edit Profile").removeClass('save');
    $('.edit').prop("disabled", true);
    $( ".avatar-edit" ).hide();
    $('.edit').prop('title', 'Click to Edit Profile');
    $('.edit').attr('contenteditable', 'false').css({
      'box-shadow':'none',
      'outline': 'none',
      'cursor': 'not-allowed',
    });
  } else {
    $(this).text("Save").addClass('save');
    $('.edit').prop("disabled", false);
    $( ".avatar-edit" ).show();
      $(".edit").removeAttr("title");
    $('.edit').attr('contenteditable', 'true').css({
      'box-shadow': 'rgb(224, 224, 224) 0px 2px 5px 1px',
      'cursor': 'initial',
      'outline': 'none'
    }).focus();
  }
});
// click to edit setting > general

$('.edit-2').prop("disabled", true);
$('.edit-2').attr('contenteditable', 'false').css({
  'cursor': 'not-allowed',
});
$('.box-btn').attr('contenteditable', 'false').css({
  'cursor': 'not-allowed',
});
$('.edit-2').prop('title', 'Click to Edit Profile');
$('#edit-2').on('click', function() {
  if ($(this).hasClass('save')) {
    alert("Are You Sure to Saved!!!");
    $(this).text("Edit Profile").removeClass('save');
    $('.edit-2').prop("disabled", true);
    $( ".box-btn" ).prop( "disabled", true );
    $( ".avatar-edit" ).hide();
    $('.edit-2').prop('title', 'Click to Edit Profile');
    $('.box-btn').attr('contenteditable', 'false').css({
      'cursor': 'not-allowed',
    });
    $('.edit-2').attr('contenteditable', 'false').css({
      'border': 'none',
      'outline': 'none',
      'cursor': 'not-allowed',
      'box-shadow':'none',
    });
  } else {
    $(this).text("Save").addClass('save');
    $('.edit-2').prop("disabled", false);
    $( "button" ).prop( "disabled", false );
    $( ".avatar-edit" ).show();
      $(".edit-2").removeAttr("title");
      $('.box-btn').attr('contenteditable', 'false').css({
        'cursor': 'initial',
      });
    $('.edit-2').attr('contenteditable', 'true').css({
      'box-shadow': 'rgb(224, 224, 224) 0px 2px 5px 1px',
      'cursor': 'initial',
      'outline': 'none'
    }).focus();
  }
});
});

// image upload with preview
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          $('#imagePreview').css('background-image', 'url('+e.target.result +')');
          $('#imagePreview').hide();
          $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function() {
  readURL(this);
});
// Dynamic custom dropdown > job.html
$(document).ready(function() {
  $(".dynamicDropdown").select2({
    tags: true
  });
  $(".select2-selection--single").css("display", "none");
  $("#btn-add-state").on("click", function(){
    var dynamicDropdownInputVal = $(".dynamicDropdownInput").val();
    // Set the value, creating a new option if necessary
    if ($(".dynamicDropdown").find("option[value='" + dynamicDropdownInputVal + "']").length) {
      $(".dynamicDropdown").val(dynamicDropdownInputVal).trigger("change");
    } else { 
      // Create the DOM option that is pre-selected by default
      var dynamicDropdownInput = new Option(dynamicDropdownInputVal, dynamicDropdownInputVal, true, true);
      // Append it to the select
      $(".dynamicDropdown").append(dynamicDropdownInput).trigger('change');
    } 
  });  
});


// Dynamic custom dropdown > setting.html
$(document).ready(function() {
  $(".dynamicDropdownSetting").select2({
    tags: true
  });
  $(".select2-selection--single").css("display", "none");
  $("#btn-add-stat").on("click", function(){
    var dynamicDropdownInputSettingVal = $(".dynamicDropdownInputSetting").val();
    // Set the value, creating a new option if necessary
    if ($(".dynamicDropdownSetting").find("option[value='" + dynamicDropdownInputSettingVal + "']").length) {
      $(".dynamicDropdownSetting").val(dynamicDropdownInputVal).trigger("change");
    } else { 
      // Create the DOM option that is pre-selected by default
      var dynamicDropdownInputSetting = new Option(dynamicDropdownInputSettingVal, dynamicDropdownInputSettingVal, true, true);
      // Append it to the select
      $(".dynamicDropdownSetting").append(dynamicDropdownInputSetting).trigger('change');
    } 
  });  
});

// Reload
function Reset() {
  var dropDown = document.getElementById("fieldName4Setting");
  dropDown.selectedIndex = 0;
}

// radio button menu custom appending job+setting.html
function monthlytimesheets()
{
	var name = $('#monthYearPicker').val();
  $('#radio-cstm').append('<li class="custom-radio-list"><input type="radio" name="radio" /> <label for="">' +name +' </label> </li>');
} 
function monthlytimesheetstwo()
{
	var name = $('#monthYearPicker').val();
  $('#radio-cstm2').append('<li class="custom-radio-list"><input type="radio" name="radio" /> <label for="">' +name +' </label> </li>');
}
// Modal reset
$(document).ready(function() {
  $('#modalDropdown').on('hidden.bs.modal', function () {
    $('#modalDropdown').find('input').val('');
    $('#modalDropdown').find(("select option")).each(function() {
      if ($(this).val() != '') {
        $(this).remove();
      }
    });
  });
  $('#modalText').on('hidden.bs.modal', function () {
    $('#modalText').find('input').val('');
  });
  $('#modalRadio').on('hidden.bs.modal', function () {
    $('#modalRadio').find('input').val('');
  });
  $('#modalNumber').on('hidden.bs.modal', function () {
    $('#modalNumber').find('input').val('');
  });
  $('#modalDate').on('hidden.bs.modal', function () {
    $('#modalDate').find('input').val('');
  });
  $('#modalPhone').on('hidden.bs.modal', function () {
    $('#modalPhone').find('input').val('');
  });
$("#state").select2({
tags: true
});  
});

