!!! Nquest Backend server using socket.io

!! To run this is in your system

1) Install Docker
2) Run the following command to get the postgres server running
   ```shell
   docker compose up -d
   ```
3) Install the npm packages
   ```shell
   npm install
   ```
4) run the server
   ```shell
   node index.js
   ```

!! Uses socket.io to communicate with the frontend system, Prisma to communicate with Postgres SQL
!! Uses express to handle api request
