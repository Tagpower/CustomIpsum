// Handle button behavior
$('.button').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
});

// Form validation and form behavior
$('#params').form({
    lines: {
        identifier : 'lines',
        rules: [
            {
                type   : 'integer',
                prompt : 'Il va me falloir un nombre là par contre...'
            },
            {
                type   : 'maxLength[3]',
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
    var v = getVersion();
    var l = $('#params').form('get field', 'lines').val();
    
    generateLorem(v, l);
}

// Generate the ipsum
function generateLorem(v, l){
    var s = "";
    var i = 0; var j = 0;
    for(i=0; i<l; i++){
        if(j >= sentences[v-1].length){
            j = 0;
        }
        s += " ";
        s += sentences[v-1][j];
        j += 1;
    }
    $('#generated').html(s);
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