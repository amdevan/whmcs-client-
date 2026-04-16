/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Topbar } from './components/Topbar';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

