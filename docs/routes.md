# PUBLIC_ZONE
get:/


# PRIVATE_ZONE

## getters
get:owner

get:contact

get:contact/{id}

get:company

get:company/{id}

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
get:admin

get:login

get:fresh-start


