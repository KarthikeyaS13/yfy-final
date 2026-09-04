'use client';

import { useState } from 'react';
import { COVERAGE_MATRIX } from '@/data/coverageMatrixData';
import { Search } from 'lucide-react';
import styles from './page.module.css';

export default function CoverageTable() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = COVERAGE_MATRIX.filter((row) => {
    // Text search
    if (searchTerm && !row.state.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    // Filter tab
    if (filter === 'states') return row.type === 'State';
    if (filter === 'uts') return row.type === 'Union Territory';
    if (filter === 'gaps') {
      return (
        row.minWage === 'Partial' ||
        row.minWage === 'Manual' ||
        row.shops === 'Partial' ||
        row.shops === 'Manual' ||
        row.shops === 'Not loaded' ||
        row.clra === 'Partial' ||
        row.clra === 'Manual' ||
        row.clra === 'Not loaded' ||
        row.codes === 'Not Drafted'
      );
    }
    return true;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Automated':
        return <span className={`${styles.badge} ${styles.badgeGreen}`}>{status}</span>;
      case 'Partial':
        return <span className={`${styles.badge} ${styles.badgeGold}`}>{status}</span>;
      case 'Manual':
        return <span className={`${styles.badge} ${styles.badgeYellow}`}>{status}</span>;
      case 'Not loaded':
        return <span className={`${styles.badge} ${styles.badgeDark}`}>{status}</span>;
      case 'Final Rules Notified':
        return <span className={`${styles.badge} ${styles.badgePurple}`}>{status}</span>;
      case 'Rules Drafted':
        return <span className={`${styles.badge} ${styles.badgeBlue}`}>{status}</span>;
      case 'Not Drafted':
        return <span className={`${styles.badge} ${styles.badgeDark}`}>{status}</span>;
      case 'N/A':
      default:
        return <span className={`${styles.badge} ${styles.badgeGrey}`}>{status}</span>;
    }
  };

  return (
    <>
      {/* Search and Filters */}
      <div className={styles.controlsBar}>
        <div className={styles.filterTabs}>
          <button
            type="button"
            className={`${styles.filterBtn} ${filter === 'all' ? styles.filterBtnActive : ''}`}
            onClick={() => setFilter('all')}
          >
            All Jurisdictions (36)
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${filter === 'gaps' ? styles.filterBtnActive : ''}`}
            onClick={() => setFilter('gaps')}
          >
            Show Gaps Only
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${filter === 'states' ? styles.filterBtnActive : ''}`}
            onClick={() => setFilter('states')}
          >
            States (28)
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${filter === 'uts' ? styles.filterBtnActive : ''}`}
            onClick={() => setFilter('uts')}
          >
            Union Territories (8)
          </button>
        </div>

        <div className={styles.searchBox}>
          <Search size={16} color="var(--text-muted)" />
          <input
            type="text"
            placeholder="Search state or UT..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
            aria-label="Search jurisdiction"
          />
        </div>
      </div>

      <div style={{ fontSize: '0.8rem', color: 'var(--brand-xlight)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span>↔ Swipe table horizontally to inspect all statutory heads</span>
        <span>Showing {filteredData.length} of 36 jurisdictions</span>
      </div>

      {/* 36-Jurisdiction Table */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>State / UT</th>
              <th>Minimum Wages</th>
              <th>Professional Tax</th>
              <th>Labour Welfare Fund</th>
              <th>Shops & Establishment</th>
              <th>CLRA Registers</th>
              <th>Labour Code Rules</th>
              <th>Verified</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.state}>
                <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  {row.state}
                  {row.type === 'Union Territory' && (
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', fontWeight: 400 }}>
                      Union Territory
                    </span>
                  )}
                </td>
                <td>{getStatusBadge(row.minWage)}</td>
                <td>{getStatusBadge(row.pt)}</td>
                <td>{getStatusBadge(row.lwf)}</td>
                <td>{getStatusBadge(row.shops)}</td>
                <td>{getStatusBadge(row.clra)}</td>
                <td>{getStatusBadge(row.codes)}</td>
                <td style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{row.verifiedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Honest Legend */}
      <div className={styles.legend}>
        <p style={{ marginBottom: '0.5rem' }}>
          <strong>Manual:</strong> The platform records and evidences the obligation, and a named person produces the filing. We publish this plainly because a buyer who discovers it themselves stops trusting every other row on this page.
        </p>
        <p style={{ marginBottom: '0.5rem' }}>
          <strong>Partial:</strong> Core rates and standard establishments are automated, while secondary regional gazette schedules require evidentiary validation.
        </p>
        <p style={{ margin: 0 }}>
          <strong>Not loaded:</strong> Low-workforce territories currently pending active gazette rule ingestion.
        </p>
      </div>
    </>
  );
}
