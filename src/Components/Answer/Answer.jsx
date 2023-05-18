import React from 'react';

const Answer = () => {
    return (
        <div className='bg-gray-200 border-gray-600 rounded-lg border-2 p-6'>
            <h1 className='text-2xl bg-gray-600 text-white p-4 rounded-lg mb-2'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p >An access token and a refresh token are both used in authentication and authorization systems, often in the context of web or mobile applications. Here's an explanation of what they are, how they work, and where you should store them on the client-side:
                Access Token:
                An access token is a credential that is used to access protected resources on behalf of a user or an application.
                It typically contains information such as the user's identity and permissions.
                Access tokens have a limited lifespan and are issued with an expiration time. Once expired, they can no longer be used to access protected resources.
                Access tokens are commonly used in OAuth 2.0 and OpenID Connect protocols for securing API endpoints.
                Refresh Token:

                A refresh token is a long-lived credential that is used to obtain a new access token when the original access token expires.
                It is typically issued alongside the access token during the initial authentication process. <br />
                When a user logs in or grants authorization to an application, they typically receive an access token and a refresh token.
                The access token is included in each API request to authenticate and authorize the user, while the refresh token is securely stored for future use.
                When the access token expires, the client can send the refresh token to a token endpoint on the server to obtain a new access token without requiring the user to log in again.
                The server validates the refresh token, and if valid, issues a new access token.

            </p>

            <h1 className='text-2xl my-4 bg-gray-600 text-white p-4 rounded-lg mb-2'>Compare SQL and NoSQL databases?</h1>
            <p>SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems with distinct characteristics. Here's a comparison between SQL and NoSQL databases:

                Data Model: <br />

                SQL: SQL databases use a structured data model based on tables with predefined schemas. The data is organized into rows and columns, and relationships between tables are established through foreign key constraints.
                NoSQL: NoSQL databases use various data models, including key-value, document, columnar, and graph models. They are designed to be flexible and schema-less, allowing for dynamic and unstructured data.
                Scalability:

                SQL: SQL databases typically scale vertically by adding more powerful hardware to handle increased load. Vertical scaling has limits and can be costly.
                NoSQL: NoSQL databases are designed for horizontal scalability, allowing them to distribute data across multiple servers. They can handle large amounts of data and high traffic by adding more commodity servers to the cluster.
                Query Language:

                SQL: SQL databases use a standardized query language (SQL) for defining and manipulating data. SQL provides powerful declarative querying capabilities and supports complex join operations, aggregation, and transaction management.
                NoSQL: NoSQL databases often have their own query languages or APIs that are specific to their data models. These query languages may be less expressive than SQL but are optimized for the specific data model and use cases.
            </p>
            <h1 className='text-2xl my-4 bg-gray-600 text-white p-4 rounded-lg mb-2'>What is express js? What is Next JS ?</h1>
            <p>Express.js is a popular web application framework for Node.js. It provides a minimalistic and flexible set of features to build web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware management, and view rendering. It follows the middleware architecture, allowing developers to define custom middleware functions to handle requests and responses. Express.js is widely used in building server-side applications and RESTful APIs due to its simplicity, scalability, and extensive ecosystem of plugins and middleware.

                Next.js, on the other hand, is a framework for building server-rendered React applications. It is built on top of React and Node.js and provides a streamlined and opinionated approach to building full-stack React applications. Next.js offers server-side rendering (SSR) and static site generation (SSG) capabilities, allowing developers to pre-render React components on the server and deliver fully rendered HTML to the client. It also provides features like automatic code splitting, hot module replacement, and serverless deployment. Next.js is often used for building dynamic and SEO-friendly web applications that require server-side rendering or static site generation.</p>
                <h1  className='text-2xl my-4 bg-gray-600 text-white p-4 rounded-lg mb-2'>
                What is MongoDB aggregate and how does it work ?
                </h1>
                <p>In MongoDB, the aggregate method is used to perform advanced data processing and aggregation operations on collections. It allows you to perform complex computations, transformations, and analysis on your data. The aggregate method takes an array of stages as input, with each stage representing a specific operation to be performed on the data.</p>
        </div>
    );
};

export default Answer;