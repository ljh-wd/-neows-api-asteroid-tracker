## NeoW's API is an app built using the NASA API to track close approach asteroids on a given date range (7 day max range) then return back some information.

## How to use this app:

When the application innitially loads, it will take a moment to grab the data from the default date it is given. The default date is the current date (start date) + 7 days (end date).

From there, it will return a table of information about the asteroids (Name, Magnitude, Close approach, Potentially hazardous). Please note that the list returned may be long but the table is scollable.

Above the data will be a date range picker. The range is completely up to you. You can return a range between 2 days or you can bring back 7 days. The range can't bring back any data that exceeds 7 days, e.g 1st January - 7th January will work **_ but _** 1st January - 8th -January won't work and will return back the default date.

The date can be years from now, 1st Jan 2032 for example will bring back data from that year within the date range.

### Please note - this is a demo key, if the app doesnt work properly, chances are, it will have timed out. It resets every hour.
