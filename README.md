# DE-NADA-TECNOLOGIA

Install Dependencies:

npm install

Run the Application:

npm run start:dev

# API Endpoints

## Items

- **POST /api/items**
  - **Description:** Create a new item.
  - **Request Body:** JSON object with item details.

- **GET /api/items**
  - **Description:** Retrieve items

- **PUT /api/items/:id**
  - **Description:** Update an item.
  - **URL Parameters:**
    - `id`: ID of the item to update.
  - **Request Body:** JSON object with updated item details.

- **DELETE /api/items/:id**
  - **Description:** Delete an item.
  - **URL Parameters:**
    - `id`: ID of the item to delete.

## Bills

- **POST /api/bills**
  - **Description:** Create a new bill and update inventory.
  - **Request Body:** JSON object with bill details and items.

- **GET /api/bills**
  - **Description:** Retrieve bills

- **GET /api/bills/:id**
  - **Description:** Get details of a specific bill.
  - **URL Parameters:**
    - `id`: ID of the bill to retrieve.

- **PUT /api/bills/:id**
  - **Description:** Update a bill.
  - **URL Parameters:**
    - `id`: ID of the bill to update.
  - **Request Body:** JSON object with updated bill details.

- **DELETE /api/bills/:id**
  - **Description:** Delete a bill.
  - **URL Parameters:**
    - `id`: ID of the bill to delete.

## Bill Items

- **POST /api/bill-items**
  - **Description:** Add a new bill item.
  - **Request Body:** JSON object with bill item details.

- **GET /api/bill-items**
  - **Description:** Retrieve bill items.

- **GET /api/bill-items/:id**
  - **Description:** Get details of a specific bill item.
  - **URL Parameters:**
    - `id`: ID of the bill item to retrieve.

- **PUT /api/bill-items/:id**
  - **Description:** Update a bill item.
  - **URL Parameters:**
    - `id`: ID of the bill item to update.
  - **Request Body:** JSON object with updated bill item details.

- **DELETE /api/bill-items/:id**
  - **Description:** Delete a bill item.
  - **URL Parameters:**
    - `id`: ID of the bill item to delete.
