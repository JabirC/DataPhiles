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



