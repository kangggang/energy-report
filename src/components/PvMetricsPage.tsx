import ReportPage from './ReportPage';
import SectionHeader from './SectionHeader';
import MetricCard from './MetricCard';
import DataTable from './DataTable';
import { Separator } from '@/components/ui/separator';
import { monthlyMetricsData, annualMetricsData } from '@/data/reportData';

export default function PvMetricsPage() {
  const months = monthlyMetricsData.months;

  // Build rows for Monthly Metrics table (Part 1: PV, Load, POA)
  const table1Rows = months.map((month, i) => ({
    month,
    pvAvg: monthlyMetricsData.pvOutputAvg[i].toLocaleString(),
    pvSum: (monthlyMetricsData.pvOutputSum[i] / 1000).toFixed(0) + 'k',
    loadAvg: monthlyMetricsData.loadAvg[i].toLocaleString(),
    loadSum: (monthlyMetricsData.loadSum[i] / 1000000).toFixed(2) + 'M',
    poaAvg: monthlyMetricsData.poaAvg[i].toString(),
    poaSum: monthlyMetricsData.poaSum[i].toFixed(1),
  }));

  const table2Rows = months.map((month, i) => ({
    month,
    ghiAvg: monthlyMetricsData.ghiAvg[i].toString(),
    ghiSum: monthlyMetricsData.ghiSum[i].toFixed(1),
    sysEff: monthlyMetricsData.systemEfficiencyAvg[i].toFixed(1) + '%',
    ambTemp: monthlyMetricsData.ambientTempAvg[i].toFixed(1) + '°C',
    cellTemp: monthlyMetricsData.cellTempAvg[i].toFixed(1) + '°C',
  }));

  return (
    <>
      {/* Page 11: Monthly Metrics Part 1 */}
      <ReportPage pageNumber={11}>
        <SectionHeader sectionNumber="4.3" title="PV 발전 성능 — Monthly Metrics (1/2)" />

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2 font-medium">PV Output · 전력부하 · POA 일사량</p>
          <DataTable
            columns={[
              { key: 'month', header: '월', align: 'center' },
              { key: 'pvAvg', header: 'PV Avg (kW)', align: 'right' },
              { key: 'pvSum', header: 'PV Sum', align: 'right' },
              { key: 'loadAvg', header: 'Load Avg (kWh)', align: 'right' },
              { key: 'loadSum', header: 'Load Sum', align: 'right' },
              { key: 'poaAvg', header: 'POA Avg (W/m²)', align: 'right' },
              { key: 'poaSum', header: 'POA Sum (kWh/m²)', align: 'right' },
            ]}
            data={table1Rows}
            compact
          />
        </div>

        <Separator className="mb-4" />

        {/* Annual summary */}
        <p className="text-xs text-gray-500 mb-2 font-medium">연간 요약</p>
        <div className="grid grid-cols-4 gap-2">
          <MetricCard label="연간 PV 발전량 합계" value={annualMetricsData.pvOutputSum.toLocaleString()} unit="kWh" highlight />
          <MetricCard label="연간 부하 합계" value={annualMetricsData.loadSum.toLocaleString()} unit="kWh" />
          <MetricCard label="POA 합계" value={annualMetricsData.poaSum.toLocaleString()} unit="kWh/m²" />
          <MetricCard label="GHI 합계" value={annualMetricsData.ghiSum.toLocaleString()} unit="kWh/m²" />
        </div>
      </ReportPage>

      {/* Page 12: Monthly Metrics Part 2 + Annual */}
      <ReportPage pageNumber={12}>
        <SectionHeader sectionNumber="4.3" title="PV 발전 성능 — Monthly Metrics (2/2)" />

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2 font-medium">GHI · 시스템 효율 · 외기온도 · 셀온도</p>
          <DataTable
            columns={[
              { key: 'month', header: '월', align: 'center' },
              { key: 'ghiAvg', header: 'GHI Avg (W/m²)', align: 'right' },
              { key: 'ghiSum', header: 'GHI Sum (kWh/m²)', align: 'right' },
              { key: 'sysEff', header: 'Sys Eff. Avg', align: 'right' },
              { key: 'ambTemp', header: '외기온도 Avg', align: 'right' },
              { key: 'cellTemp', header: '셀온도 Avg', align: 'right' },
            ]}
            data={table2Rows}
            compact
          />
        </div>

        <Separator className="mb-4" />

        <p className="text-xs text-gray-500 mb-3 font-medium">Annual Metrics 요약</p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'PV Output Avg', value: `${annualMetricsData.pvOutputAvg.toLocaleString()} kW` },
            { label: 'PV Output Sum', value: `${annualMetricsData.pvOutputSum.toLocaleString()} kWh` },
            { label: 'Load Avg', value: `${annualMetricsData.loadAvg.toLocaleString()} kWh` },
            { label: 'Load Sum', value: `${annualMetricsData.loadSum.toLocaleString()} kWh` },
            { label: 'POA Avg', value: `${annualMetricsData.poaAvg} W/m²` },
            { label: 'GHI Avg', value: `${annualMetricsData.ghiAvg} W/m²` },
            { label: 'System Efficiency Avg', value: `${annualMetricsData.systemEfficiencyAvg}%` },
            { label: 'Ambient Temp Avg', value: `${annualMetricsData.ambientTempAvg}°C` },
            { label: 'Cell Temp Avg', value: `${annualMetricsData.cellTempAvg}°C` },
          ].map(({ label, value }) => (
            <div key={label} className="border border-gray-200 rounded p-2.5 text-xs">
              <p className="text-gray-500 mb-0.5">{label}</p>
              <p className="font-semibold text-gray-800">{value}</p>
            </div>
          ))}
        </div>
      </ReportPage>
    </>
  );
}
