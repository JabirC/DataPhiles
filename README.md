# DataPhiles- Jabir Chowdhury, Brian Lee, Tianrun Liu, Damian Wasilewicz


### Description of data set(s).

Link to data set: https://www.ngdc.noaa.gov/nndc/struts/form?t=101650&s=1&d=1

Haven't you ever felt the urge to go for broke and try your luck with the lottery? Do you want to improve your odds?
While we can't guarantee you'll end up as that one lucky fella, we're here to show you some cool trends that you might not have noticed!

Our data set contains the winning lottery numbers spanning from 2002 to 2019, from the New York Lottery and Mega Millions lottery dataset.
We are aiming to find cool correlations regarding the popularity of certain winning numbers over time (etc, do numbers whose totals are divisible by 3 become more or less popular over time than others? Are prime sums more popular than compound sums?)

### Explanation, in broad strokes if necessary, of how you aim to make this data come alive.

We plan to bring the data to life primarily using a racing bar chart, as demonstrated here:
https://observablehq.com/@johnburnmurdoch/bar-chart-race-the-most-populous-cities-in-the-world?fbclid=IwAR0VT3OJ0JfwnUoj8VRwCo35FN97mVUfouzhu_zQpbV_itvK96PB0U6Tg8k

This cool way of demonstrating data allows users to witness certain types of numbers overtake others, and get overtaken by other categories, over time. To clarify:

#### Racing Bar Chart
The racing bar chart incorporates animation to create the illusion of a race. The bars will project from the left side of the screen and reach out to the right. The uppermost bar is the one that is considered in the lead.

Let's assume we have winning numbers sorted based on whether their sum is even or not, and we are going by months. During January of 2002, there could be 5 even numbers and 3 odd ones, putting evens in the lead; the next month, however, there could be more odds, which would make the odd bar move to the top and "overtake" the even bar.

#### Multi line graph
Another way of comparing the popularity of numbers over time is by using the multi line graph. Here, there will be different line graphs imposed over the same graph with different colors in order to allow for the comparison of how popular certain number types are over time.

Since our time span (2002-2019) is significantly shorter than the one in the example above, we will most likely show relationships as a function of months rather than years.
This will be shown absent user interaction.

With user interaction, the user can switch between visualization methods (multi line vs bar chart vs potential others) and also switch categories (greatest common factors of sums, parity, primeness)  


It will explore and provoke questions concerning whether or not certain biases, implicit or otherwise, go into selecting popular numbers, and hopefully explore the idea of patterns emerging in data that might seem completely random to the naked eye, and the idea of random numbers being truly random or not.

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
