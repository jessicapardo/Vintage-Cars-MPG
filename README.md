<html>

<p align="left"><img width="1000" height="auto" src="images/header.PNG">          
<body>
<p>
<h2>Predicting the Gas Mileage of your New Vintage Car</h2>
The project intertwines Tableau and Machine learning to predict mpg values for cars in the 70's and 80's and deployed utilizing Tableau Public at: <a href="https://public.tableau.com/profile/dana.woodruff#!/vizhome/Vintage-Car-MPG/VintageCars?publish=yes">Vintage-Cars-MPG.</a><br> 
  
<h2>Vintage Cars' Journey Towards Fuel Efficiency - with user interactivity</h2>
Tableau visualizes the journey automobiles took from 1970 to 1982 as world events incentivized manufacturers to reduce vehicle weight and horsepower to improve fuel efficiency. Our road begins with understanding how world oil prices and MPG trended over the twelve years included in the dataset.<br>
<br>
<p align="center"><kbd><img width="700" height="auto" src="images/oil$.PNG"></kbd>
<br>
<h3>Data</h3>
Data is gratiously sourced from <a href="http://archive.ics.uci.edu/ml/datasets/Auto+MPG">Kaggle and the University of California, Irvine.</a><br>
<br>
The original data .csv file is relatively clean.  It is a small dataset, approximately 400 records, and Excel was used for the minimal cleaning required. Six null values in "horsepower" field were replaced with the manufacturers' specified values. Make and model values were separated into independent fields utilizing Excel's native "text to columns" functionality, for better Tableau visualization prospects.  "Make" was listed as unique values to spot misspellings which were then corrected and was capitalized for better tableau visualization.  the clean .csv was read into Tableau. Data fields include make, model, model year, horsepower, engine displacement, engine cylinders, acceleration, fuel efficiency, and vehicle weight. A second .csv was imported that provides <a href="/Data/Oil_Prices.xlsx">world oil prices</a> for each of the twelve years.<br>
<br>
"Model Year" and "Country" are selected as global filters for the dashboards.
<br>
<h3>Dashboards and Story</h3>
Nine worksheets each have a visualization. The visualizations are brought together on five dashboards which are then presented as a story.  The main filter serves to retrieve data for each year unless the data is presented as a time series. The story captions summarize each dashboard and guide the user through the dashboards.<br>
<br>
Our story begins in 1970...Elvis Presley and Creedence Clearwater Revival played on the radios of heavy cars that boasted big engines and horsepower. Gas was cheap and the cars averaged 17 MPG. By 1982 the world's industrialized countries had suffered two oil crises and Elvis had left the building. Engine horsepower was down to 81hp but fuel efficiency was up 88%.<br>
<br>
<p align="center"><kbd><img width="700" height="auto" src="images/hp.PNG"></kbd><br>
<br>
Next the user explores how country of origin influences fuel efficiency.  Asia is the frontrunner for the time period with the United States and England trailing the pack. The user can select which year(s) to view and tooltips provides the average metrics for each field.
<p align="center"><kbd><img width="700" height="auto" src="images/map.PNG"></kbd><br>
<br>  
Individual make and fuel efficiency are examined in the third dashboard. The dashboard is generous with labels to provide an easy view of data and, again, tooltips are utilized to provide a wider data view. A summary by country also functions as a legend in the lower right corner.
<p align="center"><kbd><img width="700" height="auto" src="images/make.PNG"></kbd><br>
<br>
The user then explicity views the 46% reduction in horsepower between 1970 and 1982. 
<p align="center"><kbd><img width="700" height="auto" src="images/hp-mpg.PNG"></kbd><br>
<br>  
Engine metrics roar to life in the final dashboard.  A 28% decrease in weight and the 46% decrease in horsepower contributed to the 88% MPG improvement and a 31% improvement in acceleration. blended and dual axis scales allowed the three independent metrics to show with a shared x-axis.  Horsepower was not able to be blennded in without an unfortunate side effect of an inaccurate tooptip.  having been thoroughly explored on prior dashboards the decision was made to keep the tooltip instead.
<p align="center"><kbd><img width="700" height="auto" src="images/metrics.PNG"></kbd><br>
<br>

<p align="center"><kbd><img width="1000" height="100" src="images/header.PNG"></kbd><br>                     

</body>
</html>
