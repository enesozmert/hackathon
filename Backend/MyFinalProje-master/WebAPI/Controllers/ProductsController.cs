using Business.Abstract;
using Business.BusinessAspects.Autofac;
using Business.Concrete;
using DataAccess.Concrete.EntityFramework;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        //naming convention
        //IoC container -- inversion of control
        IProductService _productService;
        //Loosely coupled
        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }
        //AOP önünde sonunda çalışan kod parçacıkları- kodları iyileştirme
        [HttpGet("getall")]
        public IActionResult Get()
        {
            //Swagger
            //Depencenty chain--
            Thread.Sleep(1000);
            var result = _productService.GetAll();
            if (result.Success == true)
            {
                return Ok(result);
                //return Create();
            }
            return BadRequest(result);

        }
        //id alabiliriz [HttpGet(id)]
        //id alabiliriz [HttpGet("getall")]
        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _productService.GetById(id);
            if (result.Success == true)
            {
                return Ok(result);
            }
            return BadRequest(result);

        }

        [HttpPost("add")]
        public IActionResult Add(Product product)
        {
            var result = _productService.Add(product);
            if (result.Success == true)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("getbycategory")]
        public IActionResult GetByCategory(int categoryId)
        {
            var result = _productService.GetAllByCategoryId(categoryId);
            if (result.Success == true)
            {
                return Ok(result);
            }
            return BadRequest(result);

        }
    }
}
