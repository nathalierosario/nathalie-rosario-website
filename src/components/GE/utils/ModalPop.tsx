import Modal from "react-bootstrap/Modal";

interface ModalPopProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function ModalPop({
  show,
  onClose,
  title,
  children,
}: ModalPopProps) {
  return (
    <Modal centered show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <button onClick={onClose} className="glass-btn">
          CLOSE
        </button>
      </Modal.Footer>
    </Modal>
  );
}
