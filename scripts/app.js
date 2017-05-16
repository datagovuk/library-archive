$(document).ready(function(){
    $("#q").on('keyup', function (e) {
        if (e.keyCode == 13) {
            search(this)
        }
    });
})

function search(obj) {
    var text = $("#q").val().toLowerCase()
    if (!text) {
        $('.search-result').each(function (index){
            $(this).css('display', 'block')
            $('#post_count').html("356")
        })
        return;
    }

    var matchcount = 0
    var words = text.split(" ")
    var wordcount = words.length

    $('.search-result').each(function (index){
        var title = $(this).find('.title').get(0)
        var full = $(this).find('.full-content').get(0)
        var wordsMatched = 0

        if (!title || !full)
            return;

        var match = false
        for( var i = 0; i < wordcount; i++) {
            if ( $(title).text().toLowerCase().indexOf(words[i]) != -1 ||
                 $(full).text().toLowerCase().indexOf(words[i]) != -1) {
                matchcount += 1
                match = true
                break
            }
        }

        if ( match ) {
          $(this).show()
        } else {
          $(this).hide()
        }

        $("#post_count").html(matchcount)
    })
}
