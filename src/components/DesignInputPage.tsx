import ReportPage from './ReportPage';
import SectionHeader from './SectionHeader';
import DataTable from './DataTable';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
  weatherFileHeaderData,
  weatherAnnualAverages,
  calculationMethod,
  simulationType,
  facilityConfiguration,
} from '@/data/reportData';

export default function DesignInputPage() {
  const weatherHeaderRows = [
    { item: 'Latitude', value: weatherFileHeaderData.latitude },
    { item: 'Longitude', value: weatherFileHeaderData.longitude },
    { item: 'Time Zone', value: weatherFileHeaderData.timezone },
    { item: 'Elevation', value: weatherFileHeaderData.elevation },
    { item: 'Time Step', value: weatherFileHeaderData.timeStep },
    { item: 'Location', value: weatherFileHeaderData.location },
  ];

  const weatherAvgRows = [
    { item: 'Global Horizontal Irradiation (GHI)', value: weatherAnnualAverages.ghi },
    { item: 'Relative Humidity', value: weatherAnnualAverages.relativeHumidity },
    { item: 'Surface Pressure', value: weatherAnnualAverages.surfacePressure },
    { item: 'Dew Point Temperature', value: weatherAnnualAverages.dewPoint },
    { item: 'Dry-bulb Temperature', value: weatherAnnualAverages.dryBulbTemp },
    { item: 'Wind Speed', value: weatherAnnualAverages.windSpeed },
  ];

  return (
    <>
      {/* Page 4 */}
      <ReportPage pageNumber={4}>
        <SectionHeader sectionNumber="3." title="설계 조건 및 입력 데이터" />

        {/* 3.1 입지 및 기상데이터 */}
        <h3 className="text-sm font-semibold text-gray-700 mb-2">3.1 입지 및 기상 데이터</h3>
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <p className="text-xs text-gray-500 mb-1.5 font-medium">Header Data from Weather File</p>
            <DataTable
              columns={[
                { key: 'item', header: '항목', align: 'left' },
                { key: 'value', header: '값', align: 'right' },
              ]}
              data={weatherHeaderRows}
              compact
            />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1.5 font-medium">Annual Averages from Weather File</p>
            <DataTable
              columns={[
                { key: 'item', header: '항목', align: 'left' },
                { key: 'value', header: '값', align: 'right' },
              ]}
              data={weatherAvgRows}
              compact
            />
          </div>
        </div>

        <Separator className="mb-4" />

        {/* 3.2 계산 방식 */}
        <h3 className="text-sm font-semibold text-gray-700 mb-2">3.2 계산 방식</h3>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {calculationMethod.options.map((opt) => {
            const isSelected = opt.id === calculationMethod.selected;
            return (
              <div
                key={opt.id}
                className={`rounded-lg border p-3 text-xs ${
                  isSelected
                    ? 'border-[#313DB8] bg-[#f0f2ff]'
                    : 'border-gray-200 bg-gray-50 opacity-50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#313DB8]' : 'bg-gray-400'}`} />
                  <span className={`font-semibold ${isSelected ? 'text-[#313DB8]' : 'text-gray-500'}`}>
                    {opt.name}
                  </span>
                  {isSelected && <Badge variant="primary" className="text-[10px]">선택됨</Badge>}
                </div>
                <p className="text-gray-600 leading-relaxed">{opt.description}</p>
              </div>
            );
          })}
        </div>

        <Separator className="mb-4" />

        {/* 3.3 시뮬레이션 타입 */}
        <h3 className="text-sm font-semibold text-gray-700 mb-2">3.3 시뮬레이션 타입</h3>
        <div className="grid grid-cols-2 gap-3">
          {simulationType.options.map((opt) => {
            const isSelected = opt.id === simulationType.selected;
            return (
              <div
                key={opt.id}
                className={`rounded-lg border p-3 text-xs ${
                  isSelected
                    ? 'border-[#313DB8] bg-[#f0f2ff]'
                    : 'border-gray-200 bg-gray-50 opacity-50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#313DB8]' : 'bg-gray-400'}`} />
                  <span className={`font-semibold ${isSelected ? 'text-[#313DB8]' : 'text-gray-500'}`}>
                    {opt.name}
                  </span>
                  {isSelected && <Badge variant="primary" className="text-[10px]">선택됨</Badge>}
                </div>
                <p className="text-gray-600 leading-relaxed">{opt.description}</p>
              </div>
            );
          })}
        </div>
      </ReportPage>

      {/* Page 5: Facility Configuration */}
      <ReportPage pageNumber={5}>
        <SectionHeader sectionNumber="3." title="재생에너지 설비 구성 및 운영 전략" />

        <h3 className="text-sm font-semibold text-gray-700 mb-3">3.4 설비 구성</h3>

        <div className="grid grid-cols-2 gap-4 mb-5">
          {/* PV */}
          <div className="border border-gray-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded bg-[#313DB8] flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">PV</span>
              </div>
              <span className="text-sm font-semibold text-gray-800">태양광 발전 (PV)</span>
            </div>
            <div className="space-y-1 text-xs">
              {[
                ['설치용량', facilityConfiguration.pv.capacity],
                ['설치형태', facilityConfiguration.pv.type],
                ['설치각도', facilityConfiguration.pv.tiltAngle],
                ['설치면적', facilityConfiguration.pv.area],
                ['변환효율', facilityConfiguration.pv.efficiency],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-gray-50 pb-1">
                  <span className="text-gray-500">{label}</span>
                  <span className="text-gray-800 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ESS */}
          <div className="border border-gray-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded bg-[#5c6bc0] flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">ESS</span>
              </div>
              <span className="text-sm font-semibold text-gray-800">에너지 저장장치 (ESS)</span>
            </div>
            <div className="space-y-1 text-xs">
              {[
                ['ESS 용량', facilityConfiguration.ess.capacity],
                ['PCS 용량', facilityConfiguration.ess.pcsCapacity],
                ['운영 전략', facilityConfiguration.ess.strategy],
                ['잉여전력', facilityConfiguration.ess.excessPower],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-gray-50 pb-1">
                  <span className="text-gray-500 shrink-0">{label}</span>
                  <span className="text-gray-800 font-medium text-right ml-2">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PVT */}
          <div className="border border-gray-100 rounded-lg p-3 opacity-50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded bg-gray-300 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">PVT</span>
              </div>
              <span className="text-sm font-semibold text-gray-500">PVT (태양광열 복합)</span>
            </div>
            <p className="text-xs text-gray-400">{facilityConfiguration.pvt.note}</p>
          </div>

          {/* ST */}
          <div className="border border-gray-100 rounded-lg p-3 opacity-50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded bg-gray-300 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">ST</span>
              </div>
              <span className="text-sm font-semibold text-gray-500">태양열 (Solar Thermal)</span>
            </div>
            <p className="text-xs text-gray-400">{facilityConfiguration.st.note}</p>
          </div>
        </div>

        <Separator className="mb-4" />

        <h3 className="text-sm font-semibold text-gray-700 mb-3">운영 전략</h3>
        <div className="grid grid-cols-2 gap-3 text-xs">
          {[
            ['자가소비 우선', facilityConfiguration.operatingStrategy.selfConsumptionPriority ? '적용' : '미적용'],
            ['PPA 연계', facilityConfiguration.operatingStrategy.ppaLinked ? '연계' : '미연계'],
            ['ESS 운영 전략', facilityConfiguration.operatingStrategy.essStrategy],
            ['잉여전력 처리', facilityConfiguration.operatingStrategy.excessHandling],
          ].map(([label, value]) => (
            <div key={label} className="border border-gray-200 rounded p-2.5">
              <p className="text-gray-500 mb-0.5">{label}</p>
              <p className="text-gray-800 font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </ReportPage>
    </>
  );
}
