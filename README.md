# Example How To Use Inversify To Apply Dependency Injection On ExpressJS

- Flow: Controller --> Service --> Repository

- We combine all dependency in "container", then resolve and export the controller to use in routes

## Usage
```
npm run dev
```

```
curl http://localhost:3000/ticket
```
Flow: TicketController.findOne --> TicketService.findOne --> TicketRepository.findOne --> Model.Ticket

Result:
```
Hello from ticket controller
Hello from ticket service
Hello from ticket repository
```# Express-Base-Source-Inversify
