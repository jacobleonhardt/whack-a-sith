
    const starDestoryers = document.getElementsByClassName('star-destroyer')
    const score = document.getElementById('score')
    const sith = document.getElementsByClassName('sith')

    const time = (min, max) => {
        return Math.round(Math.random() * (max - min) + min)
    }
// DOM Selector
