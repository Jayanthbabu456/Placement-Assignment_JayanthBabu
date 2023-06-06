# What is JWT and what we can achieve with that create a minor project with jwt

## Login and sign up

## Add authentication using jw

## To use Postman for making requests to the routes you mentioned, follow these steps:

## 1. Register a User:

## - Set the request method to POST.

## - Enter the URL: `http://localhost:{port_no}/register` (replace `{port_no}` with your server's port number).

## - In the request body, provide the necessary user registration details (e.g., name, email, password) as JSON.

## - Click the "Send" button to send the request to the server.

## 2. Log in:

## - Set the request method to POST.

## - Enter the URL: `http://localhost:{port_no}/login` (replace `{port_no}` with your server's port number).

## - In the request body, provide the user's login credentials (e.g., email, password) as JSON.

## - Click the "Send" button to send the request to the server.

## - Upon successful login, you should receive a response containing a JWT token.

## 3. Access the Dashboard:

## - Set the request method to GET.

## - Enter the URL: `http://localhost:{port_no}/dashboard` (replace `{port_no}` with your server's port number).

## - In the request headers, add an Authorization header with the value "Bearer <token>", where `<token>` is the JWT token received during login.

## - Click the "Send" button to send the request to the server.

## - If the JWT token is valid and the user is authenticated, you will receive a response containing the details of the dashboard.

## Ensure that you have your server running on the specified port number and that you replace `{port_no}` with the appropriate value. Adjust the request body and headers according to the expected data and authentication requirements of your server.
