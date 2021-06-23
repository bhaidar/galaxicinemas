### Notes

Routes are just what I call VueJS components that are loaded directly by routes. One of the key reasons for doing this is to provide a very simple way to define chunks, i.e. split up the frontend codebase. For example, a user who is just visiting will never need to load any frontend code that is exclusively required by the backend / dashboard, which in turn will make the site load faster for them.

- `web` contains all of the main website screens viewable by anyone
- `dash` contains all of the admin screens

