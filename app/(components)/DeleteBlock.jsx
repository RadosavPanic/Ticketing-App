import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteBlock = () => {
  return (
    <FontAwesomeIcon
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      icon={faX}
    />
  );
};

export default DeleteBlock;
