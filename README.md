# rent-a-car-api
You were hired to develop a web system that allows to control the rental of cars
for a company. For that, you will need to build an API with the following features:

- Car registration:
    - Register a new car
    - Update a registered car
    - Delete a registered car
    - Retrieve a registered car by its unique identifier
    - List the registered cars. It should be possible to filter the list of
       cars by color and brand.
- Registration of drivers
    - Register a new driver
    - Update a registered driver
    - Delete a registered driver
    - Retrieve a driver registered by his unique identifier
    - List the registered drivers. It should be possible to filter the list of
       drivers by name.
- Using a car
    - Create a registry that represents the use of a car by a
       driver, with a start date and a reason for use.
    - Finalize the use of a car by a driver keeping the completion date
    - List the usage records registered in the system with the driver's name
       and the information of the used car.

Here's a list of which resources you should consider:

- Car
    - Plate
    - Color
    - Brand
- Driver
    - Name
- Using the car
    - Usage initial date
    - Usage end date
    - Driver who used
    - Car which was used
    - Reason for use


## Business rules: 
- A car can only be used by one driver at a time
- A driver who is already using a car cannot use another car at the same time.

## Remarks:
- The API must be developed using Node.js
-  It is recommended that you use ExpressJs as a framework for support
- All database persistance should be done in-memory.


