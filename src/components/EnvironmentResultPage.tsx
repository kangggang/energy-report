import ReportPage from './ReportPage';
import SectionHeader from './SectionHeader';
import MetricCard from './MetricCard';
import ChartCard from './ChartCard';
import AnalysisComment from './AnalysisComment';
import { environmentSimulationResults, environmentChartData } from '@/data/reportData';
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

export default function EnvironmentResultPage() {
  const { monthly } = environmentChartData;

  return (
    <>
      {/* Page 7: Environment KPIs + GHI, Temp, DewPoint, Humidity */}
      <ReportPage pageNumber={7}>
        <SectionHeader
          sectionNumber="4.2"
          title="환경 분석 결과"
          subtitle="TMY 기상 데이터 기반 입지의 연간 환경 특성을 분석합니다."
        />

        <div className="grid grid-cols-3 gap-3 mb-5">
          <MetricCard label="연평균 건구온도" value={`${environmentSimulationResults.avgDryBulbTemp}`} unit="°C" highlight />
          <MetricCard label="연평균 이슬점" value={`${environmentSimulationResults.avgDewPoint}`} unit="°C" />
          <MetricCard label="연평균 상대습도" value={`${environmentSimulationResults.avgHumidity}`} unit="%" />
          <MetricCard label="연평균 기압" value={`${environmentSimulationResults.avgPressure}`} unit="hPa" />
          <MetricCard label="연평균 풍속" value={`${environmentSimulationResults.avgWindSpeed}`} unit="m/s" />
          <MetricCard
            label="연간 GHI 합계"
            value={environmentSimulationResults.annualGHI.toLocaleString()}
            unit="Wh/m²"
            highlight
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* GHI */}
          <ChartCard
            title="월별 평균 수평면 일사량 (GHI)"
            basisLabel="집계기준"
            basisValue="월평균"
          >
            <ResponsiveContainer width="100%" height={160}>
              <AreaChart data={monthly} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 8 }} />
                <YAxis tick={{ fontSize: 9 }} width={30} />
                <Tooltip formatter={(v) => [`${v} kWh/m²`, 'GHI']} />
                <Area type="monotone" dataKey="ghi" stroke="#313DB8" fill="#e8eaf6" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 건구온도 */}
          <ChartCard
            title="월별 평균 건구온도"
            basisLabel="집계기준"
            basisValue="월평균"
          >
            <ResponsiveContainer width="100%" height={160}>
              <LineChart data={monthly} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 8 }} />
                <YAxis tick={{ fontSize: 9 }} width={30} unit="°C" />
                <Tooltip formatter={(v) => [`${v}°C`, '건구온도']} />
                <Line type="monotone" dataKey="temp" stroke="#f59e0b" strokeWidth={2} dot={{ r: 2, fill: '#f59e0b' }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 이슬점 */}
          <ChartCard
            title="월별 평균 이슬점 온도"
            basisLabel="집계기준"
            basisValue="월평균"
          >
            <ResponsiveContainer width="100%" height={160}>
              <LineChart data={monthly} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 8 }} />
                <YAxis tick={{ fontSize: 9 }} width={30} unit="°C" />
                <Tooltip formatter={(v) => [`${v}°C`, '이슬점']} />
                <Line type="monotone" dataKey="dewPoint" stroke="#5c6bc0" strokeWidth={2} dot={{ r: 2, fill: '#5c6bc0' }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 상대습도 */}
          <ChartCard
            title="월별 평균 상대습도"
            basisLabel="집계기준"
            basisValue="월평균"
          >
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={monthly} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 8 }} />
                <YAxis tick={{ fontSize: 9 }} width={30} unit="%" domain={[40, 100]} />
                <Tooltip formatter={(v) => [`${v}%`, '상대습도']} />
                <Bar dataKey="humidity" fill="#7986cb" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </ReportPage>

      {/* Page 8: Pressure, Wind */}
      <ReportPage pageNumber={8}>
        <SectionHeader sectionNumber="4.2" title="환경 분석 결과 (계속)" />

        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* 기압 */}
          <ChartCard
            title="월별 평균 표면기압"
            basisLabel="집계기준"
            basisValue="월평균"
          >
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={monthly} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 8 }} />
                <YAxis tick={{ fontSize: 9 }} width={38} domain={[995, 1030]} unit="hPa" />
                <Tooltip formatter={(v) => [`${v} hPa`, '기압']} />
                <Area type="monotone" dataKey="pressure" stroke="#9fa8da" fill="#e8eaf6" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 풍속 */}
          <ChartCard
            title="월별 평균 풍속"
            basisLabel="집계기준"
            basisValue="월평균"
          >
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={monthly} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 8 }} />
                <YAxis tick={{ fontSize: 9 }} width={30} unit=" m/s" domain={[0, 4]} />
                <Tooltip formatter={(v) => [`${v} m/s`, '풍속']} />
                <Bar dataKey="windSpeed" fill="#5c6bc0" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <AnalysisComment
          text={`연간 GHI 합계는 ${environmentSimulationResults.annualGHI.toLocaleString()} Wh/m²로, 5월에 최대 일사량(185.8 kWh/m²/월)이 발생합니다. 연평균 기온은 12.5°C이며 여름철 고온다습 환경이 PV 셀 온도 상승에 영향을 줄 수 있어 설계 시 반영되었습니다. 평균 풍속 2.2 m/s는 PV 모듈 냉각에 보조적인 역할을 합니다.`}
        />
      </ReportPage>
    </>
  );
}
