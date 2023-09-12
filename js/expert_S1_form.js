$(function () {
    $('#uppc .upload_input').on("change", function () {
        if(this.files.length > 0) {
            $('#uppc .upload_img').attr("src", window.URL.createObjectURL(this.files[0]));
            $('#uppc .upload_content').addClass('hide');
            $('#uppc .upload_img').removeClass('hide');
        } 
    })

})

$(function () {
    $('#uppc1 .upload_input').on("change", function () {
        if(this.files.length > 0) {
            $('#uppc1 .upload_img').attr("src", window.URL.createObjectURL(this.files[0]));
            $('#uppc1 .upload_content').addClass('hide');
            $('#uppc1 .upload_img').removeClass('hide');
        } 
    })

})

$(function () {
    $('#uppc1-1 .upload_input').on("change", function () {
        if(this.files.length > 0) {
            $('#uppc1-1 .upload_img').attr("src", window.URL.createObjectURL(this.files[0]));
            $('#uppc1-1 .upload_content').addClass('hide');
            $('#uppc1-1 .upload_img').removeClass('hide');
        } 
    })

})


$(function () {
    $('#uppc1-2 .upload_input').on("change", function () {
        if(this.files.length > 0) {
            $('#uppc1-2 .upload_img').attr("src", window.URL.createObjectURL(this.files[0]));
            $('#uppc1-2 .upload_content').addClass('hide');
            $('#uppc1-2 .upload_img').removeClass('hide');
        } 
    })

})


$(function () {
    $('#uppc1-3 .upload_input').on("change", function () {
        if(this.files.length > 0) {
            $('#uppc1-3 .upload_img').attr("src", window.URL.createObjectURL(this.files[0]));
            $('#uppc1-3 .upload_content').addClass('hide');
            $('#uppc1-3 .upload_img').removeClass('hide');
        } 
    })

})

$(function () {
    $('#uppc3 .upload_input').on("change", function () {
        if(this.files.length > 0) {
            $('#uppc3 .upload_img').attr("src", window.URL.createObjectURL(this.files[0]));
            $('#uppc3 .upload_content').addClass('hide');
            $('#uppc3 .upload_img').removeClass('hide');
        } 
    })

})

$(function () {
    $('#uppc4 .upload_input').on("change", function () {
        if(this.files.length > 0) {
            $('#uppc4 .upload_img').attr("src", window.URL.createObjectURL(this.files[0]));
            $('#uppc4 .upload_content').addClass('hide');
            $('#uppc4 .upload_img').removeClass('hide');
        } 
    })

})

$(function () {
    $('#uppc5 .upload_input').on("change", function () {
        if(this.files.length > 0) {
            $('#uppc5 .upload_img').attr("src", window.URL.createObjectURL(this.files[0]));
            $('#uppc5 .upload_content').addClass('hide');
            $('#uppc5 .upload_img').removeClass('hide');
        } 
    })

})







// ---------公司表單彈出--------------
$(function(){

    $('input.company').click(function(){
      $('.companypopup').css('display', 'block');
    })
  
  
    $('input.person').click(function(){
        $('.companypopup').css('display', 'none');
      })
 
  })

$(function(){

$('#uppc1').click(function(){
    $('#uppc1-1').css('display','flex');
})


$('#uppc1-1').click(function(){
    $('#uppc1-2').css('display','flex');
})


$('#uppc1-2').click(function(){
    $('#uppc1-3').css('display','flex');
})



})



