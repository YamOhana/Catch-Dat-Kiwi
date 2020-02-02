const Kiwi = function () {

    let level = 0
    let kiwis = []

    const getKiwis = function () {
        return kiwis
    }

    const addKiwis = function () {

        for (let i = 0; i < level; i++) {
            numID = kiwis.length + 1
            let num = Math.floor(Math.random() * 80) + "vh"
            kiwis.push({
                size: function () {
                    if (num < 15) {
                        num = 15
                    }
                    return num
                },
                id: numID
            })
        }

        return kiwis.length
    }

    const getLevel = function () {
        return level
    }

    const countKiwis = function () {
        let number = kiwis.length
        return number
    }

    const removekiwi = function (kiwiID) {
        for (let i = 0; i < kiwi.length; i++) {
            if (kiwis[i].id === kiwiID) {
                kiwis.splice(i, 1)
            }
        }
    }

    const levelUp = function () {
        level += 1
        addKiwis()
    }

    const randomColour = function () {
        let num1 = Math.floor(Math.random() * 255)
        let num2 = Math.floor(Math.random() * 255)
        let num3 = Math.floor(Math.random() * 255)

        return `rgb(${num1},${num2},${num3})`
    }

    return {
        get: getKiwis,
        kiwis: addKiwis,
        level: getLevel,
        count: countKiwis,
        remove: removekiwi,
        up: levelUp,
        randomColour

    }
}

const Timer = function() {
    let timeLeft = 7;
    const start = function() {
        time = setInterval(function () {
    
            timeLeft = timeLeft - 1;
            if(timeLeft == 5) {
                $(".sec").addClass("yellow")
            }
            if(timeLeft <= 3) {
                $(".sec").addClass("blink")
                $(".sec").removeClass("yellow")
            }
            if (timeLeft == 0) {
                clearInterval(time);
                $("#game").text("game over!")
                $(".sec").removeClass("blink")
            }
            
            $("#time").text(timeLeft)
        }, 1000);
    }

    const moreTime = function() {
        timeLeft += 2
    }
    return {
        start: start,
        moreTime: moreTime
    }
}