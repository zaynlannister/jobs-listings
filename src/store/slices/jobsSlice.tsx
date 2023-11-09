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
}

interface JobsStateInterface {
  jobs: Job[];
  filteredJobs: Job[];
  isLoading: boolean;
}

const initialState: JobsStateInterface = {
  jobs: [
    {
      id: 1,
      img: "",
      publishedTime: "1d ago",
      position: "Frontend Dev",
      isFullTime: true,
      country: "USA",
      company: "Google",
      tags: ["Frontend", "Html", "Css", "Js"],
    },
    {
      id: 2,
      img: "",
      publishedTime: "3d ago",
      position: "Backend Developer",
      isFullTime: false,
      country: "UZB",
      company: "EPAM",
      tags: ["Backend", "Node js", "Sql"],
    },
  ],
  filteredJobs: [],
  isLoading: false,
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
});

export const {} = jobsSlice.actions;

export default jobsSlice.reducer;
