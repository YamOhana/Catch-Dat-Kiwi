const kiwi = Kiwi()
const timer = Timer()
const renderer = Render()

renderer.render(kiwi.kiwis())

$("#start").on("click", function () {
    kiwi.up()
    renderer.render(kiwi.get())
    $("#kiwiCount").text(kiwi.level()) 
    timer.start()  
})

$("#game").on("click", ".kiwi", function () {
    let kiwiID = $(this).data("id")
    kiwi.remove(kiwiID)
    $("#kiwiCount").text(kiwi.count())
    if (kiwi.count() === 0) {
        kiwi.up()
        timer.moreTime()
        $("#levelCount").text(kiwi.level())
        $("#kiwiCount").text(kiwi.level())
        renderer.render(kiwi.get())
    }
    renderer.render(kiwi.get())  
})