import ReportPage from './ReportPage';
import SectionHeader from './SectionHeader';
import MetricCard from './MetricCard';
import ChartCard from './ChartCard';
import AnalysisComment from './AnalysisComment';
import { quantitativeEffects } from '@/data/reportData';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from 'recharts';

export default function QuantitativeEffectPage() {
  const {
    annualRenewableGeneration,
    annualConsumption,
    re100Rate,
    peakReductionRate,
    annualGHGReduction,
    cumulativeGHGReduction,
    annualElectricityCostSaving,
  } = quantitativeEffects;

  const re100ChartData = [
    { name: 'PV 발전량', value: annualRenewableGeneration, fill: '#313DB8' },
    { name: '기타 전력', value: annualConsumption - annualRenewableGeneration, fill: '#e8eaf6' },
  ];

  const ghgChartData = [
    { year: '1년차', value: annualGHGReduction },
    { year: '5년차', value: annualGHGReduction * 5 },
    { year: '10년차', value: annualGHGReduction * 10 },
    { year: '15년차', value: annualGHGReduction * 15 },
    { year: '20년차', value: cumulativeGHGReduction },
  ];

  return (
    <ReportPage pageNumber={18}>
      <SectionHeader
        sectionNumber="6."
        title="기타 정량적 효과 분석"
        subtitle="재생에너지 도입으로 기대되는 환경·경제적 효과를 정량화합니다."
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <MetricCard
          label="연간 재생에너지 발전량"
          value={annualRenewableGeneration.toLocaleString()}
          unit="kWh"
          highlight
        />
        <MetricCard
          label="연간 전력사용량"
          value={annualConsumption.toLocaleString()}
          unit="kWh"
        />
        <MetricCard
          label="RE100 달성률"
          value={`${re100Rate}%`}
          status="positive"
          highlight
        />
        <MetricCard
          label="피크절감률"
          value={`${peakReductionRate}%`}
          status="positive"
        />
        <MetricCard
          label="연간 온실가스 감축량"
          value={annualGHGReduction.toLocaleString()}
          unit="tCO₂eq"
          status="positive"
        />
        <MetricCard
          label="20년 누적 감축량"
          value={cumulativeGHGReduction.toLocaleString()}
          unit="tCO₂eq"
          status="positive"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* RE100 달성 현황 */}
        <ChartCard
          title="RE100 달성 현황"
          description="연간 전력사용량 대비 재생에너지 발전량 비율"
          basisLabel="집계기준"
          basisValue="연간"
        >
          <div className="flex items-center justify-center gap-6 py-4">
            {/* Donut-style using simple SVG */}
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.91549430918954" fill="none" stroke="#f0f2ff" strokeWidth="3" />
                <circle
                  cx="18" cy="18" r="15.91549430918954"
                  fill="none" stroke="#313DB8" strokeWidth="3"
                  strokeDasharray={`${re100Rate} ${100 - re100Rate}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-[#313DB8]">{re100Rate}%</span>
                <span className="text-xs text-gray-500">RE100</span>
              </div>
            </div>
            <div className="text-xs space-y-2">
              {re100ChartData.map((d) => (
                <div key={d.name} className="flex items-center gap-2 whitespace-nowrap">
                  <div className="w-3 h-3 rounded-sm shrink-0" style={{ background: d.fill, border: d.fill === '#e8eaf6' ? '1px solid #c5cae9' : 'none' }} />
                  <span className="text-gray-600">{d.name}</span>
                  <span className="font-semibold text-gray-800">{(d.value / 1000000).toFixed(1)}M kWh</span>
                </div>
              ))}
            </div>
          </div>
        </ChartCard>

        {/* 전기료 절감 */}
        <ChartCard
          title="연간 전기료 절감효과"
          description="재생에너지 자가소비 및 피크저감에 따른 전기요금 절감 추정"
          basisLabel="집계기준"
          basisValue="연간"
        >
          <div className="flex flex-col items-center justify-center py-4 gap-2">
            <p className="text-3xl font-bold text-[#313DB8]">
              {(annualElectricityCostSaving / 100000000).toFixed(2)}억원
            </p>
            <p className="text-xs text-gray-500">{annualElectricityCostSaving.toLocaleString()}원/년</p>
            <div className="mt-2 grid grid-cols-2 gap-2 w-full text-xs">
              {[
                ['PV 자가소비 절감', `${((annualRenewableGeneration * 0.12) / 100000000).toFixed(2)}억원`],
                ['피크저감 기본요금', `${((annualElectricityCostSaving * 0.35) / 100000000).toFixed(2)}억원`],
              ].map(([label, value]) => (
                <div key={label} className="border border-gray-200 rounded p-2">
                  <p className="text-gray-500 text-[10px]">{label}</p>
                  <p className="font-semibold text-gray-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </ChartCard>
      </div>

      {/* GHG Reduction Chart */}
      <ChartCard
        title="온실가스 감축량 누적 현황"
        description="재생에너지 도입에 따른 온실가스 감축 누적 효과 (전력 배출계수 0.4600 kgCO₂eq/kWh 기준)"
        basisLabel="분석기간"
        basisValue="20년"
        className="mb-4"
      >
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={ghgChartData} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="year" tick={{ fontSize: 9 }} />
            <YAxis tick={{ fontSize: 9 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} width={36} unit=" t" />
            <Tooltip formatter={(v) => [`${Number(v).toLocaleString()} tCO₂eq`, '누적 감축량']} />
            <Bar dataKey="value" radius={[3, 3, 0, 0]}>
              {ghgChartData.map((_, i) => (
                <Cell key={i} fill={i === ghgChartData.length - 1 ? '#1a237e' : '#313DB8'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <AnalysisComment
        text={`연간 PV 발전량 ${annualRenewableGeneration.toLocaleString()} kWh를 통해 전력 배출계수(0.4600 kgCO₂eq/kWh) 기준 연간 약 ${annualGHGReduction.toLocaleString()} tCO₂eq의 온실가스 감축이 가능합니다. 20년 분석기간 동안 누적 ${cumulativeGHGReduction.toLocaleString()} tCO₂eq를 감축할 수 있으며, RE100 달성률 33.0%를 달성하여 기업의 탄소 규제 대응과 RE100 목표 이행에 기여합니다.`}
      />
    </ReportPage>
  );
}
