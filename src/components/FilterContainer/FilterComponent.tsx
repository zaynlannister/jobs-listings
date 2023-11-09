import styled from "styled-components";
import DeletableChip from "../Chip/DeletableChip";

const FilterComponent = () => {
  return (
    <FilterComponentStyled className="w-full bg-white p-6 rounded flex justify-between">
      <div className="flex flex-wrap gap-4">
        <DeletableChip tag="test" />
      </div>
      <div className="flex items-center">
        <a className="font-[600] text-[#7b8e8e] hover:text-[#5ba4a4] transition-all hover:border-b-[#5ba4a4] hover:border-b-[1px] cursor-pointer">
          Clear
        </a>
      </div>
    </FilterComponentStyled>
  );
};

const FilterComponentStyled = styled.div`
  transform: translateY(-35px);
`;

export default FilterComponent;
