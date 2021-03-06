import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

import { MoviesAndGenresProvider } from './hooks/useMoviesAndGenres';

export function App() {
  return (
    <MoviesAndGenresProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesAndGenresProvider>
  )
}