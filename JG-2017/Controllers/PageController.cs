using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JG_2017.Controllers
{
    public class PageController : Controller
    {

        private string _lang;
        public PageController()
        {
            if(JG_2017.Resources.Global.Home == "Home")
            {
                ViewBag.LangEng = "lang-activeted";
                ViewBag.LangPt = "";
            }
            else
            {
                ViewBag.LangEng = "";
                ViewBag.LangPt = "lang-activeted";
            }
        }


        // GET: Page
        public ActionResult Home()
        {
            ViewBag.TitleHeader = Resources.Global.Home.ToUpper();
            return View();
        }

        // GET: Page
        public ActionResult AboutMe()
        {
            ViewBag.TitleHeader = Resources.Global.About_me.ToUpper();
            return View();
        }

        // GET: Page
        public ActionResult Skills()
        {
            ViewBag.TitleHeader = Resources.Global.Skills.ToUpper();
            return View();
        }

        // GET: Page
        public ActionResult Portfolio()
        {
            ViewBag.TitleHeader = Resources.Global.Portfolio.ToUpper();
            return View();
        }

        // GET: Page
        public ActionResult Contact()
        {
            ViewBag.TitleHeader = Resources.Global.Contact.ToUpper();
            return View();
        }
    }
}