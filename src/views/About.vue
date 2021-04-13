<template>
  <div class="about">
    <div class="flex">
      <h1>about me</h1>
      <div class="abstract">
        <h3>sergi serrano casalins</h3>
        <div>
          <img src="../assets/CV_photo.jpg" alt="" />
        </div>
        <p>
          Graduate in Computer Engineering from the Polytechnic University of
          Catalonia (UPC - FIB) in the specialty of Software Engineering. I
          speak native Catalan and Spanish and I have the B2 english level,
          currently studying for C1.
        </p>
        <p>
          I adapt quickly to the work environment and always try to bring my
          point of view within the development team.
        </p>
        <p>
          In my free time I like to play sports, especially basketball. I have a
          driving license (B) and my own vehicle.
        </p>
      </div>
      <div class="skills">
        <h3>skills</h3>
        <div class="computing-skills">
          <h4>computing skills</h4>
          <ul>
            <li>
              Programing languages:
              <ul>
                <li>JavaScript & TypeScript</li>
                <li>C++ & C</li>
                <li>Golang</li>
                <li>Basic knowledge: Java, C#, Python</li>
              </ul>
            </li>
            <li>
              Frontend frameworks:
              <ul>
                <li>Vue.js (2+ years experience)</li>
                <li>React (1 year experience)</li>
              </ul>
            </li>
            <li>
              Experience with AWS:
              <ul>
                <li>EC2</li>
                <li>S3</li>
                <li>RDS</li>
                <li>CloudWatch</li>
              </ul>
            </li>
            <li>
              Used to working with <i>Agile</i> methodology and <i>Git</i>.
            </li>
          </ul>
        </div>
        <div class="personal-skills">
          <h4>personal skills</h4>
          <ul>
            <li>Entrepreneurship</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Eager to learn</li>
          </ul>
        </div>
      </div>
      <div class="experience">
        <h3>Experience</h3>
        <div v-for="job in expList" :key="job.title">
          <ExperienceJobs
            :id="job.id"
            :title="job.title"
            :description="job.description"
            :technologies="job.technologies ? job.technologies : undefined"
            :company="job.company ? job.company : undefined"
            :urlCompany="job.urlCompany ? job.urlCompany : undefined"
          ></ExperienceJobs>
        </div>
      </div>
      <div class="studies">
        <h3>formation</h3>
        <div class="studies">
          <h4>studies</h4>
          <div v-for="formation in formationList" :key="formation.title">
            <FormationStudies
              :id="formation.id"
              :title="formation.title"
              :school="formation.school"
              :schoolUrl="formation.schoolUrl"
              :date="formation.date"
            ></FormationStudies>
          </div>
        </div>
        <div class="curses">
          <h4>curses</h4>
          <div v-for="curses in cursesList" :key="curses.title">
            <FormationCurses
              :title="curses.title"
              :year="curses.year"
            ></FormationCurses>
          </div>
        </div>
      </div>
      <a href="./SergiSerrano_CV.pdf" target="_blank" class="cv"
        >.pdf format cv</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ExperienceJobs from "@/components/ExperienceJobs.vue";
import FormationStudies from "@/components/FormationStudies.vue";
import FormationCurses from "@/components/FormationCurses.vue";
import { experienceList, formationList, cursesList } from "@/data/data";

@Component({
  components: {
    ExperienceJobs,
    FormationStudies,
    FormationCurses,
  },
})
export default class About extends Vue {
  expList = experienceList;
  formationList = formationList;
  cursesList = cursesList;
}
</script>

<style scoped>
div.about {
  padding: 60px 0;
  width: 100%;
}

.about p {
  margin-top: 0;
}

.abstract h3 {
  display: flex;
  flex-direction: row;
}

.abstract h3::after {
  text-transform: none;
  content: "23 years old";
  font-size: 0.7rem;
  margin-left: 2em;
  color: var(--color-soft-1);
  align-self: center;
  font-weight: normal;
  border: 1px solid var(--color-soft-1);
  border-radius: 10px;
  padding: 0.1em 0.4em 0.2em;
}

.about > div {
  color: var(--color-soft-1);
}

.about > div:not(:first-child) {
  margin-top: 2em;
}

.abstract {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.abstract div {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--color-soft-1);
  margin: 2em auto;
}

.abstract div img {
  width: 100%;
  object-fit: cover;
}

.abstract p {
  color: var(--color-soft-1);
  text-align: justify;
}

div > ul > li:not(:last-child) {
  margin-bottom: 15px;
}

ul {
  padding-left: 1.5em;
  text-align: left;
}

ul li::marker {
  font-size: 0.8rem;
}

div.computing-skills {
  margin-bottom: 50px;
}

div.flex > div:not(:last-child) {
  margin-bottom: 50px;
}

div.studies {
  margin-bottom: 50px;
}

a.cv {
  background-color: var(--color-soft-2);
  text-decoration: none;
  display: block;
  padding: 1em 2em;
  text-transform: uppercase;
  color: var(--color-dark-2);
  font-weight: bold;
  border: 2px solid transparent;
  box-shadow: 0px 0px rgba(0, 0, 0, 0.4);
  transition: transform 500ms ease-in-out, box-shadow 500ms ease-in-out;
  border-radius: 10px;
}

a.cv:hover {
  border: 2px solid var(--color-soft-1);
  transform: translateY(-10px);
  box-shadow: 0px 10px rgba(0, 0, 0, 0.4);
}

@media screen and (min-width: 800px) {
  div.about {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 180px);
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 0 30px 0 0;
  }

  div.about::-webkit-scrollbar {
    width: 5px;
  }

  div.about::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }

  div.about::-webkit-scrollbar-thumb {
    background-color: var(--color-medium);
    border-radius: 20px;
  }
}
</style>
