import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { NotesListPage } from '@/pages/NotesListPage';
import { NoteDetailPage } from '@/pages/NoteDetailPage';
import { WorksheetsListPage } from '@/pages/WorksheetsListPage';
import { WorksheetDetailPage } from '@/pages/WorksheetDetailPage';
import { GrammarListPage } from '@/pages/GrammarListPage';
import { GrammarDetailPage } from '@/pages/GrammarDetailPage';
import { VocabularyListPage } from '@/pages/VocabularyListPage';
import { VocabularyDetailPage } from '@/pages/VocabularyDetailPage';
import { VerbsListPage } from '@/pages/VerbsListPage';
import { VerbDetailPage } from '@/pages/VerbDetailPage';
import { PdfsListPage } from '@/pages/PdfsListPage';
import { PdfDetailPage } from '@/pages/PdfDetailPage';
import { SearchPage } from '@/pages/SearchPage';
import { TagsIndexPage } from '@/pages/TagsIndexPage';
import { TagDetailPage } from '@/pages/TagDetailPage';
import { FavoritesPage } from '@/pages/FavoritesPage';
import { AdminHomePage } from '@/pages/admin/AdminHomePage';
import { AdminResourceListPage } from '@/pages/admin/AdminResourceListPage';
import { AdminResourceFormPage } from '@/pages/admin/AdminResourceFormPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path="notes" element={<NotesListPage />} />
          <Route path="notes/:id" element={<NoteDetailPage />} />

          <Route path="worksheets" element={<WorksheetsListPage />} />
          <Route path="worksheets/:id" element={<WorksheetDetailPage />} />

          <Route path="grammar" element={<GrammarListPage />} />
          <Route path="grammar/:id" element={<GrammarDetailPage />} />

          <Route path="vocabulary" element={<VocabularyListPage />} />
          <Route path="vocabulary/:id" element={<VocabularyDetailPage />} />

          <Route path="verbs" element={<VerbsListPage />} />
          <Route path="verbs/:id" element={<VerbDetailPage />} />

          <Route path="pdfs" element={<PdfsListPage />} />
          <Route path="pdfs/:id" element={<PdfDetailPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="tags" element={<TagsIndexPage />} />
          <Route path="tags/:tag" element={<TagDetailPage />} />
          <Route path="favorites" element={<FavoritesPage />} />

          <Route path="admin" element={<AdminHomePage />} />
          <Route path="admin/:type" element={<AdminResourceListPage />} />
          <Route path="admin/:type/new" element={<AdminResourceFormPage />} />
          <Route path="admin/:type/:id/edit" element={<AdminResourceFormPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
