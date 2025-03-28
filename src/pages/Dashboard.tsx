import React, { useEffect } from 'react';
import Button from '../components/Button';
import { op } from '../config/openpanel';

const Dashboard: React.FC = () => {
  useEffect(() => {
    op.track('dashboard_page_view', {
      page: 'dashboard',
    });
    op.increment({
        profileId: "101010",
        property: "visits",
        value: 1,
    });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Button label="Botão Dashboard" eventName="dashboard_button_click" />
      <Button label="Ação 1" eventName="dashboard_action_1" />
      <Button label="Ação 2" eventName="dashboard_action_2" />
    </div>
  );
};

export default Dashboard;