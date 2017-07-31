var bio = {
  name: "Michelle Levine",
  role: "Full Stack Web Developer",
  contactInfo: {
    github: "michellejl",
    twitter: "@michellejlevine",
    location: "Portland, Oregon",
    blog: "michellejl.com"
  },
  picture: "images/me.jpg",
  welcomeMessage: "Hello World! I’m Michelle, a full stack web developer currently in Portland, Oregon. Nothing excites me more than immersing myself in a good challenge or a great book. When not coding, I am most likely spending my time on some sort of creative project, getting involved in the local tech community, or exploring the world around me with my trusty Nikon camera.",
  skills: ["HTML", "CSS(Sass)", "JavaScript", "jQuery", "Node.js", "Gulp.js", "Git", "Adobe Creative Suite", "Sketch", "Bootstrap", "Zurb Foundation", "Responsive Web Design", "Backbone.js", "Underscore.js", "Angular.js 2", "SQL", "PHP", "WordPress", "Photography", "Graphic Design", "Grunt.js", "Bash Scripting" ]
}

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

var education = {
  "schools": [
    {
      "name": "Tech Academy Bootcamp",
      "degree": "Completion Certificate",
      "major": "Full-Stack Software Development",
      "dates": "Graduated: February 2016",
      "location": "Portland, Oregon"
    }
  ],
  "online": [
    {
      "title": "Front End Nanodegree",
      "school": "Udacity",
      "dates": "July 2017 - Present",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Full Stack Nanodegree",
      "school": "Udacity",
      "dates": "July 2017 - Present",
      "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
    },
    {
      "title": "Web Design Track",
      "school": "Treehouse",
      "dates": "2016",
      "url": "https://teamtreehouse.com/tracks/web-design"
    },
    {
      title: "Front End Web Development Track",
      school: "Treehouse",
      dates: "2016",
      url: "https://teamtreehouse.com/tracks/front-end-web-development"
    },
    {
      "title": "WordPress: Building Themes from Scratch Using Underscores",
      "school": "Lynda",
      "dates": "2016",
      "url": ""
    },
    {
      "title": "JavaScript Essential Training",
      "school": "Lynda",
      "dates": "2016",
      "url": ""
    },
    {
      "title": "jQuery Essential Training",
      "school": "Lynda",
      "dates": "2016",
      "url": ""
    },
    {
      "title": "Up and Running with Bootstrap 3",
      "school": "Lynda",
      "dates": "2016",
      "url": ""
    },
    {
      "title": "Up and Running with Python",
      "school": "Lynda",
      "dates": "2016",
      "url": ""
    },
    {
      "title": "Arcade Classics in JavaScript on Canvas",
      "school": "Udemy",
      "dates": "2016",
      "url": ""
    },
    {
      "title": "JavaScript: Understanding the Weird Parts",
      "school": "Udemy",
      "dates": "2016",
      "url": ""
    },
    {
      "title": "Practical PHP: Master the Basics and Code Dynamic Websites",
      "school": "Udemy",
      "dates": "2016",
      "url": ""
    },
    {
      "title": "Wordpress Theme Development with Bootstrap",
      "school": "Udemy",
      "dates": "2016",
      "url": ""
    }]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name)
var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github)
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter)
var formattedBlog = HTMLblog.replace("%data%", bio.contactInfo.blog)
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location)
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture)
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)

var mySkills = bio.skills
var formattedSkills = mySkills.map(function(skill) {
  formattedSkill = HTMLskills.replace("%data%", skill)
  formattedSkill = $(HTMLworkStart).append(formattedSkill)
  return formattedSkill
})

var workExperience = work.jobs
var formattedWork = workExperience.map(function(position) {
  formattedPosition = HTMLworkEmployer.replace("%data%", position.employer)
                    + HTMLworkTitle.replace("%data%", position.title)
                    + HTMLworkDates.replace("%data%", position.dates)
                    + HTMLworkLocation.replace("%data%", position.location)
                    + HTMLworkDescription.replace("%data%", position.description)
  return formattedPosition
})

var onlineEducation = education.online
var formattedOnlineEducation = onlineEducation.map(function(course) {
  formattedCourse = HTMLonlineTitle.replace("%data%", course.title)
                  + HTMLonlineSchool.replace("%data%", course.school)
                  + HTMLonlineDates.replace("%data%", course.dates)
                  + HTMLonlineURL.replace("%data%", course.url)
  return formattedCourse
})

var schoolEducation = education.schools
var formattedSchoolEducation = schoolEducation.map(function(school) {
  formattedSchool = HTMLschoolName.replace("%data%", school.name)
                  + HTMLschoolDegree.replace("%data%", school.degree)
                  + HTMLschoolDates.replace("%data%", school.dates)
                  + HTMLschoolLocation.replace("%data%", school.location)
                  + HTMLschoolMajor.replace("%data%", school.major)
  return formattedSchool
})

$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)
$("#topContacts").append(formattedGithub)
$("#topContacts").append(formattedTwitter)
$("#topContacts").append(formattedBlog)
$("#topContacts").append(formattedLocation)
$("#header").append(formattedBioPic)
$("#header").append(formattedWelcomeMessage)
$("#header").append(HTMLskillsStart)
$("#skills").append(formattedSkills)

formattedSchoolEducation.forEach(function(school) {
  $("#education").append($(HTMLschoolStart).append(school))
})

$("#education").append(HTMLonlineClasses)

formattedWork.forEach(function(position) {
  $("#workExperience").append($(HTMLworkStart).append(position))
})

formattedOnlineEducation.forEach(function(course) {
  $("#education").append($(HTMLschoolStart).append(course))
})
