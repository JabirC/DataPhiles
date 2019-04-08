# DataPhiles- Jabir Chowdhury, Brian Lee, Tianrun Liu, Damian Wasilewicz


### Description of data set(s).

[Link to data set](https://www.ngdc.noaa.gov/nndc/struts/results?bt_0=&st_0=&type_17=EXACT&query_17=None%20Selected&op_12=eq&v_12=&type_12=Or&query_14=None%20Selected&type_3=Like&query_3=&st_1=&bt_2=&st_2=&bt_1=&bt_4=&st_4=&bt_5=&st_5=&bt_6=&st_6=&bt_7=&st_7=&bt_8=&st_8=&bt_9=&st_9=&bt_10=&st_10=&type_11=Exact&query_11=&type_16=Exact&query_16=&bt_18=&st_18=&ge_19=&le_19=&type_20=Like&query_20=&display_look=1&t=101650&s=1&submit_all=Search%20Database&fbclid=IwAR3M6RsgdmfTbTgj34eXx_sWNZqaQ4Tup2oMudcV-1XVBtlFuqYzvdphDQg)

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
Enter statements will be used when data is used to render the initial data points.
Afterwards, enter as well as exit statements will be used when the user shifts the sliders.

Transitions comes into play when there is a shift in the sliders. The shift marks a change in the year range or the magnitude range of our
visual data. These changes may bring about more data onto the world map or they may decrease the data points on the current map. These
additions and deletions will be done through transitions as the circles will slowly pop up until it is full size or slowly decrease in size
until its not there anymore.

User Interactivity is essentially changing the values of the sliders in order to sort through the visual data. Users may also hover on top of data points in order to see a detailed description of the location and time of the earthquake as well as the magnitude. In addition, users can also zoom in and zoom out of the map as well as drag the map itself in any direction.

Our project will be most similar to the WorldBank contract awards visualization in that it contains a map of the world and has data points in the form of circles on top of countries.
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
