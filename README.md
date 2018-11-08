# Telas Bonanza

## How to run in dev mode

For starters, you need to clone this repo somewhere accessible.

Create a virtual environment wherever you want for python in the terminal with
```
$ virtualenv venv
```
And use it with

```
$ venv\Scripts\activate
```
Now, in the virtualenv, go to the cloned folder and execute the following commands

```
$ pip install -r requirements.txt
```
It should install all the modules needed (and used in some way) by the Django project.

Next make the migrations with

```
$ python manage.py makemigrations
```
and then

```
$ python manage.py migrate
```
That should be it for Django, now for npm/yarn.

Inside the cloned folder (doesn't matter if the virtualenv is still activated) execute this to install all the dependencies
```
$ npm install
```

Now, use the following to create a production ready build from React
```
$ yarn build
```
or
```
$ npm build
```
Either way, you should wait a little for it to finish and once it finishes just start the Django server (having the virtualenv activated) with 

```
$ python manage.py runserver
```
