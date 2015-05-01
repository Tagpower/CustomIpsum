// Handle button behavior
$('.button').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
});

// Form validation and form behavior
$('#params').form({
    paragraphs: {
        identifier : 'paragraphs',
        rules: [
            {
                type   : 'integer',
                prompt : 'Il va me falloir un nombre là par contre...'
            },
            {
                type   : 'maxLength[2]',
                prompt : 'Un peu trop grand là... that\'s what she said'
            }
        ]
    },
},
{
    onSuccess: submitForm
});

// Handle form on success
function submitForm(){
    alert('I am here');

    var v = getVersion();
    var p = $('#params').form('get field', 'paragraphs').val();
    
    generateLorem(v, p);
}

// Generate the ipsum
function generateLorem(v, p){
    $('#generated').html("bahhhh");
}

// Get version (UGLY AS SH*T)
function getVersion(){
    if($('#v_2').hasClass('active')){
        return 2;
    } else if($('#v_3').hasClass('active')){
        return 3;
    } else {
        return 1;
    }
}