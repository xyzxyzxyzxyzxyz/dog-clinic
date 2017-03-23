# DogClinic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


----------------------------------------------------------------------------------------

EXERCISE: Dog clinic


service: dogs
			- includes: ref to owner

service: owners

service: next_appointment (by dog)

service: reminder_sender
	- input: dogId




pipe: formattedDogName
	* Format: <dog_name> (<owner>)
			* Uppercase
		- where <owner> : Surnames, Name
			* Uppercase!

component: dogs-table
	- inputs:
		- list<dog>
	- outputs:
		-selected<dog>
			* no selection : null
			* dog selected : dog
	- uses: pipe "formattedDogName"

component: dog-panel
	- subcomponents:
		- button "send appointment reminder"
			* Button not active when dog has no next appointment
			* Raises event (output) "sendReminder"
	- inputs:
		- selected dog
	- outputs:
		- event: sendReminder<dogId>
	- trivia:
		- when no dog selected, no content, only message "please select a dog"

page component:
	- subcomponents:
		* dog-panel
			- Shows data for selected dog when a dog is selected in the table
		* dog-table
			- Lists all dogs available
	- inputs:
		- sendReminder<dogId> (from dog-panel)
			* Execute service "reminderSender"
			* Show ok/fail status
	- behaviour:
		- When first loaded:
			1) Load all dogs
			2) Load all users
			3) Combine data and initialize dogs-table



