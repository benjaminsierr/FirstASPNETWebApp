﻿using FirstASPNETWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstASPNETWebApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("GradeCalc")]
        public IActionResult GradeCalc()
        {
            return View();
        }

        [HttpPost("GradeCalc")]
        public IActionResult GradeCalc (GradeModel model)
        {
            return View();
        }
    }
}
