import styled from "styled-components";
import { Modal } from "../../../components";
import EditUserForm from "./EditUserForm";

type DialogProps = {
  showEditDialog: boolean;
  closeEditDialog: () => void;
};

export default function EditProfileDialog({
  showEditDialog,
  closeEditDialog,
}: DialogProps): JSX.Element {
  return (
    <Modal
      showModal={showEditDialog}
      closeModal={closeEditDialog}
      header="Edit Profile">
      <Container>
        <EditUserForm />
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  padding: 1rem;
`;
