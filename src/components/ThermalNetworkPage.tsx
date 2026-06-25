import ReportPage from './ReportPage';
import SectionHeader from './SectionHeader';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function ThermalNetworkPage() {
  return (
    <ReportPage pageNumber={15}>
      <SectionHeader
        sectionNumber="4.5"
        title="Thermal Network 분석"
      />

      <div className="flex flex-col items-center justify-center flex-1 py-8">
        <div className="mb-4">
          <Badge variant="muted" className="text-xs">향후 확장 예정 기능</Badge>
        </div>

        <Card className="max-w-lg w-full border-dashed border-gray-300">
          <CardContent className="p-8 text-center">
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>

            <h3 className="text-sm font-semibold text-gray-700 mb-2">Thermal Network 분석 모듈</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Thermal Network 분석은 향후 Heat demand 및 Gas demand 데이터를 기반으로 열 부하, 열원 구성, 열 수요-공급 매칭률 등을 분석하는 고도화 기능으로 확장될 예정입니다.
            </p>

            <div className="border-t border-gray-100 pt-4 mt-4">
              <p className="text-xs text-gray-400 font-medium mb-2">포함 예정 분석 항목</p>
              <div className="grid grid-cols-2 gap-2 text-left">
                {[
                  '열 부하 프로파일 분석',
                  'CHP 운영 최적화',
                  '연료전지 연계 분석',
                  '열-전기 복합 수요 매칭',
                  '열원 구성 비교',
                  '온실가스 통합 산정',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-gray-500">
                    <div className="w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-xs text-gray-400 mt-4 text-center max-w-md">
          본 시뮬레이션은 RE100 타입(전력수요 기반)으로 수행되었습니다.<br />
          탄소중립(Carbon Neutrality) 시뮬레이션 타입 선택 시 해당 모듈이 활성화됩니다.
        </p>
      </div>
    </ReportPage>
  );
}
