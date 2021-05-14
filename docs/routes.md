# PUBLIC_ZONE
get:/


# PRIVATE_ZONE

## getters
get:owner main entry for private zone
get:owner/details
get:contact         list of contacts
get:contact/{id}    detail 1 contact
get:company         list cof comapanies
get:company/{id}    detail of {id} company
get:document
get:document/{id}
get:recording
get:recording/{id}

## setters
post:contact
post:contact/{id}/to/company{id}
post:company
post:company/{id}/with/contact/[{ids}]
post:document
post:recording

## system
get:login comes from '/'
get:fresh-start comes form '/' when there is no owner


post:user/register  comes from fresh-start
post:contact/proposal
post:contact/register  comes from contact-proposal
post:company/proposal
post:company/register  comes from contact-proposal