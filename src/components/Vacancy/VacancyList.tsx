import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import VacancyContainer from "./VacancyContainer";
import { filterJobs } from "../../store/slices/jobsSlice";

const VacancyList = () => {
  const dispatch = useDispatch();
  const jobsList = useSelector((state: RootState) => state.jobsSlice);

  const filteredData = jobsList.jobs.filter((item) =>
    jobsList.tags.some((tag) => item.tags.includes(tag))
  );

  React.useEffect(() => {
    if (filteredData.length) {
      dispatch(filterJobs(filteredData));
    }
  }, [filteredData.length]);

  const renderedData =
    filteredData.length > 0 ? jobsList.filteredJobs : jobsList.jobs;

  return (
    <div className="flex flex-col gap-12 mt-10 transition-all duration-1000">
      {renderedData.map((item, index) => (
        <VacancyContainer key={index} {...item} />
      ))}
    </div>
  );
};

export default VacancyList;
