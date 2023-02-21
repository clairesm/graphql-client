import { Card } from 'antd';

const getStyles = () => ({
  card: { width: '500px' },
});

export const ContactCard = () => {
  const styles = getStyles();
  return <Card style={styles.card}>Elon Musk</Card>;
};
