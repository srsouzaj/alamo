import FormAddRoutines from "@/app/pages/Produto/components/Form";
import Trigger from "@/app/pages/Produto/components/Form/trigger";
import { Dialog } from "@radix-ui/react-dialog";
import { memo } from "react";

const Modal = () => {
  return (
    <Dialog>
      <Trigger />
      <FormAddRoutines />
    </Dialog>
  );
};

export default memo(Modal);
