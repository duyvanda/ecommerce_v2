#! /bin/bash
echo Hello World!
git clone https://github.com/duyvantest/ecommerce-django-react.git
echo Done Clone
cd ecommerce-django-react
echo Hello World!
py -m venv venv
source venv/Scripts/activate
    /bin/sh -ec 'pip install -r requirements.txt && cd backend && python manage.py runserver &'
    /bin/sh -ec 'cd frontend && npm install && npm start'
echo Done