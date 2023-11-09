import styled from "styled-components";
import Chip from "../Chip/Chip";

interface VacancyIterface {
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

const VacancyContainer = (props: VacancyIterface) => {
  return (
    <VacancyStyled className="bg-white flex justify-between items-center p-6 rounded-md relative vacancy">
      <div className="flex">
        <div className="mr-4 vacancy__company-image">
          <img src={`/assets/images/${props.img}`} alt="img" />
        </div>
        <div>
          <div className="flex gap-2 items-center vacancy__company-name">
            <p className="font-[600] text-[18px]">{props.company}</p>
            {props.isNew && (
              <p className="font-[600] bg-[#5ba4a4] text-[#ffff] text-[12px] rounded-full px-2 py-[1px]">
                NEW!
              </p>
            )}
          </div>
          <a className="text-[#2c3a3a] font-[600] text-[21px] cursor-pointer hover:text-[#5ba4a4] transition-all">
            {props.position}
          </a>
          <div className="flex gap-2 text-[#7b8e8e]">
            <p>{props.publishedTime}</p>·
            <p>{props.isFullTime ? "Full time" : "Part time"}</p>·
            <p>{props.country}</p>
          </div>
        </div>
      </div>
      <div className="chips__container flex gap-2">
        {props.tags.map((item, index) => (
          <Chip key={index} tag={item} />
        ))}
      </div>
    </VacancyStyled>
  );
};

const VacancyStyled = styled.div`
  box-shadow: 0 1.5rem 2rem -0.5rem rgba(91, 164, 164, 0.25);
  transition: 400ms all;
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 850px) {
    & {
      display: block;
    }
    .chips__container {
      border-top: 1px solid #ccc;
      padding: 15px 0;
      margin-left: 105px;
    }
  }
  @media (max-width: 600px) {
    .vacancy__company-image {
      position: absolute;
      top: -25px;

      & img {
        width: 50px;
        height: 50px;
      }
    }
    .vacancy__company-name {
      padding-top: 10px;
    }
    .chips__container {
      margin: 0;
    }
  }
`;

export default VacancyContainer;
