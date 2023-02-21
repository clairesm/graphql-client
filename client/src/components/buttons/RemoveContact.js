import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@apollo/client';
import { REMOVE_CONTACT } from '../../queries';

const RemoveContact = ({ id }) => {
  const [removeContact] = useMutation(REMOVE_CONTACT);

  const handleButtonClick = () => {
    let result = window.confirm(
      'Are you sure you want to delete this contact?'
    );

    if (result) {
      removeContact({
        variables: {
          id,
        },
      });
    }
  };

  return (
    <DeleteOutlined
      key='delete'
      style={{ color: 'red' }}
      onClick={handleButtonClick}
    />
  );
};

export default RemoveContact;
