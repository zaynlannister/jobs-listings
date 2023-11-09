import { createSlice } from "@reduxjs/toolkit";

interface Job {
  id: number;
  img: string;
  publishedTime: string;
  position: string;
  isFullTime: boolean;
  country: string;
  company: string;
  tags: Array<string>;
  isNew: boolean;
}

interface JobsStateInterface {
  jobs: Job[];
  filteredJobs: Job[];
  tags: Array<string>;
}

const initialState: JobsStateInterface = {
  jobs: [
    {
      id: 1,
      img: "eyecam-co.svg",
      publishedTime: "1d ago",
      position: "Frontend Developer",
      isFullTime: true,
      country: "USA",
      company: "Eyecam",
      tags: ["Frontend", "Html", "Css", "Js"],
      isNew: true,
    },
    {
      id: 2,
      img: "insure.svg",
      publishedTime: "3d ago",
      position: "Backend Developer",
      isFullTime: false,
      country: "UZB",
      company: "Insure",
      tags: ["Backend", "Node js", "Sql"],
      isNew: false,
    },
    {
      id: 3,
      img: "faceit.svg",
      publishedTime: "3d ago",
      position: "Backend Developer",
      isFullTime: false,
      country: "UZB",
      company: "Faceit",
      tags: ["Node js", "Sql"],
      isNew: false,
    },
    {
      id: 4,
      img: "manage.svg",
      publishedTime: "4d ago",
      position: "Project Manager",
      isFullTime: true,
      country: "Canada",
      company: "Manage",
      tags: ["Excel"],
      isNew: false,
    },
    {
      id: 5,
      img: "loop-studios.svg",
      publishedTime: "7d ago",
      position: "Frontend Developer",
      isFullTime: false,
      country: "USA",
      company: "Loop Studios",
      tags: ["Frontend", "Js", "React"],
      isNew: false,
    },
    {
      id: 6,
      img: "myhome.svg",
      publishedTime: "10d ago",
      position: "Backend Developer",
      isFullTime: false,
      country: "UZB",
      company: "My Home",
      tags: ["Backend", "Node js", "PHP"],
      isNew: false,
    },
  ],
  filteredJobs: [],
  tags: [],
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addTag: (state, action) => {
      if (!state.tags.includes(action.payload)) {
        state.tags.push(action.payload);
      }
    },
    removeTag: (state, action) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    },
    filterJobs: (state, action) => {
      state.filteredJobs = action.payload;
    },
    clearFilter: (state) => {
      state.filteredJobs = [];
      state.tags = [];
    },
  },
});

export const { addTag, removeTag, filterJobs, clearFilter } = jobsSlice.actions;

export default jobsSlice.reducer;
