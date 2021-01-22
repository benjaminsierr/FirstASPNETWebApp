using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FirstASPNETWebApp.Models
{
    public class GradeModel
    {
        [Required(ErrorMessage = "This field is required")]
        [Range(0,100)]
        public int assignments { get; set; }
        [Required(ErrorMessage = "This field is required")]
        [Range(0, 100)]

        public int group { get; set; }
        [Required(ErrorMessage = "This field is required")]
        [Range(0, 100)]
        public int quizzes { get; set; }
        [Required(ErrorMessage = "This field is required")]
        [Range(0, 100)]
        public int exams { get; set; }
        [Required(ErrorMessage = "This field is required")]
        [Range(0, 100)]
        public int intex { get; set; }
    }
}
