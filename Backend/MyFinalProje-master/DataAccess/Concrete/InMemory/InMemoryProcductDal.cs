using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace DataAccess.Concrete.InMemory
{
    public class EntityFrameworkProductDal : IProductDal
    {
        List<Product> _products;
        public EntityFrameworkProductDal()
        {
            _products = new List<Product>{
                new Product{ ProductId=1,CategoryId=1,ProductName="Bardak",UnitPrice=15,UnitsInStock=15 },
                new Product{ ProductId=2,CategoryId=1,ProductName="Kamera",UnitPrice=500,UnitsInStock=3 },
                new Product{ ProductId=3,CategoryId=2,ProductName="Telefon",UnitPrice=1500,UnitsInStock=2 },
                new Product{ ProductId=4,CategoryId=2,ProductName="Klavye",UnitPrice=150,UnitsInStock=65 },
                new Product{ ProductId=5,CategoryId=2,ProductName="Fare",UnitPrice=1500,UnitsInStock=1 }
            };
        }
        public void Add(Product product)
        {
            _products.Add(product);
        }

        public void Delete(Product product)
        {
            Product producToDelete = null;
            //Linq => Language internal query
            producToDelete=_products.SingleOrDefault(p=>p.CategoryId==product.CategoryId);
            //Normal
            //foreach (var p in _products)
            //{
            //    if (product.CategoryId==p.CategoryId)
            //    {
            //        producToDelete = p;
            //    }
            //}
            _products.Remove(producToDelete);
           // _products.Remove(product);
        }

        public Product Get(Expression<Func<Product, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public List<Product> GetAll()
        {
            return _products;
        }

        public List<Product> GetAll(Expression<Func<Product, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public List<Product> GetAllByCategory(int categoryId)
        {
           return _products.Where(p => p.CategoryId == categoryId).ToList();
        }

        public List<ProductDetailDto> GetProductDetails()
        {
            throw new NotImplementedException();
        }

        public void Update(Product product)
        {
            Product producToUpdate = null;
            producToUpdate = _products.SingleOrDefault(p => p.CategoryId == product.CategoryId);
            producToUpdate.ProductName = product.ProductName;
            producToUpdate.UnitPrice = product.UnitPrice;
            producToUpdate.UnitsInStock = product.UnitsInStock;
            producToUpdate.CategoryId = product.CategoryId;
        }
    }
}
