using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JG_2017.Controllers
{
    public class ConfigController : Controller
    {
        /// <summary>
        /// Function which set up the language
        /// </summary>
        /// <param name="Languageabbreviation"></param>
        /// <param name="Ac"></param>
        /// <returns></returns>
        public ActionResult ChangeLanguage(string Languageabbreviation, string Ac)
        {
            return RedirectToRoute("DefaultLocalized", new { lang = Languageabbreviation, controller = "Page", action = Ac });
        }
    }
}