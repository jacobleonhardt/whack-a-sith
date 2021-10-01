// DOM Selector

    const starDestoryers = document.getElementsByClassName('star-destroyer')
    const scoreBoard = document.getElementById('score')
    const sith = document.getElementsByClassName('sith')
    let lastShip;
    let timeUp = false
    let points = 0

    function randomTime(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }

    function randomShip(starDestoryers) {
        const index = Math.floor(Math.random() * starDestoryers.length)
        const ship = starDestoryers[index]

        if(ship === lastShip) {
            return randomShip(starDestoryers)
        }

        lastShip = ship
        return ship
    }

    function revealToTheJedi() {
        const time = randomTime(200, 1000)
        const ship = randomShip(starDestoryers)
        ship.classList.add('revealed')
        setTimeout(() => {
            ship.classList.remove('revealed')
            if(!timeUp) revealToTheJedi()
        }, time)
    }

    function startGame() {
        scoreBoard.innerText = '0'
        timeUp = false
        points = 0
        revealToTheJedi()
        setTimeout(() => {
            timeUp = true
        }, 2000)
    }

    function strike(e) {
        if(!e.isTrusted) return

        points++
        this.classList.remove('revealed')
        scoreBoard.innerText = `${points}`
    }

    sith.forEach(sith => sith.addEventListener('click', strike))
