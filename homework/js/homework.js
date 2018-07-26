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

function delTableFunc(id){
	var table = document.getElementById(id)
	table.deleteRow(-1)
}

// homework 2
function validation(id) {
	this.division = document.getElementById(id)
	this.text = division.querySelector(".text_in").value
	this.ico_false = division.querySelector(".false")
	this.ico_true = division.querySelector(".true")
	this.vaild = division.querySelector(".confirm")
	return [division, text, ico_false, ico_true, vaild] 
}

function init(id) {
	var division, text, ico_false, ico_true, vaild
	[, , ico_false, ico_true, vaild] = validation(id)
	vaild.innerHTML = ""
    ico_false.style.display = "none"
	ico_true.style.display = "none"
}

function display_error(id) {
	var ico_false
	[, , ico_false, , ] = validation(id)
	ico_false.style.display = "inline"
    ico_false.style.color = "red"
	vaild.innerHTML = "error"
}

function display_correct(id) {
	var ico_true
	[, , , ico_true, ] = validation(id)
	ico_true.style.display = "inline"
    ico_true.style.color = "green"
	vaild.innerHTML = "correct"
}

function check_name(id) {
	var text
	[, text, , , ] = validation(id)

    var logic = 0
    if (text.length < 2) {
        display_error(id)

	} else {
        for(var i = 0; i < text.length; i++) 
            if(text.charCodeAt(i) < 0x4E00 || text.charCodeAt(i) > 0x9FA5) 
                logic += 1

        if (logic > 0) {
            display_error(id)

		} else {
            display_correct(id)
		}
	}
}

function check_pwd(id) {
	var text
	[, text, , , ] = validation(id)

    var logic = 0
    if (text.length < 6) {
        display_error(id)

	} else {
		var spec = new RegExp("[!@#$%^&*]")
		var num = new RegExp("[0-9]]")
		if (spec.test(text) & spec.test(text)){
			display_correct(id)
		} else{
			display_error(id)
		}
	}
}

function check_dt(id) {
	var division, text, ico_false, ico_true, vaild
	[, text, , , valid] = validation(id)
	var yyyy, mm, dd, y, m, d
	[yyyy, mm, dd] = text.split('/')
	date_input = new Date(text)
	y = date_input.getFullYear()
	m = date_input.getMonth() + 1
	d = date_input.getDate()

	if (Number(yyyy) == y & Number(mm) == m & Number(dd) == d){
		display_correct(id)
	} else {
		display_error(id)
	}

	valid.innerHTML = y + "/" + m + "/" + d
	
}

// homework 3
function StarRating(id, id_p, id_span) {
    // Star rating class
    // constructor
    this.init(id, id_p, id_span)
};

StarRating.prototype.init = function(id, id_p, id_span) {
	// initialize
    this.stars = document.querySelectorAll(id_span)
	this.msg = document.querySelector(id_p)
	this.click = false
    
    for (var i = 0; i < this.stars.length; i++) {
        this.stars[i].setAttribute('data-count', i)
        this.stars[i].addEventListener('mouseenter', this.enterStarListener.bind(this))
	}
	document.querySelector(id).addEventListener('mouseleave', this.leaveStarListener.bind(this))
	document.querySelector(id).addEventListener('click', this.clickStarListener.bind(this))
}

StarRating.prototype.enterStarListener = function(e) {
    // This method is fired when a user hovers over a single star
	// :param: e
	this.click = false
	this.fillStarsUpToElement(e.target)
	var score = Number(e.target.getAttribute('data-count')) + 1
    this.msg.innerHTML = "You are scoring... on " + score
}

StarRating.prototype.leaveStarListener = function() {
    // This method is fired when a user hovers over a single star
	// :param: e
	if (this.click==false){
		this.fillStarsUpToElement(null)
		this.msg.innerHTML = ""
	}
}

StarRating.prototype.clickStarListener = function(e) {
    // This method is fired when a user clicks on a single star
	// :param: e
	this.click = true
	this.fillStarsUpToElement(e.target)
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

// callable:
function score(id){
	var id_span = "#" + id + " span"
	var id_p = "#" + id + " p" 
	var id = "#" + id 
	new StarRating(id, id_p, id_span)
}

// homework 4
/* Define the Animation class */
function Animation(frames, img_id, link_id, slider_id, interval, loop_select_id) {
	this.link_id = link_id;
	this.img_id = img_id;
	this.slider_id = slider_id;
	this.loop_select_id = loop_select_id;
	this.interval = interval;
	this.current_frame = 0;
	this.direction = 0;
	this.timer = null;
	this.frames = new Array(frames.length);

	for (var i = 0; i < frames.length; i++) {
		this.frames[i] = new Image();
		this.frames[i].src = frames[i];
	}
	document.getElementById(this.slider_id).max = this.frames.length - 1;
	this.set_frame(this.current_frame);
}

Animation.prototype.get_loop_state = function () {
	var button_group = document[this.loop_select_id].state;
	for (var i = 0; i < button_group.length; i++) {
		var button = button_group[i];
		if (button.checked) {
			return button.value;
		}
	}
	return undefined;
}

Animation.prototype.set_frame = function (frame) {
	this.current_frame = frame;
	document.getElementById(this.img_id).src = this.frames[this.current_frame].src;
	document.getElementById(this.link_id).setAttribute("href", "https://github.com/Berchem/static_web_for_logistic_regression/blob/master/basic_animation_frames/frame" + ("0000000" + this.current_frame).slice(-7) + ".png")
	document.getElementById(this.slider_id).value = this.current_frame;
}

Animation.prototype.next_frame = function () {
	this.set_frame(Math.min(this.frames.length - 1, this.current_frame + 1));
}

Animation.prototype.previous_frame = function () {
	this.set_frame(Math.max(0, this.current_frame - 1));
}

Animation.prototype.first_frame = function () {
	this.set_frame(0);
}

Animation.prototype.last_frame = function () {
	this.set_frame(this.frames.length - 1);
}

Animation.prototype.slower = function () {
	this.interval /= 0.7;
	if (this.direction > 0) { this.play_animation(); }
	else if (this.direction < 0) { this.reverse_animation(); }
}

Animation.prototype.faster = function () {
	this.interval *= 0.7;
	if (this.direction > 0) { this.play_animation(); }
	else if (this.direction < 0) { this.reverse_animation(); }
}

Animation.prototype.anim_step_forward = function () {
	this.current_frame += 1;
	if (this.current_frame < this.frames.length) {
		this.set_frame(this.current_frame);
	} else {
		var loop_state = this.get_loop_state();
		if (loop_state == "loop") {
			this.first_frame();
		} else if (loop_state == "reflect") {
			this.last_frame();
			this.reverse_animation();
		} else {
			this.pause_animation();
			this.last_frame();
		}
	}
}

Animation.prototype.anim_step_reverse = function () {
	this.current_frame -= 1;
	if (this.current_frame >= 0) {
		this.set_frame(this.current_frame);
	} else {
		var loop_state = this.get_loop_state();
		if (loop_state == "loop") {
			this.last_frame();
		} else if (loop_state == "reflect") {
			this.first_frame();
			this.play_animation();
		} else {
			this.pause_animation();
			this.first_frame();
		}
	}
}

Animation.prototype.pause_animation = function () {
	this.direction = 0;
	if (this.timer) {
		clearInterval(this.timer);
		this.timer = null;
	}
}

Animation.prototype.play_animation = function () {
	this.pause_animation();
	this.direction = 1;
	var t = this;
	if (!this.timer) this.timer = setInterval(function () {
		t.anim_step_forward();
	}, this.interval);
}

Animation.prototype.reverse_animation = function () {
	this.pause_animation();
	this.direction = -1;
	var t = this;
	if (!this.timer) this.timer = setInterval(function () {
		t.anim_step_reverse();
	}, this.interval);
}

// homework 5

