import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import VacancyContainer from "./VacancyContainer";

const VacancyList = () => {
  const jobsList = useSelector((state: RootState) => state.jobsSlice);

  return (
    <div className="flex flex-col gap-12 mt-10">
      {jobsList.jobs.map((item, index) => (
        <VacancyContainer key={index} {...item} />
      ))}
    </div>
  );
};

export default VacancyList;
