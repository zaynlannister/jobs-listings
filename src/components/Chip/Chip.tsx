const Chip = (props: { tag: string }) => {
  return (
    <div className="bg-[#effafa] transition-all rounded-md cursor-pointer py-1 px-2 hover:text-[#ffff] hover:bg-[#5ba4a4]">
      <a className="font-[600]">{props.tag}</a>
    </div>
  );
};

export default Chip;
