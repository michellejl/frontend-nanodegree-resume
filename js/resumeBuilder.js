var bio = {
  name: "Michelle Levine",
  role: "Full Stack Web Developer",
  contacts: {
    mobile: "(503) 555-1234",
    email: "michelle@email.com",
    github: "michellejl",
    twitter: "@michellejlevine",
    location: "Portland, Oregon",
    blog: "michellejl.com"
  },
  welcomeMessage: "Hello World! I’m Michelle, a full stack web developer currently in Portland, Oregon. Nothing excites me more than immersing myself in a good challenge or a great book. When not coding, I am most likely spending my time on some sort of creative project, getting involved in the local tech community, or exploring the world around me with my trusty Nikon camera.",
  skills: [
    "HTML", "CSS(Sass)", "JavaScript", "jQuery", "Node.js", "Gulp.js", "Git", "Adobe Creative Suite", "Sketch", "Bootstrap", "Zurb Foundation", "Responsive Web Design", "Backbone.js", "Underscore.js", "Angular.js 2", "SQL", "PHP", "WordPress", "Photography", "Graphic Design", "Grunt.js", "Bash Scripting"
  ],
  biopic: "images/me.jpg",
  display: function() {
    prependInfo('#header', [HTMLheaderRole, bio.role])
    prependInfo('#header', [HTMLheaderName, bio.name])

    // Adds contact information
    var contactsArray = [
      [HTMLmobile, bio.contacts.mobile],
      [HTMLemail, bio.contacts.email],
      [HTMLgithub, bio.contacts.github],
      [HTMLtwitter, bio.contacts.github],
      [HTMLlocation, bio.contacts.github]
    ]
    // Adds blog contact information IF it has been provided
    if (bio.contacts.blog) { contactsArray.push([HTMLblog, bio.contacts.blog]) }

    appendInfo('#topContacts', contactsArray)
    // TODO: use HTMLcontactGeneric from helper.js
    // to add other contact information if provided.

    appendInfo('#header', [[HTMLbioPic, bio.biopic],
                           [HTMLwelcomeMsg, bio.welcomeMessage]])

    // Adds Skills section:
    $("#header").append(HTMLskillsStart)
    var mySkills = bio.skills
    var formattedSkills = mySkills.forEach(function(skill) {
      appendInfo('#skills', [HTMLskills, skill])
    })
  }
}


var education = {
  school: [
    {
      name: "Tech Academy",
      location: "Portland, Oregon",
      degree: "Bootcamp",
      majors: ["Full Stack Development"],
      dates: "03/15 - 02/16",
      url: "https://learncodinganywhere.com/"
    }
  ],
  onlineCourses: [
      {
        title: "Front End Nanodegree",
        school: "Udacity",
        dates: "July 2017 - Present",
        url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
      },
      {
        title: "Full Stack Nanodegree",
        school: "Udacity",
        dates: "July 2017 - Present",
        url: "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
      },
      {
        title: "Web Design Track",
        school: "Treehouse",
        dates: "2016",
        url: "https://teamtreehouse.com/tracks/web-design"
      },
      {
        title: "Front End Web Development Track",
        school: "Treehouse",
        dates: "2016",
        url: "https://teamtreehouse.com/tracks/front-end-web-development"
      },
      {
        title: "WordPress: Building Themes from Scratch Using Underscores",
        school: "Lynda",
        dates: "2016",
        url: "https://www.lynda.com/WordPress-tutorials/WordPress-Building-Themes-from-Scratch-Using-Underscores/491704-2.html"
      },
      {
        title: "JavaScript Essential Training",
        school: "Lynda",
        dates: "2016",
        url: "https://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/574716-2.html"
      },
      {
        title: "jQuery Essential Training",
        school: "Lynda",
        dates: "2016",
        url: "https://www.lynda.com/jQuery-tutorials/jQuery-Essential-Training/494389-2.html"
      },
      {
        "title": "Bootstrap 3 Essential Training",
        "school": "Lynda",
        "dates": "2016",
        "url": "https://www.lynda.com/Bootstrap-tutorials/Bootstrap-3-Essential-Training/417641-2.html"
      },
      {
        title: "Arcade Classics in JavaScript on Canvas",
        school: "Udemy",
        dates: "2016",
        url: "https://www.udemy.com/code-your-first-game/learn/v4/overview"
      },
      {
        title: "JavaScript: Understanding the Weird Parts",
        school: "Udemy",
        dates: "2016",
        url: "https://www.udemy.com/understand-javascript/learn/v4/overview"
      },
      {
        title: "Practical PHP: Master the Basics and Code Dynamic Websites",
        school: "Udemy",
        dates: "2016",
        url: "https://www.udemy.com/code-dynamic-websites/learn/v4/overview"
      },
      {
        title: "Wordpress Theme Development with Bootstrap",
        school: "Udemy",
        dates: "2016",
        url: "https://www.udemy.com/bootstrap-to-wordpress/learn/v4/overview"
      },
      {
        title: "Sass Workflow",
        school: "Udemy",
        dates: "2016",
        url: "https://www.udemy.com/sass-workflow/learn/v4/overview"
      }
  ],
  display: function() {
    var schoolEducation = education.school
    var formattedSchoolEducation = schoolEducation.map(function(school) {
      // Handles the possibility of multipl majors
      if (school.majors.length > 1) {
        var majors = school.majors.join(', ')
      } else {
        var majors = school.majors.join('')
      }
      // Create formatted school html
      formattedSchool = HTMLschoolName.replace("%data%", school.name)
                      + HTMLschoolDegree.replace("%data%", school.degree)
                      + HTMLschoolDates.replace("%data%", school.dates)
                      + HTMLschoolLocation.replace("%data%", school.location)
                      + HTMLschoolMajor.replace("%data%", majors)
      return formattedSchool
    })
    formattedSchoolEducation.forEach(function(school) {
      $("#education").append($(HTMLschoolStart).append(school))
    })
  }
}


// var onlineEducation = education.online
// var formattedOnlineEducation = onlineEducation.map(function(course) {
//   formattedCourse = HTMLonlineTitle.replace("%data%", course.title)
//                   + HTMLonlineSchool.replace("%data%", course.school)
//                   + HTMLonlineDates.replace("%data%", course.dates)
//                   + HTMLonlineURL.replace("%data%", course.url)
//   return formattedCourse
// })
//
//
//
// $("#education").append(HTMLonlineClasses)
//
// formattedOnlineEducation.forEach(function(course) {
//   $("#education").append($(HTMLschoolStart).append(course))
// })




// dataArray should be an array or a multidimensional array containing the
// template and the data
function appendInfo(element, dataArray) {
  if (dataArray.length === 2 && typeof dataArray[0] !== 'object') {
    $(element).append(dataArray[0].replace('%data%', dataArray[1]))
  } else {
    for (var i = 0; i < dataArray.length; i++) {
      $(element).append(dataArray[i][0].replace('%data%', dataArray[i][1]))
    }
  }
}

function prependInfo(element, dataArray) {
  if (dataArray.length === 2 && typeof dataArray[0] !== 'object') {
    $(element).prepend(dataArray[0].replace('%data%', dataArray[1]))
  } else {
    for (var i = 0; i < dataArray.length; i++) {
      $(element).prepend(dataArray[i][0].replace('%data%', dataArray[i][1]))
    }
  }
}
// TODO: combine prependInfo() and appendInfo() into formatAndDisplay()
// function formatAndDisplay() {}


function displayAll() {
  bio.display();
  education.display();
}

displayAll();


var work = {
  jobs: [{
    "employer": "Stackery",
    "title": "Contract Software Engineer at a startup working in the serverless space",
    "dates": "March 2017 - July 2017",
    "location": "Portland, Oregon",
    "description": "Contract role where I built and designed features from wireframes all the way through to creating the backend API."
  },
  {
    "employer": "Girl Friend Factor",
    "title": "Freelance Web Developer and Graphic Designer for a Non-Profit",
    "dates": "September 2016 – Present",
    "location": "Remote",
    "description": "Recreated website from scratch using WordPress."
  },
  {
    "employer": "Biamp",
    "title": "Contract Front End Web Developer Working on Enterprise Software",
    "dates": "August 2016 - January 2016",
    "location": "Portland, Oregon",
    "description": "Converted non-web-based software to new web based interface"
  },
  {
    "employer": "Treehouse",
    "title": "Mentor & Code Reviewer for Front End Web Development Tech Degree Program",
    "dates": "April 2016 - September 2016",
    "location": "Remote",
    "description": "Collaborated with students in one-on-one video sessions to help them learn how to solve problems and debug their code."
  },
  {
    "employer": "Tech Academy",
    "title": "Instructor for Full Stack Development Bootcamp",
    "dates": "June 2015 - January 2016",
    "location": "Portland, Oregon",
    "description": "Worked directly with local and remote students to ensure the mastery of languages across the stack as part of a software development bootcamp."
  },
  {
    "employer": "Graphtek Interactive",
    "title": "Junior Developer for Creative Web Agency",
    "dates": "January 2014 - March 2015",
    "location": "Palm Desert, California",
    "description": "Worked within a legacy system to perform updates to both the content and the structure of various client websites."
  }]
}


function displayBio() {}

function displayWork() {
  var workExperience = work.jobs
  workExperience.forEach(function(position) {
    var formattedPosition = HTMLworkEmployer.replace("%data%", position.employer)
                          + HTMLworkTitle.replace("%data%", position.title)
                          + HTMLworkDates.replace("%data%", position.dates)
                          + HTMLworkLocation.replace("%data%", position.location)
                          + HTMLworkDescription.replace("%data%", position.description)
    $("#workExperience").append($(HTMLworkStart).append(formattedPosition))
  })
}

// displayWork()

$(document).click(function(loc) {
  var x = loc.pageX
  var y = loc.pageY
  logClicks(x, y)
});


/*


// var workExperience = work.jobs
// var formattedWork = workExperience.map(function(position) {
//   formattedPosition = HTMLworkEmployer.replace("%data%", position.employer)
//                     + HTMLworkTitle.replace("%data%", position.title)
//                     + HTMLworkDates.replace("%data%", position.dates)
//                     + HTMLworkLocation.replace("%data%", position.location)
//                     + HTMLworkDescription.replace("%data%", position.description)
//   return formattedPosition
// })



// $("#header").prepend(formattedRole)
// $("#header").prepend(formattedName)
// $("#topContacts").append(formattedGithub)
// $("#topContacts").append(formattedTwitter)
// $("#topContacts").append(formattedBlog)
// $("#topContacts").append(formattedLocation)



// formattedWork.forEach(function(position) {
//   $("#workExperience").append($(HTMLworkStart).append(position))
// })


*/
