import React, { useState, useEffect } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';
import { AlertCircle, BarChart3, PieChart } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { getMonth, parseISO, subDays, isAfter } from 'date-fns';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// Type definitions
interface Contribution { date: string; count: number; level: number; }
interface Stats { commits: number; prs: number; issues: number; reviews: number; }
interface Props {
  heatmapData?: Contribution[] | null;
  statsData?: Stats | null;
}
type TimeRange = '1y' | '90d' | '30d';

const GithubHeatmap: React.FC<Props> = ({ heatmapData, statsData }) => {
  const [timeRange, setTimeRange] = useState<TimeRange>('1y');
  const [filteredData, setFilteredData] = useState(heatmapData);

  useEffect(() => {
    if (!heatmapData) return;
    const now = new Date();
    let startDate: Date;
    if (timeRange === '90d') {
      startDate = subDays(now, 90);
    } else if (timeRange === '30d') {
      startDate = subDays(now, 30);
    } else {
      setFilteredData(heatmapData);
      return;
    }
    const filtered = heatmapData.filter(day => isAfter(parseISO(day.date), startDate));
    setFilteredData(filtered);
  }, [timeRange, heatmapData]);

  if (!heatmapData || !statsData) {
    return (
      <div className="flex h-32 items-center justify-center text-red-500 border border-red-900/20 rounded bg-red-900/10">
        <AlertCircle className="mr-2" />
        <span className="font-mono text-sm">System Malfunction: Could not load GitHub contribution data.</span>
      </div>
    );
  }

  // --- Data processing functions ---
  const getMonthlyData = () => {
    const dataToProcess = filteredData || [];
    const monthlyCounts = new Array(12).fill(0);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    dataToProcess.forEach((day) => {
      const monthIndex = getMonth(parseISO(day.date));
      monthlyCounts[monthIndex] += day.count;
    });
    return {
      labels: months,
      datasets: [{ label: 'Contributions', data: monthlyCounts, backgroundColor: '#DC143C', borderRadius: 4 }]
    };
  };

  const getDoughnutData = () => {
    return {
      labels: ['Commits', 'Pull Requests', 'Issues', 'Code Reviews'],
      datasets: [{
        data: [statsData.commits, statsData.prs, statsData.issues, statsData.reviews],
        backgroundColor: ['#DC143C', '#ED6A7C', '#940925', '#F594A0'],
        borderColor: '#111827',
        borderWidth: 2,
      }]
    };
  };

  // --- Configuration objects ---
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: '#1F2937', titleColor: '#F3F4F6', bodyColor: '#F3F4F6', padding: 10, cornerRadius: 4, boxPadding: 4 }
    },
    scales: {
      y: { beginAtZero: true, grid: { color: '#374151' }, ticks: { color: '#9CA3AF', font: { family: 'JetBrains Mono' } } },
      x: { grid: { display: false }, ticks: { color: '#9CA3AF', font: { family: 'JetBrains Mono' } } }
    }
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'right' as const, labels: { color: '#9CA3AF', font: { family: 'JetBrains Mono' } } }
    }
  };

  // --- FIX: Removed the `as const` assertion to satisfy the library's type definition ---
  const calendarTheme = {
    light: ['#F3F4F6', '#FBBDC5', '#ED6A7C', '#DC143C', '#940925'],
    dark: ['#1F2937', '#73071C', '#940925', '#DC143C', '#FFE5E9'],
  };

  // --- Helper component for filter buttons ---
  const FilterButton: React.FC<{ range: TimeRange, label: string }> = ({ range, label }) => (
    <button
      onClick={() => setTimeRange(range)}
      className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${timeRange === range
        ? 'bg-crimson-500 text-white'
        : 'bg-ui-100 dark:bg-ui-800 text-ui-600 dark:text-ui-300 hover:bg-ui-200 dark:hover:bg-ui-700'
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col gap-8">
      {/* 1. Heatmap with Filter Controls */}
      <div>
        <div className="flex justify-end items-center mb-4">
          <div className="flex items-center gap-2 p-1 bg-ui-50 dark:bg-ui-900 border border-ui-200 dark:border-ui-800 rounded-lg">
            <FilterButton range="30d" label="30 Days" />
            <FilterButton range="90d" label="90 Days" />
            <FilterButton range="1y" label="1 Year" />
          </div>
        </div>
        <div className="w-full overflow-x-auto pb-4 scrollbar-dashboard">
          <div style={{ minWidth: '800px' }}>
            <ActivityCalendar
              data={filteredData || []}
              theme={calendarTheme}
              showWeekdayLabels
              fontSize={12} blockRadius={3} blockSize={12}
              labels={{ legend: { less: 'Less', more: 'More' }, months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }}
            />
          </div>
        </div>
      </div>

      {/* 2. Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="md:col-span-2 p-4 rounded-xl border border-ui-200 dark:border-ui-800 bg-ui-50 dark:bg-ui-900/30">
          <div className="flex items-center gap-2 mb-4 text-sm font-mono text-ui-500">
            <BarChart3 size={16} />
            <span>Monthly Volume</span>
          </div>
          <div className="h-48 w-full">
            <Bar data={getMonthlyData()} options={chartOptions} />
          </div>
        </div>
        <div className="p-4 rounded-xl border border-ui-200 dark:border-ui-800 bg-ui-50 dark:bg-ui-900/30">
          <div className="flex items-center gap-2 mb-4 text-sm font-mono text-ui-500">
            <PieChart size={16} />
            <span>Activity Breakdown (Yearly)</span>
          </div>
          <div className="h-48 flex items-center justify-center">
            <Doughnut data={getDoughnutData()} options={doughnutOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubHeatmap;
