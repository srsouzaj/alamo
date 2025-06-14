import FormAddRoutines from "@/app/pages/Produto/components/Form";
import Trigger from "@/app/pages/Produto/components/Form/trigger";
import { Dialog } from "@radix-ui/react-dialog";

const Modal = () => {
  return (
    <Dialog>
      <Trigger />
      <FormAddRoutines />
    </Dialog>
  );
};

export default Modal;
