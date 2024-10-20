import ChildAsFc from "./Child";

const Parent = () => {
  return (
    <ChildAsFc color="red" onClick={() => console.log("")}>
      sdfasdf
    </ChildAsFc>
  );
};

export default Parent;
