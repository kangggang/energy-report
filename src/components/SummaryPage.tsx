import ReportPage from './ReportPage';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { summary } from '@/data/reportData';

export default function SummaryPage() {
  const items = [
    { label: '프로젝트명', value: summary.projectName },
    { label: '대상지', value: summary.siteName },
    { label: '분석 목적', value: summary.analysisPurpose },
    { label: '분석 기간', value: summary.analysisPeriod },
    { label: '적용 설비', value: summary.facilities },
  ];

  const results = [
    { label: '연간 전력사용량', value: summary.annualConsumption, category: 'neutral' },
    { label: '연간 PV 발전량', value: summary.annualPVGeneration, category: 'positive' },
    { label: '최대수요전력 절감', value: summary.peakReduction, category: 'positive' },
    { label: 'ESS 피크저감 효과', value: summary.essEffect, category: 'positive' },
    { label: '경제성 결과', value: summary.economicResult, category: 'negative' },
    { label: 'RE100 달성률', value: summary.re100Rate, category: 'positive' },
    { label: '온실가스 감축 효과', value: summary.ghgReduction, category: 'positive' },
  ];

  return (
    <ReportPage pageNumber={19}>
      {/* Header bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-[#313DB8] leading-none">7.</span>
          <h2 className="text-lg font-bold text-gray-900">종합 요약</h2>
        </div>
        <Badge variant="primary" className="text-xs">Final Report</Badge>
      </div>
      <Separator className="mb-5 bg-[#313DB8]/20" />

      {/* Project info */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs mb-5">
        {items.map(({ label, value }) => (
          <div key={label} className="flex gap-3 pb-2 border-b border-gray-100">
            <span className="text-gray-500 w-24 shrink-0">{label}</span>
            <span className="text-gray-800 font-medium">{value}</span>
          </div>
        ))}
      </div>

      <Separator className="mb-4" />

      {/* Result Summary */}
      <h3 className="text-sm font-semibold text-gray-700 mb-3">시뮬레이션 결과 요약</h3>
      <div className="grid grid-cols-1 gap-2 mb-5">
        {results.map(({ label, value, category }) => (
          <div
            key={label}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-xs ${
              category === 'positive' ? 'bg-[#f0f2ff]' :
              category === 'negative' ? 'bg-red-50' :
              'bg-gray-50'
            }`}
          >
            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${
              category === 'positive' ? 'bg-[#313DB8]' :
              category === 'negative' ? 'bg-red-400' :
              'bg-gray-400'
            }`} />
            <span className="text-gray-500 w-36 shrink-0">{label}</span>
            <span className={`font-semibold ${
              category === 'positive' ? 'text-[#313DB8]' :
              category === 'negative' ? 'text-red-600' :
              'text-gray-800'
            }`}>{value}</span>
          </div>
        ))}
      </div>

      <Separator className="mb-4" />

      {/* Final Conclusion */}
      <div className="bg-[#313DB8] rounded-lg p-4 text-white">
        <p className="text-xs font-semibold mb-2 opacity-80 tracking-wider">최종 결론</p>
        <p className="text-sm leading-relaxed">{summary.conclusion}</p>
      </div>

      {/* Footnote */}
      <div className="mt-4 text-[10px] text-gray-400 space-y-0.5">
        <p>* 본 보고서는 EGRI 재생에너지 시뮬레이션 플랫폼을 통해 생성된 시뮬레이션 결과물입니다.</p>
        <p>* TMY 기상 데이터 및 목업 전력요금 조건을 기반으로 산출된 값으로, 실제 결과와 차이가 있을 수 있습니다.</p>
        <p>* 전력 배출계수: 0.4600 kgCO₂eq/kWh (2023년 기준)</p>
      </div>
    </ReportPage>
  );
}
