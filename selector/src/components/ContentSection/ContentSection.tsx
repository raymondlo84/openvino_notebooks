import './ContentSection.scss';

import { useState } from 'react';

import { notebooksService } from '@/models/notebooks.service';

import { ContentSectionHeader } from './ContentSectionHeader/ContentSectionHeader';
import { NotebooksList } from './NotebooksList/NotebooksList';

export const ContentSection = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');

  const notebooks = notebooksService.notebooks;

  const filteredNotebooks = searchValue
    ? notebooks.filter(({ title }) => title.toLowerCase().includes(searchValue.toLowerCase()))
    : notebooks;

  return (
    <section className="flex-col flex-1 content-section">
      <ContentSectionHeader
        totalCount={notebooks.length}
        filteredCount={filteredNotebooks.length}
        onSearch={setSearchValue}
      ></ContentSectionHeader>
      <NotebooksList items={filteredNotebooks}></NotebooksList>
    </section>
  );
};
