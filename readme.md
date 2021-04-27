This project is intended to be a fairly simple database driven filesharing website with basic login functions.

In the beginning, we are going to make the page work by hosting it through the local network with Xampp- tool, but i've bought a hosting service kit from Hostinger so that we could host it through the domain meemivault.xyz. Following several guides and video serieses, i decided to use Handlebars for templating. I learned handlebars and some simple expressions from here: https://handlebarsjs.com/guide/#what-is-handlebars

--

EDIT: PROJECT HOSTED LOCALLY

Installation steps:

1. Download and install Xampp from here: https://www.apachefriends.org/download.html
2. Clone the repository from Github
3. Locate and save the database file from the cloned Github repository (...meemivault/database/users.sql)
4. Open Xampp and start up MySQL and Apache
5. Run the application with the command NPM START
6. Open up a browser of your choice and navigate to localhost/phpmyadmin
7. Import the previously saved database file to phpmyadmin
8. Test out the application by navigating to localhost:5000 and logging in with the test account (testi@testi.fi, 123)

