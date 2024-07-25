# user_crud_api

install node modules via 
npm install 

Here are the URLs with `localhost:8000`:
 
- `http://localhost:8000/`
- `http://localhost:8000/getUsers` ->Get reQ on this to get the data in html content 

- `http://localhost:8000/api/getUsers`-> Get Req on this to get the data in json format

- `http://localhost:8000/api/user` ->
Make a post req for this using the json or header format 
example: 
{
   "first_name": "",
   "last_name": "",
   "email": "",
   "gender": "",
   "job_title": ""
}
after entaring the data you will get the data inside the mock data 
`http://localhost:8000/api/getUsers/{ID}` -> make a patch(edit) req. on this to edit the desired user by the id 
the user will get updated accoding to the changes you made 

`http://localhost:8000/api/getUsers/{ID}` -> make a delete req. on this to deleted the desired user with id 


- `http://localhost:8000/api/getUsers/:id` ->make a get request on this to see add the periciuler