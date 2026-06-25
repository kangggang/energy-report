import ReportPage from './ReportPage';
import SectionHeader from './SectionHeader';
import MetricCard from './MetricCard';
import ChartCard from './ChartCard';
import AnalysisComment from './AnalysisComment';
import {
  loadSimulationResults,
  complex24hAggregateProfileData,
  monthlyConsumptionData,
} from '@/data/reportData';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from 'recharts';

export default function LoadResultPage() {
  const peakMonthIdx = monthlyConsumptionData.data.findIndex(
    (d) => d.value === Math.max(...monthlyConsumptionData.data.map((x) => x.value))
  );

  return (
    <ReportPage pageNumber={6}>
      <SectionHeader
        sectionNumber="4.1"
        title="부하 분석 결과"
        subtitle="선택 단지 전체의 에너지 사용 현황 및 시간·월별 부하 특성을 분석합니다."
      />

      {/* KPI */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <MetricCard
          label="비교 대상 사업장 수"
          value={loadSimulationResults.comparedAddresses}
          unit="개소"
          highlight
        />
        <MetricCard
          label="연간 총 전력사용량"
          value={loadSimulationResults.annualTotal.toLocaleString()}
          unit="kWh"
          highlight
        />
        <MetricCard
          label="피크월"
          value={`${loadSimulationResults.peakMonth} · ${loadSimulationResults.peakMonthConsumption.toLocaleString()}`}
          unit="kWh"
        />
      </div>

      {/* Chart 1: 단지 24h 평균 통합 부하 */}
      <ChartCard
        title={complex24hAggregateProfileData.title}
        description={complex24hAggregateProfileData.description}
        basisLabel={complex24hAggregateProfileData.basisLabel}
        basisValue={complex24hAggregateProfileData.basisValue}
        className="mb-4"
      >
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={complex24hAggregateProfileData.data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="hour" tick={{ fontSize: 9 }} label={{ value: '시간 (h)', position: 'insideBottom', offset: -2, fontSize: 9 }} />
            <YAxis tick={{ fontSize: 9 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} width={36} />
            <Tooltip
              formatter={(v) => [`${Number(v).toLocaleString()} kWh`, '전력사용량']}
              labelFormatter={(l) => `${l}시`}
            />
            <Bar dataKey="value" fill="#313DB8" radius={[2, 2, 0, 0]}>
              {complex24hAggregateProfileData.data.map((entry, i) => (
                <Cell
                  key={i}
                  fill={entry.value >= 4800 ? '#1a237e' : entry.value >= 4200 ? '#313DB8' : '#7986cb'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Chart 2: 월별 전력사용량 */}
      <ChartCard
        title={monthlyConsumptionData.title}
        description={monthlyConsumptionData.description}
        basisLabel={monthlyConsumptionData.basisLabel}
        basisValue={monthlyConsumptionData.basisValue}
        className="mb-4"
      >
        <ResponsiveContainer width="100%" height={170}>
          <BarChart data={monthlyConsumptionData.data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 9 }} />
            <YAxis tick={{ fontSize: 9 }} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} width={38} />
            <Tooltip formatter={(v) => [`${Number(v).toLocaleString()} kWh`, '전력사용량']} />
            <Bar dataKey="value" radius={[3, 3, 0, 0]}>
              {monthlyConsumptionData.data.map((_, i) => (
                <Cell key={i} fill={i === peakMonthIdx ? '#1a237e' : '#313DB8'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <AnalysisComment
        text="연간 전력사용량은 8월에 2,812,480 kWh로 최대치를 기록하며, 하절기(6~8월)의 냉방 부하로 인해 사용량이 높습니다. 일별 패턴에서는 오전 9시~오후 3시 사이에 피크가 집중되며, 이 시간대를 중심으로 ESS 방전 및 PV 발전 연계 전략을 수립하면 효과적인 피크저감이 가능합니다."
      />
    </ReportPage>
  );
}
