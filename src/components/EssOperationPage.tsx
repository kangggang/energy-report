import ReportPage from './ReportPage';
import SectionHeader from './SectionHeader';
import MetricCard from './MetricCard';
import ChartCard from './ChartCard';
import DataTable from './DataTable';
import AnalysisComment from './AnalysisComment';
import { Separator } from '@/components/ui/separator';
import {
  essSimulationResults,
  averagePeakLoadData,
  peakOccurrenceDistributionData,
  essOperatingScheduleData,
} from '@/data/reportData';
import {
  LineChart, Line, BarChart, Bar, ComposedChart,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Legend, ReferenceLine,
} from 'recharts';

export default function EssOperationPage() {
  const perfRows = [
    { item: '분석 기간', value: `${essSimulationResults.analysisPeriod} days` },
    { item: '총 충전량', value: `${essSimulationResults.totalCharging.toLocaleString()} kWh` },
    { item: '총 방전량', value: `${essSimulationResults.totalDischarging.toLocaleString()} kWh` },
    { item: '일평균 충전량', value: `${essSimulationResults.avgDailyCharging} kWh` },
    { item: '일평균 방전량', value: `${essSimulationResults.avgDailyDischarging} kWh` },
    { item: '왕복 효율 (Round-Trip)', value: `${essSimulationResults.roundTripEfficiency}%` },
  ];

  const sizingRows = [
    { item: '분석 단위', value: essSimulationResults.analysisUnit },
    { item: '현재 피크부하', value: `${essSimulationResults.currentPeakLoad.toLocaleString()} kW` },
    { item: '목표 피크부하', value: `${essSimulationResults.targetPeakLoad.toLocaleString()} kW` },
    { item: '목표 저감량', value: `${essSimulationResults.targetReductionAmount.toLocaleString()} kW (${essSimulationResults.targetReductionRate.toFixed(2)}%)` },
    { item: 'PCS 용량 (선정)', value: `${essSimulationResults.selectedPCS.toLocaleString()} kW` },
    { item: 'ESS 용량 (선정)', value: `${essSimulationResults.selectedESSCapacity.toLocaleString()} kWh` },
    { item: '최대 연속 피크 지속시간', value: `${essSimulationResults.maxContinuousPeakDuration.toFixed(2)} hours` },
  ];

  return (
    <>
      {/* Page 13 */}
      <ReportPage pageNumber={13}>
        <SectionHeader
          sectionNumber="4.4"
          title="ESS 운영 및 부하 대응 분석"
          subtitle="ESS 충·방전 운영 및 피크저감 성능을 분석합니다."
        />

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <MetricCard label="최대부하 (ESS 미적용)" value={`${essSimulationResults.maxPeakWithoutESS.toLocaleString()} kW`} />
          <MetricCard label="최대부하 (ESS 적용)" value={`${essSimulationResults.maxPeakWithESS.toLocaleString()} kW`} highlight />
          <MetricCard label="피크 저감량" value={`${essSimulationResults.peakReductionAmount.toLocaleString()} kW (${essSimulationResults.peakReductionRate}%)`} status="positive" />
          <MetricCard label="왕복 효율" value={`${essSimulationResults.roundTripEfficiency}%`} />
          <MetricCard label="일평균 충전량" value={`${essSimulationResults.avgDailyCharging} kWh`} />
          <MetricCard label="일평균 방전량" value={`${essSimulationResults.avgDailyDischarging} kWh`} />
        </div>

        {/* Chart 1: 평균 및 피크 부하 */}
        <ChartCard
          title={averagePeakLoadData.title}
          description="ESS 적용 전후 시간대별 최대부하 비교입니다."
          basisLabel={averagePeakLoadData.basisLabel}
          basisValue={averagePeakLoadData.basisValue}
          className="mb-4"
        >
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={averagePeakLoadData.data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="hour" tick={{ fontSize: 8 }} interval={3} />
              <YAxis tick={{ fontSize: 9 }} tickFormatter={(v) => `${(v / 1000).toFixed(1)}k`} width={36} />
              <Tooltip formatter={(v) => [`${Number(v).toLocaleString()} kW`]} />
              <Legend iconSize={8} wrapperStyle={{ fontSize: '9px' }} />
              <ReferenceLine y={essSimulationResults.targetPeakLoad} stroke="#f59e0b" strokeDasharray="3 3" label={{ value: '목표피크', fontSize: 8, fill: '#f59e0b' }} />
              <Line type="monotone" dataKey="withoutESS" stroke="#ef4444" strokeWidth={1.5} dot={false} name="피크 (ESS 미적용)" />
              <Line type="monotone" dataKey="withESS" stroke="#313DB8" strokeWidth={2} dot={false} name="피크 (ESS 적용)" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Chart 2: 피크 발생 분포 */}
        <ChartCard
          title={peakOccurrenceDistributionData.title}
          description="피크 부하가 발생하는 시간대의 빈도 분포를 나타냅니다."
          basisLabel={peakOccurrenceDistributionData.basisLabel}
          basisValue={peakOccurrenceDistributionData.basisValue}
        >
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={peakOccurrenceDistributionData.data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="hour" tick={{ fontSize: 9 }} />
              <YAxis tick={{ fontSize: 9 }} width={28} label={{ value: '횟수', angle: -90, position: 'insideLeft', fontSize: 9, offset: 10 }} />
              <Tooltip formatter={(v) => [`${v}회`, '피크 발생']} />
              <Bar dataKey="count" fill="#5c6bc0" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </ReportPage>

      {/* Page 14: ESS Schedule + Sizing */}
      <ReportPage pageNumber={14}>
        <SectionHeader sectionNumber="4.4" title="ESS 운영 스케줄 및 최적 용량 산정" />

        {/* Chart 3: ESS 운영 스케줄 */}
        <ChartCard
          title={essOperatingScheduleData.title}
          description="ESS 충전/방전 스케줄 및 배터리 잔량(SOC) 변화를 나타냅니다."
          basisLabel={essOperatingScheduleData.basisLabel}
          basisValue={essOperatingScheduleData.basisValue}
          className="mb-4"
        >
          <ResponsiveContainer width="100%" height={220}>
            <ComposedChart data={essOperatingScheduleData.data} margin={{ top: 4, right: 40, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="hour" tick={{ fontSize: 8 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 9 }} width={36} label={{ value: 'kWh', angle: -90, position: 'insideLeft', fontSize: 8, offset: 10 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 9 }} width={32} domain={[0, 100]} unit="%" />
              <Tooltip />
              <Legend iconSize={8} wrapperStyle={{ fontSize: '9px' }} />
              <Bar yAxisId="left" dataKey="charge" fill="#313DB8" radius={[2, 2, 0, 0]} name="충전 (kWh)" />
              <Bar yAxisId="left" dataKey="discharge" fill="#ef4444" radius={[2, 2, 0, 0]} name="방전 (kWh)" />
              <Line yAxisId="right" type="monotone" dataKey="soc" stroke="#f59e0b" strokeWidth={2} dot={false} name="SOC (%)" />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        <Separator className="mb-4" />

        {/* Sizing Table */}
        <h3 className="text-sm font-semibold text-gray-700 mb-2">ESS Peak Shaving Performance & Optimal Sizing</h3>
        <div className="grid grid-cols-2 gap-4">
          <DataTable
            columns={[
              { key: 'item', header: '항목', align: 'left' },
              { key: 'value', header: '값', align: 'right' },
            ]}
            data={perfRows}
            compact
          />
          <DataTable
            columns={[
              { key: 'item', header: '항목', align: 'left' },
              { key: 'value', header: '값', align: 'right' },
            ]}
            data={sizingRows}
            compact
          />
        </div>

        <AnalysisComment
          text="ESS는 야간(00~05시) 계통에서 충전하여 낮 피크 시간대(09~18시)에 방전함으로써 최대부하를 4,844.8 kW에서 3,875.8 kW로 약 20% 저감합니다. 왕복 효율 60.9%는 충·방전 손실 및 보조전력 소비를 반영한 값으로, 실제 운영 환경에서 BMS 최적화를 통해 향상 가능합니다."
          className="mt-4"
        />
      </ReportPage>
    </>
  );
}
