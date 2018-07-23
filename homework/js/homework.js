// homework 1
function tableFunc(i, j, id) {
    var table = document.getElementById(id);
    var row = table.rows[table.rows.length - 1]
    if (j == 0) {row = table.insertRow(-1)}
    var col = row.insertCell(-1);
    var a = ("00" + (j + 1)).slice(-2)
    var b = ("00" + (i + 1)).slice(-2)
    var c = ("00" + (j + 1) * (i + 1)).slice(-2) // a * b = c
    var equation = a + " * " + b + " = " + c
    col.innerHTML = equation
}

function callTableFunc(m, n, id){
    for (var i = 0; i < m; i++)
        for (var j = 0; j < n; j++)
            tableFunc(i, j, id)
}

// homework 2


// homework 3
function StarRating() {
    // Star rating class
    // constructor
    this.init()
};

StarRating.prototype.init = function() {
    // initialize
    this.stars = document.querySelectorAll('#rating span')
    this.msg = document.querySelector('#rating p')
    
    for (var i = 0; i < this.stars.length; i++) {
        this.stars[i].setAttribute('data-count', i)
        this.stars[i].addEventListener('mouseenter', this.enterStarListener.bind(this))
    }
    document.querySelector('#rating').addEventListener('click', this.clickStarListener.bind(this))
}

StarRating.prototype.enterStarListener = function(e) {
    // This method is fired when a user hovers over a single star
    // :param: e
    this.fillStarsUpToElement(e.target)
    this.msg.innerHTML = "You are scoring..."
}

StarRating.prototype.clickStarListener = function(e) {
    // This method is fired when a user clicks on a single star
    // :param: e
    var score = Number(e.target.getAttribute('data-count')) + 1
    this.msg.innerHTML = "You give this article rating of " + score + " out of 5"
}

StarRating.prototype.fillStarsUpToElement = function(el) {
    // Fill the star ratings up to a specific position.
    // :param: el
    for (var i = 0; i < this.stars.length; i++) {
        if (el == null || this.stars[i].getAttribute('data-count') > el.getAttribute('data-count')) {
            // Remove old hover states:
            this.stars[i].classList.remove('hover')

        } else {
            // Add new hover states:
            this.stars[i].classList.add('hover')
        }
    }
}

// Run:
new StarRating();

// homework 4


// homework 5

