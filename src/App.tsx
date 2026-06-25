import { Button } from '@/components/ui/button';
import CoverPage from '@/components/CoverPage';
import ProjectOverviewPage from '@/components/ProjectOverviewPage';
import DesignInputPage from '@/components/DesignInputPage';
import LoadResultPage from '@/components/LoadResultPage';
import EnvironmentResultPage from '@/components/EnvironmentResultPage';
import PvPerformancePage from '@/components/PvPerformancePage';
import PvMetricsPage from '@/components/PvMetricsPage';
import EssOperationPage from '@/components/EssOperationPage';
import ThermalNetworkPage from '@/components/ThermalNetworkPage';
import EconomicAnalysisPage from '@/components/EconomicAnalysisPage';
import QuantitativeEffectPage from '@/components/QuantitativeEffectPage';
import SummaryPage from '@/components/SummaryPage';

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top toolbar — hidden on print */}
      <div className="no-print sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-[#313DB8] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">산업단지 재생에너지 설계 시뮬레이션 결과 보고서</p>
              <p className="text-xs text-gray-500">대덕 제2 국가산업단지 · 2026-06-25 · 19 Pages</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handlePrint}>
              <svg className="mr-1.5 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              PDF 인쇄
            </Button>
          </div>
        </div>
      </div>

      {/* Report content */}
      <div className="py-8 px-4">
        <div className="report-wrapper">
          {/* Table of Contents info bar — no-print */}
          <div className="no-print bg-white rounded-lg border border-gray-200 px-5 py-3 mb-6 text-xs text-gray-500 flex flex-wrap gap-x-6 gap-y-1">
            <span className="font-semibold text-gray-700 mr-2">목차</span>
            {[
              '1. 표지', '2. 프로젝트 개요', '3. 설계 조건',
              '4.1 부하 분석', '4.2 환경 분석', '4.3 PV 성능',
              '4.4 ESS 운영', '4.5 Thermal', '5. 경제성',
              '6. 정량 효과', '7. 종합 요약',
            ].map((item) => (
              <span key={item} className="text-gray-500">{item}</span>
            ))}
          </div>

          {/* Pages */}
          <CoverPage />
          <ProjectOverviewPage />
          <DesignInputPage />
          <LoadResultPage />
          <EnvironmentResultPage />
          <PvPerformancePage />
          <PvMetricsPage />
          <EssOperationPage />
          <ThermalNetworkPage />
          <EconomicAnalysisPage />
          <QuantitativeEffectPage />
          <SummaryPage />
        </div>
      </div>
    </div>
  );
}

export default App;
