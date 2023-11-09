import { useDispatch } from "react-redux";
import { addTag } from "../../store/slices/jobsSlice";

const Chip = (props: { tag: string }) => {
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(addTag(props.tag));
  };

  return (
    <div
      onClick={handleFilter}
      className="bg-[#effafa] transition-all rounded-md cursor-pointer py-1 px-2 hover:text-[#ffff] hover:bg-[#5ba4a4]"
    >
      <a className="font-[600]">{props.tag}</a>
    </div>
  );
};

export default Chip;
