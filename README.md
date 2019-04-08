# DataPhiles- Jabir Chowdhury, Brian Lee, Tianrun Liu, Damian Wasilewicz


### Description of data set(s).

[Link to data set:](https://www.ngdc.noaa.gov/nndc/struts/results?bt_0=&st_0=&type_17=EXACT&query_17=None%20Selected&op_12=eq&v_12=&type_12=Or&query_14=None%20Selected&type_3=Like&query_3=&st_1=&bt_2=&st_2=&bt_1=&bt_4=&st_4=&bt_5=&st_5=&bt_6=&st_6=&bt_7=&st_7=&bt_8=&st_8=&bt_9=&st_9=&bt_10=&st_10=&type_11=Exact&query_11=&type_16=Exact&query_16=&bt_18=&st_18=&ge_19=&le_19=&type_20=Like&query_20=&display_look=1&t=101650&s=1&submit_all=Search%20Database&fbclid=IwAR3M6RsgdmfTbTgj34eXx_sWNZqaQ4Tup2oMudcV-1XVBtlFuqYzvdphDQg)/

Have you ever worried about your whole world being shaken up? Are you interested in some of the most dangerous yet fascinating things Mother Nature has to offer us? If you too are perplexed by earthquakes, our project allows for an interactive visualization of those pesky natural disasters!

Our data set contains a set of earthquakes with information including coordinates, date, and magnitude. Another data set that we use allows us to map the earthquakes onto a map of the world, superimposing them onto it. Our data set actually goes back to 2150 BCE, but is not entirely consistent in its earthquake data in earlier years, so we chose to stick with the range of 1600-2019 because there was information about earthquakes happening for every year in that time span.

### Explanation, in broad strokes if necessary, of how you aim to make this data come alive.

We plan to bring our data to life through an interactive map that comes with sliders!

#### Map
The map itself is zoomable and draggable, so you can rearrange how much space it takes up on the screen and zoom in to inspect a particular region that has a high prevalence of earthquakes. 

#### Earthquakes
The earthquakes themselves are represented by colorful circles of varying radii. The radius of a circle corresponds to the strength, or magnitude, of the earthquake. The circles are slightly transparent in order to allow for more of them to be distinguishable from the others. 

#### Sliders
The sliders are what bring the user into the equation! Earthquakes will only appear when they satisfy the criteria set by the user via the draggable sliders. The sliders will create a range based on two categories for now, those being time and magnitude. Let's say that the user sets the lower end of the earthquake slider to 1600 and the upper end to 2019 (i.e., full slider). This will cause all earthquakes that happened between those years to appear at their locations on the map. If the user shortened the time frame to 1800 to 1900, only those earthquakes would be shown, with the earthquakes that are no longer in the time frame slowly shrinking as they transition out of existence. 

Similarly, by adjusting the magnitude slider, the user can determine what range of magnitude the earthquakes that are displayed must fall into. By playing around with the sliders and deviating from the default that they are set to, the user can explore questions like which years had higher prevalences of low magnitude earthquakes versus which ones had higher prevalence of higher magnitude earthquakes, and which areas were chiefly targetted in both of these relationships. 

### Explanation of D3 feature utilization.

Since we are creating a racing bar chart, we will use update to periodically change the values of each bar. The "racing" element of our data visualization comes into effect when the value of a bar exceeds or goes below the value of another bar. Our bar chart orders the the bars from the higest value to the lowest value. Since we are representing the data for number patterns in lottery numbers, the value of a bar representing a pattern indicates how prevalent that pattern is. This means that the most prevalent pattern will be at the top and the "least" prevalent will be at the bottom. I put least in quotations because it isn't necessarily the least prevalent pattern given the fact that there are many patterns and we can't show them all concurrently. Therefore, we will only show the 6 most prevalent pattern at a time and the 6th most prevalent pattern would be considered the "least" visually.

Transitions comes into play when there is a shift in the ranks of bars. When a pattern overtakes another, we will swap the positions of the bars through a smooth transition. In the case where a pattern that isn't in the original 6 patterns, which are visually represented, overtakes one of the 6 patterns, we will use exit to remove the bar progression of the pattern which the new pattern exceeded. Then we will use enter to show the progression of the new pattern. Over time, our scale for the x-axis will change depending on the value of the most prevalent pattern.

By default, our data visualization will keep track of all the patterns that we have come up with. However, we will implement a user interactive feature where the user can explicitly decide which patterns they want to keep track of or which patterns they no longer want to keep track of. We will also allow the users to change the period which we update the values. For example, users can change the period from weeks to months or from months to years and other variations. In addition, users will also be allowed to select a start date and an end date.

### Sketch/Mock-up of envisioned visualization
![alt text](https://raw.githubusercontent.com/jabirC/DataPhiles/master/mockup.png)

## LAUNCH CODES
#### 1. create and open a your virtual environment
```bash
$ python3 -m venv venv
$ . venv/bin/activate
```
#### 2. clone the repository
(https)
```bash
$ git clone https://github.com/JabirC/DataPhiles.git
```
(ssh)
```bash
$ git clone git@github.com:JabirC/DataPhiles.git
```
#### 3. install needed pip install
``` bash
$ pip install -r DataPhiles/requirements.txt
```
#### 4. run the flask app
```bash
$ cd DataPhiles/
$ python app.py
```
#### 5. open up the flask app in a preferred browser
<http://127.0.0.1:5000/>
