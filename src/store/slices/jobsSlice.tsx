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
      position: "Frontend Dev",
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
      isNew: true,
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
