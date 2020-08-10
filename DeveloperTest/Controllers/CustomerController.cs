using System;
using Microsoft.AspNetCore.Mvc;
using DeveloperTest.Business.Interfaces;
using DeveloperTest.Models;

namespace DeveloperTest.Controllers
{
    [ApiController, Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService CustomerService;

        public CustomerController(ICustomerService CustomerService)
        {
            this.CustomerService = CustomerService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(CustomerService.GetCustomers());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var Customer = CustomerService.GetCustomer(id);

            if (Customer == null)
            {
                return NotFound();
            }

            return Ok(Customer);
        }

        [HttpPost]
        public IActionResult Create(BaseCustomerModel model)
        {
            var Customer = CustomerService.CreateCustomer(model);

            return Created($"Customer/{Customer.CustomerId}", Customer);
        }
    }
}