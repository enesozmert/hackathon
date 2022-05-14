using Core.Entities.Concrete;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Business.Constants
{
    public static class Messages
    {
        public static string ProductAdded = "Ürün Eklendi";
        public static string ProductNameInvalid = "Ürün Eklendi";
        public static string ProductListed = "Ürüner listelendi";
        public static string MaintenanceTime = "Sistem bakımda";
        public static string UnitPieceInvalid = "Sistem bakımda";
        public static string ProductCountOfCategoryError = "Bir kategoride en fazla 15 ürün olabilir";
        public static string ProductNameAlreadyExist = "Bu kategoride zaten bu isim var";
        public static string CategoryLimitExceded = "Category sınırını aştınız 15";
        public static string AuthorizationDenied = "Yetkiniz yok";
        public static string UserRegistered="Kayıt başarılı";
        public static string UserNotFound = "Kullanıcı yok";
        public static string PasswordError ="Şifre hatalı";
        public static string SuccessfulLogin="Giriş Başarılı";
        public static string UserAlreadyExists="Kullanıcı...";
        public static string AccessTokenCreated="Accestoken oluşturuldu";
    }
}
