# JS Homework

## Multiplication Table
```
<table id="table99"></table>
```
**tableFunc**(*i*, *j*, *id*)

&nbsp; &nbsp; print an equation to table cell

**callTableFunc**(*m*, *n*, *id*)

&nbsp; &nbsp; call *tableFunc(i, j, id)*

## Form Check

```
<div id=div_id>
    <p class=item></p>             <!-- division  -->
    <input class=text_in></input>  <!-- text      -->
    <span class=false></span>      <!-- ico_false -->
    <span class=true></span>       <!-- ico_true  -->
    <span class=confirm></span>    <!-- valid     -->
</div>
```

**validation**(*id*) 

&nbsp; &nbsp; return: division, text, ico_false, ico_true, valid

&nbsp; &nbsp; type: element 


**init**(*id*) {

&nbsp; &nbsp; clear ico_false, ico_true, valid

**display_error**(*id*) {

&nbsp; &nbsp; show ico_false

&nbsp; &nbsp; display error message in valid

**display_correct**(*id*) {

&nbsp; &nbsp; show ico_true

&nbsp; &nbsp; display correct message in valid

**show_password**(*id*){

&nbsp; &nbsp; switch password display or hide

**check_name**(*id*)

&nbsp; &nbsp; checking Chinese name format

**check_pwd**(*id*)

&nbsp; &nbsp; checking password format

**check_dt**(*id*)

&nbsp; &nbsp; checking datetime format

## Star Rating

```
<div id="rating">
    <span class="fa fa-database"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <p class=lead></p>
</div> 
```

**StarRating**(*id*, *id_p*, *id_span*)

&nbsp; &nbsp; Star rating class, constructor


**StarRating.prototype.init** = *function*(*id*, *id_p*, *id_span*)

&nbsp; &nbsp; initialize
  

**StarRating.prototype.enterStarListener** = *function*(*e*)

&nbsp; &nbsp; This method is fired when a user hovers over a single star


**StarRating.prototype.leaveStarListener** = *function*()

&nbsp; &nbsp; This method is fired when a user hovers over a single star

**StarRating.prototype.clickStarListener** = *function*(*e*) {

&nbsp; &nbsp; This method is fired when a user clicks on a single star

**StarRating.prototype.fillStarsUpToElement** = *function*(*el*) {

&nbsp; &nbsp; Fill the star ratings up to a specific position.

&nbsp; &nbsp; el = e.target

&nbsp; &nbsp; if the position el < the previous target position, Remove old hover states


## Animation

see also matplotlib.animation.FuncAnimation.save

## Calendar

```
<div class="input-group mb-3" style="float:left">
    <select class="selectpicker show-tick" id="inputGroupSelectyear" onfocus="parsing_year('inputGroupSelectyear', 'inputGroupSelectmonth', 'inputGroupSelectdate')">
        <option selected>Year</option>
    </select>
     / 
    <select class="custom-select" id="inputGroupSelectmonth" onfocus="parsing_month('inputGroupSelectyear', 'inputGroupSelectmonth', 'inputGroupSelectdate')">
        <option selected>Month</option>
    </select>
     / 
    <select class="custom-select" id="inputGroupSelectdate" onfocus="parsing_date('inputGroupSelectyear', 'inputGroupSelectmonth', 'inputGroupSelectdate')">
        <option selected>Date</option>
    </select>
</div>
            
<div class="input-group-append">
    <p class="lead" for="inputGroupSelect02">
        <span id=Selectyear>--</span> / 
        <span id=Selectmonth>--</span> / 
        <span id=Selectdate>--</span>
    </p>
</div>
```

**clearOption**(...*id*)

&nbsp; &nbsp; clear multiple elements

**generateYMD**(*id*, *start*, *end*)

&nbsp; &nbsp; generate year, month, or date, with given boundary

**getmonths**(*y*)

&nbsp; &nbsp; get months in year

**getdays**(*y*, *m*)

&nbsp; &nbsp; get days in month, year

**parsing_year**(*id_y*, *id_m*, *id_d*)

&nbsp; &nbsp; if re-click on year select, clear options and generate year options

**parsing_month**(*id_y*, *id_m*, *id_d*)

&nbsp; &nbsp; if re-click on month select, clear options and generate month options

**parsing_date**(*id_y*, *id_m*, *id_d*)

&nbsp; &nbsp; if re-click on date select, clear options and generate date options

**getval**(*id*)

&nbsp; &nbsp; return option value with given select id

**getSelect**(*id*)

  &nbsp; &nbsp; set the value (via select) to outupt span