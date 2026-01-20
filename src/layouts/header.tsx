import styled from 'styled-components';
import { useThemeChooser } from '../contexts/theme-chooser';
import { ThemeChooser } from '../components/shared/theme-chooser';

const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  @media (max-width: 480px) {
    flex-direction: column;
  }
  .settings {
    list-style: none;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;


export const Header = () => {
  const { toggle } = useThemeChooser();

  return (
    <header>
      <StyledHeaderDiv>
        <div>
          <ul className="settings">
            <li>
            </li>
            <li onClick={toggle}>
              <ThemeChooser />
            </li>
          </ul>
        </div>
      </StyledHeaderDiv>
    </header>
  );
};
