import React, { useEffect } from 'react';
import Button from '../components/Button';
import { op } from '../config/openpanel';

const Home: React.FC = () => {
  useEffect(() => {
    op.track('page_view', {
      page: 'home',
    });
  }, []);

  return (
    <div>
      <h1>Página Inicial</h1>
      <Button label="Clique Aqui" eventName="home_button_click" />
      <Button label="Testar Ação" eventName="home_test_action" />
      <Button label="Botão 3" eventName="home_button_3" />
    </div>
  );
};

export default Home;