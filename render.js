const Render = function () {
    const renderKiwis = function (kiwis) {
        $("#game").empty()
        for (let i = 0; i < kiwis.length; i++) {
            let kiwiBox = `<div class="kiwi" data-id="${kiwis[i].id}" style="
            left:${((Math.random() * ($('#game').width() - 100)))}px;
            top:${kiwis[i].size() * 4}px;"> 
            <i class="fas fa-kiwi-bird" style="
            font-size: ${kiwis[i].size()}px;
            color: ${kiwi.randomColour()};"></i>
            </div>`

            $("#game").append(kiwiBox)
        }
    }
    return {
        render: renderKiwis
    }
}