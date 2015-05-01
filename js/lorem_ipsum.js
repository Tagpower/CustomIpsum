// Handle button behavior
$('.button').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
});

$('#v_1').on('click', function(){
    changePics('img/gr1.png');
});
$('#v_2').on('click', function(){
    changePics('img/gr2.png');
});
$('#v_3').on('click', function(){
    changePics('img/gr3.png');
});

function changePics(path){
    $('#img').transition({
        animation  : 'fade',
        onComplete : function(){
            $('#img').attr('src',path);
            $('#img').transition('horizontal flip');
        }
    });
}

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
                prompt : 'Un peu trop grand là... (that\'s what she said)'
            },
            {
                type   : 'not[0]',
                prompt : 'Très utile!'
            },
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
    var s = '<h4 class="ui dividing header">Texte généré</h4><p>';
    var i = 0; var j = 0;
    for(i=0; i<l; i++){
        if(j >= sentences[v-1].length){
            j = 0;
        }
        s += " ";
        s += sentences[v-1][j];
        j += 1;
    }
    $('#generated').html(s + '</p>');
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