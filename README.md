# CannaHome

### Scope: 
Medicine should be accessible for all. As more states legalize medical and recreational use of cannabis, and federal decriminalization on the eventual horizon, more cannabis users are turning to supplying their own medicine. CannaHome provides users an easy and reliable way  to track their plants, watering schedule, and the nutrients provided in their routine. 

### Entity Relationship Diagram(ERD):
![image](https://media.git.generalassemb.ly/user/32534/files/d7b62180-7b80-11eb-9929-8d3bb6a90809)

### Wireframe:
![fpwirefram](https://media.git.generalassemb.ly/user/32534/files/96724180-7b81-11eb-89c9-06190efa2eb2)
### User Stories
#### Sprint 1: Plant CRUD
A user should be able to:
* View a main page, including
** A sitewide header
** Previously added plants
* Ability to add a new plant
* Click on a plant to view:
* Plant details
* Click “edit” on any individual plant, and be redirected to the edit form.
* Click “delete” on any individual plant
** See a pop-up warning that asks user to confirm deletion
** If user confirms, delete the plant
> Bonus: 
* Plants sorted by date planted
* Modals for adding and editing plants

#### Sprint 2: Watering Crud
A user should be able to:
* View a list of waterings on the plant detail page
** See watering date
** See if nutrients were included
* Click on “Add a new watering” to pull up a new watering form.
* Add a new watering for an individual plant.
* Verify that a new watering is successfully tracked for the correct plant.
* Click “edit” to edit the watering details
* Click “delete” on any individual watering
** See a pop-up warning that asks user to confirm deletion
** If user confirms, delete the watering
> Bonus: 
* Sort watering by date
* Modals for adding/editing watering

#### Sprint 3: Plant notes
A user should be able to:
* View plant notes in plant details, in a separate component
** Including timestamp
* Click on “Add a new note” to pull up a new note form.
* Add a new note for an individual plant.
* Verify that a new note is successfully tracked for the correct plant.
* Click “edit” to edit the note content
* Click “delete” on any individual note
** See a pop-up warning that asks user to confirm deletion
** If user confirms, delete the note
> Bonus:
* Notes sorted by date
* Modals for adding/editing notes

#### Sprint 4: 
> Bonuses: 


A user should be able to:
* Navigate to “/” to see a basic landing page with 
** Name of app
** Links to login/sign up
* Sign up for an account
* Log into their account
** Be redirected to their plant page after logging in. 
* Add ability to add plant photos
* Implement third party API to autofill and provide plant information. 
