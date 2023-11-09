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
      img: "insure.svg",
      publishedTime: "3d ago",
      position: "Backend Developer",
      isFullTime: false,
      country: "UZB",
      company: "Insure",
      tags: ["Node js", "Sql"],
      isNew: true,
    },
  ],
  filteredJobs: [],
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
});

export const {} = jobsSlice.actions;

export default jobsSlice.reducer;
