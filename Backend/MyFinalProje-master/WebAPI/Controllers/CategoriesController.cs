using Business.Abstract;
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
    public class CategoriesController : ControllerBase
    {
        //naming convention
        //IoC container -- inversion of control
        ICategoryService _categoryService;
        //Loosely coupled
        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }
        //AOP önünde sonunda çalışan kod parçacıkları- kodları iyileştirme
        [HttpGet("getall")]
        public IActionResult Get()
        {
            //Swagger
            //Depencenty chain--
            Thread.Sleep(1000);
            var result = _categoryService.GetAll();
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
            var result = _categoryService.GetById(id);
            if (result.Success == true)
            {
                return Ok(result);
            }
            return BadRequest(result);

        }
    }
}
