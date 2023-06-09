import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/config/tests/componentRender/ComponentRender';
import { Sidebar } from '../..';

describe('Sidebar', () => {
  test('Test render', () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    ComponentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
