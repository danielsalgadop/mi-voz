# a-voces

Manager for actors/actress known as owner, to store contacts, companies, documents and recordings. Also it has a public interface so they can show their work

## Despcription


## Page Actors

- Owner: is refered as owner in this document is the only one with acces to Private Zone
- Person: contact with interest for owner
- Companiy: can contain n persons. Has interest for owner
- Document: text with interest for owner
- Recording: audio recorded by Owner

## Zones

- Public Area
	- owner has basic page with info
	- published recordings
	- contact, form and social networks links

- Private Area (owner must be loged in)
	- person CRUD
		- added/delet from company
	- company CRUD
		- add/delete presons
	- documents CRUD
		- recorded version [0-n]: 0 means not recorded
	- recorings CRUD
		- asociated to document [0-n]: 0 means not associated to document, n meanas id_document

## TODO

- rename person as contact
- Login system
- database schema



# BACKLOG

- add personProposal from public Area: anonymous user can ask for a connection
- add documentProposal from public Area: anonymous user can ask to upload documento (to be 'locutado')
- add companyProposal from public Area: anonymouns company can ask for a connection
