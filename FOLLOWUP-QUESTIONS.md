Follow Up Questions:
What libraries did you use? Why did you use them?

- Angular 12
- Angular material 
- Rxjs Observables
All above libaries have generally high level functionalities when a developing api connections with lazy loading and setting the data to simple tables without large additional changes or time spending.

If you had more time, what further improvements or new features would you add?

- The api call to the crossref is sometimes slow and requires error checking / repeat.  The table paging is static (100 records) as the Crossref seem not to handle repeating record pulls gracefully.

Which parts are you most proud of? And why?

- The Api call is set from the component router inititalizion.  This means that the data pull to the tables are following app -> home-routing -> data service -> home-component -> home-html.
This platform setup improves the speed and helps to detect and update each part by using each of the application structures for certain purpose (for example the component-routing is automated to collect data before component (home.component.ts) parses / sets tables for the data before html output)

Which parts did you spend the most time with? What did you find most difficult?

- In time the table setup.
- In difficult part: Crossref Api calls seem to have several hicchups when implemented.