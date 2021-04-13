type experience = {
  id: number;
  company?: string;
  urlCompany?: string;
  title: string;
  description: string;
  technologies?: Array<string>;
};

type formation = {
  id: number;
  school: string;
  schoolUrl: string;
  title: string;
  date: dateFormation;
};

type dateFormation = {
  from: number;
  to: number;
};

type curses = {
  title: string;
  year: number;
};

const experienceList: Array<experience> = [
  {
    id: 1,
    title: "2014 - Present: Private Classes",
    description:
      "Privates classes for ESO and Technologic High School students",
  },
  {
    id: 2,
    title: "2012 - 2015: Basketball Coach",
    description:
      "Assistant Coach Cadet A Sagrat Cor Diputació for three seasons. I was in charge of taking the physical training and the warm-ups of the matches",
  },
  {
    id: 3,
    company: "sogeti",
    urlCompany: "https://www.sogeti.es/",
    title: "Feb 2019 - Jun 2020: Full Stack Dev in",
    description:
      "Full stack dev in Sogeti Labs, working on the SogetiHub project. My duties there were to develop both frontend and backend of the web application working with the agile methodology. Working with vue.js, html5 y scss in the frontend. Working with .Net language and relational and non relational databases in the backend. Moreover, I developed my Final Degree Project here. During my stay in this company I learned how a development team works and the good practices that must be followed for a project to progress correctly.",
    technologies: ["a", "b"],
  },
  {
    id: 4,
    company: "biability",
    urlCompany: "https://www.biability.com/",
    title: "Sep 2020 - Feb 2021: Software Dev in",
    description:
      "Mainly backend developer. My duties there were the development and maintenance of APIs used by the company's clients, working with agile methodology. I used the aws EC2, S3, RDS, and Cloudwatch tools to manage thoseAPIs in the cloud. All of these were written in node.js",
    technologies: ["a"],
  },
];

const formationList: Array<formation> = [
  {
    id: 1,
    school: "sagrat cor diputació",
    schoolUrl: "http://www.sagratcordiputacio.com",
    title: "Technologic High School Degree",
    date: {
      from: 2013,
      to: 2015,
    },
  },
  {
    id: 2,
    school: "fib - upc",
    schoolUrl:
      "https://www.fib.upc.edu/en/studies/bachelors-degrees/bachelor-degree-informatics-engineering",
    title: "Software Engineering Degree",
    date: {
      from: 2015,
      to: 2020,
    },
  },
];

const cursesList: Array<curses> = [
  {
    title: "Android application development",
    year: 2019,
  },
];

export { experienceList, formationList, cursesList, dateFormation };
