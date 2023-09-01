'use client'
import React from 'react';
import SimilarPageStructure from '@/components/aboutpagecomponent/SimilarPageStructure'; // Import the component
import data from '../../components/aboutpagecomponent/data.json' // Import your JSON data
import MainLayout from '@/components/main_layout/MainLayout.';

const App: React.FC = () => {
  return (
    <MainLayout>
      <SimilarPageStructure data={data.history} /> {/* Pass the data as a prop */}
    </MainLayout>
  );
};

export default App;
