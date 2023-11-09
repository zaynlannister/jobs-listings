import styled from "styled-components";
import DeletableChip from "../Chip/DeletableChip";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { clearFilter } from "../../store/slices/jobsSlice";

const FilterComponent = () => {
  const tags = useSelector((state: RootState) => state.jobsSlice.tags);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearFilter());
  };

  return (
    <FilterComponentStyled
      className={`w-full bg-white p-6 rounded flex justify-between ${
        !tags.length ? "invisible-block" : ""
      }`}
    >
      <div className="flex flex-wrap gap-4">
        {tags.map((item, index) => (
          <DeletableChip key={index} tag={item} />
        ))}
      </div>
      <div className="flex items-center">
        <a
          onClick={handleClear}
          className="font-[600] text-[#7b8e8e] hover:text-[#5ba4a4] transition-all hover:border-b-[#5ba4a4] hover:border-b-[1px] cursor-pointer"
        >
          Clear
        </a>
      </div>
    </FilterComponentStyled>
  );
};

const FilterComponentStyled = styled.div`
  transform: translateY(-35px);
  transition: 500ms all;

  &.invisible-block {
    opacity: 0;
    transform: translateY(-100px);
  }
`;

export default FilterComponent;
