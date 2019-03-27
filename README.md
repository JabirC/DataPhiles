# DataPhiles- Jabir Chowdhury, Brian Lee, Tianrun Liu, Damian Wasilewicz


### Description of data set(s).

Link to data set: https://data.ny.gov/api/views/5xaw-6ayf/rows.json?accessType=DOWNLOAD

Haven't you ever felt the urge to go for broke and try your luck with the lottery? Do you want to improve your odds?
While we can't guarantee you'll end up as that one lucky fella, we're here to show you some cool trends that you might not have noticed! 

Our data set contains the winning lottery numbers spanning from 2002 to 2019, from the New York Lottery and Mega Millions lottery dataset. 
We are aiming to find cool correlations regarding the popularity of certain numbers over time (etc, do numbers whose totals are divisible by 3 become more or less popular over time than others? Are prime sums more popular than compound sums?) 

### Explanation, in broad strokes if necessary, of how you aim to make this data come alive.

We plan to bring the data to life primarily using a racing bar chart, as demonstrated here: 
https://observablehq.com/@johnburnmurdoch/bar-chart-race-the-most-populous-cities-in-the-world?fbclid=IwAR0VT3OJ0JfwnUoj8VRwCo35FN97mVUfouzhu_zQpbV_itvK96PB0U6Tg8k

This cool way of demonstrating data allows users to witness certain types of numbers overtake others, and get overtaken by other categories, over time. Since our time span (2002-2019) is significantly shorter than the one in the example above, we will most likely show relationships as a function of months rather than years. 
This will be shown absent user interaction.

With user interaction, we can have users track the popularity of different inputted lucky numbers (birthdays, significant dates, etc.) against each other, creating a similar race interaction as with the non-user interaction. 

It will explore and provoke questions concerning whether or not certain biases, implicit or otherwise, go into selecting popular numbers, and hopefully explore the idea of patterns emerging in data that might seem completely random to the naked eye, and the idea of random numbers being truly random or not. 

### Explanation of D3 feature utilization.

Since we are creating a racing bar chart, we will use update to periodically change the values of each bar. The "racing" element of our data visualization comes into effect when the value of a bar exceeds or goes below the value of another bar. Our bar chart orders the the bars from the higest value to the lowest value. Since we are representing the data for number patterns in lottery numbers, the value of a bar representing a pattern indicates how prevalent that pattern is. This means that the most prevalent pattern will be at the top and the "least" prevalent will be at the bottom. I put least in quotations because it isn't necessarily the least prevalent pattern given the fact that there are many patterns and we can't show them all concurrently. Therefore, we will only show the 6 most prevalent pattern at a time and the 6th most prevalent pattern would be considered the "least" visually.

Transitions comes into play when there is a shift in the ranks of bars. When a pattern overtakes another, we will swap the positions of the bars through a smooth transition. In the case where a pattern that isn't in the original 6 patterns, which are visually represented, overtakes one of the 6 patterns, we will use exit to remove the bar progression of the pattern which the new pattern exceeded. Then we will use enter to show the progression of the new pattern. Over time, our scale for the x-axis will change depending on the value of the most prevalent pattern.

By default, our data visualization will keep track of all the patterns that we have come up with. However, we will implement a user interactive feature where the user can explicitly decide which patterns they want to keep track of or which patterns they no longer want to keep track of. We will also allow the users to change the period which we update the values. For example, users can change the period from weeks to months or from months to years and other variations. In addition, users will also be allowed to select a start date and an end date.

![alt text](https://raw.githubusercontent.com/jabirC/DataPhiles/master/mockup.png)
