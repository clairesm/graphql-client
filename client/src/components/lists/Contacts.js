import React from 'react';
import { List } from 'antd';
import { ContactCard } from '../listItems/ContactCard';

const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Contacts = () => {
  const styles = getStyles();
  return (
    <List
      grid={{ gutter: 20, column: 1 }}
      style={styles.list}
    >
      <List.Item>
        <ContactCard />
      </List.Item>
    </List>
  );
};

export default Contacts;
