# AWS-DynamoDB-Project

AWS-DynamoDB-Project is a project that demonstrates user authentication using JSON Web Tokens (JWT) and bcrypt.js, with user data stored in Amazon DynamoDB. It showcases the integration of authentication mechanisms with DynamoDB, utilizing the power of AWS services.

## Features

- User registration and login functionality
- Secure password storage using bcrypt.js
- JSON Web Tokens (JWT) for user authentication
- Integration with Amazon DynamoDB to store user data
- API endpoints for user registration, login, and authentication

## Technologies Used

- Node.js
- Express.js
- JSON Web Tokens (JWT)
- bcrypt.js
- Amazon DynamoDB

## Installation

1. Clone the repository: `git clone https://github.com/SomnathKar000/AWS-DynamoDB-Project`
2. Navigate to the project directory: `cd AWS-DynamoDB-Project`
3. Install the dependencies: `npm install`

## Configuration

To use the AWS DynamoDB and authentication features in this project, you need to configure the necessary settings. Follow these steps:

1. Sign in to the AWS Management Console.
2. Set up an Amazon DynamoDB table to store user data.
3. Obtain the necessary AWS credentials (access key ID and secret access key) with appropriate permissions to access DynamoDB.
4. Update the `.env` file in the project root directory with your AWS credentials and DynamoDB table details:

- AWS_ACCESS_KEY_ID=your-access-key-id
- AWS_SECRET_ACCESS_KEY=your-secret-access-key
- TABLE_NAME=your-dynamodb-table-name
- AWS_DEFAULT_REGIEN=your-aws-regien
- JWT_SECRET=jwt-secret-value

## Usage

1. Start the server: `npm start`
2. Use an API testing tool (such as Postman) to interact with the authentication endpoints.

## API Routes

The project includes the following API routes:

- `GET /api`: Get user data
- `POST /api/create`: Create user data
- `PATCH /api/update`: Update user data
- `DELETE /api/delete`: Delete user data

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## Contact

For more information or questions, feel free to reach out:

- Email: somnathkar2023@gmail.com
- LinkedIn: [Somnath Kar](https://www.linkedin.com/in/somnath-kar-aa73aa1a3)
- GitHub: [SomnathKar000](https://github.com/SomnathKar000)
