import styled from "styled-components";

const DeletableChip = (props: { tag: string }) => {
  return (
    <DeletableStyledChip className="flex items-stretch transition-all rounded-md cursor-pointer text-[18px]">
      <a className="font-[600] bg-[#effafa] px-2 rounded-s">{props.tag}</a>
      <div className="bg-[#5ba4a4] flex items-center px-2 rounded-e transition-all chip__del">
        <img
          width="10px"
          height="10px"
          src="/assets/images/icon-remove.svg"
          alt=""
        />
      </div>
    </DeletableStyledChip>
  );
};

const DeletableStyledChip = styled.div`
  &:hover {
    .chip__del {
      background-color: #2c3a3a;
    }
  }
`;

export default DeletableChip;
