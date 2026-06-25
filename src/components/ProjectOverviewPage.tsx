import ReportPage from './ReportPage';
import SectionHeader from './SectionHeader';
import MetricCard from './MetricCard';
import ChartCard from './ChartCard';
import AnalysisComment from './AnalysisComment';
import { Separator } from '@/components/ui/separator';
import {
  projectInfo,
  selectedComplexEnergyConsumption,
  complex24hAggregateProfileData,
  monthlyComparisonByAddressData,
  hourlyAverageProfileByAddressData,
  industryStatisticsData,
} from '@/data/reportData';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ComposedChart, Legend,
} from 'recharts';

const COLORS = ['#313DB8', '#5c6bc0', '#7986cb', '#9fa8da', '#c5cae9', '#e8eaf6'];

export default function ProjectOverviewPage() {
  return (
    <>
      {/* Page 2: Project Overview */}
      <ReportPage pageNumber={2}>
        <SectionHeader sectionNumber="2." title="프로젝트 개요" />

        {/* Project basic info */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs mb-6">
          {[
            ['프로젝트명', projectInfo.projectName],
            ['대상지명', projectInfo.siteName],
            ['대상지 주소', projectInfo.siteAddress],
            ['분석 목적', projectInfo.analysisPurpose],
            ['분석 기간', projectInfo.analysisPeriod],
            ['업종', projectInfo.industry],
          ].map(([label, value]) => (
            <div key={label} className="flex gap-2 border-b border-gray-100 pb-2">
              <span className="text-gray-500 font-medium w-24 shrink-0">{label}</span>
              <span className="text-gray-800">{value}</span>
            </div>
          ))}
          {[
            ['면적', projectInfo.area],
            ['계약전력', `${Number(projectInfo.contractPower.replace(/,/g, '')).toLocaleString()} kW`],
            ['연간 전력사용량', `${Number(projectInfo.annualConsumption.replace(/,/g, '')).toLocaleString()} kWh`],
            ['최대수요전력', `${Number(projectInfo.peakDemand.replace(/,/g, '')).toLocaleString()} kW`],
          ].map(([label, value]) => (
            <div key={label} className="flex gap-2 border-b border-gray-100 pb-2">
              <span className="text-gray-500 font-medium w-24 shrink-0">{label}</span>
              <span className="text-gray-800 font-semibold">{value}</span>
            </div>
          ))}
        </div>

        <Separator className="mb-5" />

        {/* Energy Consumption Summary */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-1">선택 단지 에너지 사용 현황</h3>
          <p className="text-xs text-gray-500 mb-3">
            선택된 주소 및 건물의 에너지 사용 통계를 기반으로 단지 전체의 전력 사용 특성을 요약합니다.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <MetricCard
              label="비교 대상 사업장 수"
              value={selectedComplexEnergyConsumption.comparedAddresses}
              unit="개소"
              highlight
            />
            <MetricCard
              label="연간 총 전력사용량"
              value={selectedComplexEnergyConsumption.totalConsumption.toLocaleString()}
              unit="kWh"
              highlight
            />
            <MetricCard
              label="평균 전력사용량"
              value={selectedComplexEnergyConsumption.avgConsumption.toLocaleString()}
              unit="kWh/월"
            />
            <MetricCard
              label="부하율"
              value={selectedComplexEnergyConsumption.loadFactor}
              unit=""
            />
            <MetricCard
              label="최대수요전력"
              value={selectedComplexEnergyConsumption.peakDemand.toLocaleString()}
              unit="kW"
            />
            <MetricCard
              label="상위 10% 사용 비중"
              value={`${selectedComplexEnergyConsumption.top10PercentShare}%`}
              unit=""
            />
          </div>
        </div>
      </ReportPage>

      {/* Page 3: Load Profile Charts */}
      <ReportPage pageNumber={3}>
        <SectionHeader sectionNumber="2." title="산업단지 부하현황" />

        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Chart 1: 단지 24h 평균 부하 */}
          <ChartCard
            title={complex24hAggregateProfileData.title}
            description={complex24hAggregateProfileData.description}
            basisLabel={complex24hAggregateProfileData.basisLabel}
            basisValue={complex24hAggregateProfileData.basisValue}
          >
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={complex24hAggregateProfileData.data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" tick={{ fontSize: 9 }} interval={3} />
                <YAxis tick={{ fontSize: 9 }} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} width={32} />
                <Tooltip formatter={(v) => [`${Number(v).toLocaleString()} kWh`, '전력사용량']} />
                <Bar dataKey="value" fill="#313DB8" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Chart 2: 업종별 전력사용 통계 */}
          <ChartCard
            title={industryStatisticsData.title}
            description={industryStatisticsData.description}
            basisLabel={industryStatisticsData.basisLabel}
            basisValue={industryStatisticsData.basisValue}
          >
            <ResponsiveContainer width="100%" height={160}>
              <ComposedChart data={industryStatisticsData.data} margin={{ top: 4, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="industry" tick={{ fontSize: 8 }} />
                <YAxis yAxisId="left" tick={{ fontSize: 9 }} tickFormatter={(v) => `${(v/1000000).toFixed(1)}M`} width={36} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 9 }} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} width={36} />
                <Tooltip formatter={(v, name) => [Number(v).toLocaleString(), name === 'total' ? '총사용량' : '평균사용량']} />
                <Bar yAxisId="left" dataKey="total" fill="#313DB8" radius={[2, 2, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="avg" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Chart 3: 사업장별 월별 전력사용량 */}
          <ChartCard
            title={monthlyComparisonByAddressData.title}
            description={monthlyComparisonByAddressData.description}
            basisLabel={monthlyComparisonByAddressData.basisLabel}
            basisValue={monthlyComparisonByAddressData.basisValue}
          >
            <ResponsiveContainer width="100%" height={170}>
              <BarChart data={monthlyComparisonByAddressData.data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 8 }} />
                <YAxis tick={{ fontSize: 9 }} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} width={32} />
                <Tooltip formatter={(v, name) => [Number(v).toLocaleString(), name]} />
                <Legend iconSize={8} wrapperStyle={{ fontSize: '9px' }} />
                {['A', 'B', 'C', 'D', 'E', 'F'].map((key, i) => (
                  <Bar key={key} dataKey={key} stackId="a" fill={COLORS[i]} name={`사업장 ${key}`} />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Chart 4: 사업장별 시간대 평균 부하 */}
          <ChartCard
            title={hourlyAverageProfileByAddressData.title}
            description={hourlyAverageProfileByAddressData.description}
            basisLabel={hourlyAverageProfileByAddressData.basisLabel}
            basisValue={hourlyAverageProfileByAddressData.basisValue}
          >
            <ResponsiveContainer width="100%" height={170}>
              <LineChart data={hourlyAverageProfileByAddressData.data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" tick={{ fontSize: 9 }} interval={3} />
                <YAxis tick={{ fontSize: 9 }} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} width={32} />
                <Tooltip formatter={(v, name) => [Number(v).toLocaleString(), name]} />
                {['A', 'B', 'C', 'D', 'E', 'F'].map((key, i) => (
                  <Line key={key} type="monotone" dataKey={key} stroke={COLORS[i]} strokeWidth={1.5} dot={false} name={`사업장 ${key}`} />
                ))}
                <Line type="monotone" dataKey="avg" stroke="#f59e0b" strokeWidth={2} strokeDasharray="4 2" dot={false} name="평균" />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <AnalysisComment
          text="산업단지 전체의 피크 시간대는 오전 10시~오후 3시 사이로 집중되며, 8월 여름철에 연간 최대 부하가 발생합니다. 금속제조 및 기계부품 업종이 전체 전력사용량의 약 51%를 차지하고 있어, 해당 업종에 대한 에너지 관리가 단지 전체 효율화의 핵심 과제입니다."
          className="mt-4"
        />
      </ReportPage>
    </>
  );
}
