let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",

    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

// 1.

courses.find((course) => {
  if (course.CourseId == "PROG200") {
    console.log(`${course.CourseId} starts on ${course.StartDate}`);
  }
});

// 2.

courses.find((course) => {
  if (course.CourseId == "PROJ500") {
    console.log(`${course.Title} has ID of ${course.CourseId}`);
    // return course.Title;
  }
});

// 3.

courses.filter((course) => {
  if (course.Fee <= 50) {
    console.log(`${course.Title} costs $${course.Fee}`);
  }
});

// 4.

courses.filter((course) => {
  if (course.Location == "Classroom 1") {
    console.log(`${course.Title} in ${course.Location}`);
  }
});
