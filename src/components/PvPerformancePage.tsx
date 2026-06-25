import ReportPage from './ReportPage';
import SectionHeader from './SectionHeader';
import ChartCard from './ChartCard';
import AnalysisComment from './AnalysisComment';
import {
  hourlyAmbientTemperatureData,
  poaAndPvOutputData,
  hourlySystemEfficiencyData,
  monthlyPvEnergyLoadPoaData,
} from '@/data/reportData';
import {
  LineChart, Line, BarChart, Bar, ComposedChart,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Legend, ReferenceLine,
} from 'recharts';

export default function PvPerformancePage() {
  return (
    <>
      {/* Page 9: Hourly charts */}
      <ReportPage pageNumber={9}>
        <SectionHeader
          sectionNumber="4.3"
          title="PV 발전 성능 분석"
          subtitle="태양광 발전 시스템의 대표일 운전 특성 및 연간 성능을 분석합니다."
        />

        {/* Chart 1: 외기온도 */}
        <ChartCard
          title={hourlyAmbientTemperatureData.title}
          description={hourlyAmbientTemperatureData.description}
          basisLabel={hourlyAmbientTemperatureData.basisLabel}
          basisValue={hourlyAmbientTemperatureData.basisValue}
          className="mb-4"
        >
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={hourlyAmbientTemperatureData.data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="hour" tick={{ fontSize: 9 }} interval={1} label={{ value: '시간 (h)', position: 'insideBottom', offset: -2, fontSize: 9 }} />
              <YAxis tick={{ fontSize: 9 }} unit="°C" width={38} />
              <Tooltip formatter={(v) => [`${v}°C`, '외기온도']} labelFormatter={(l) => `${l}시`} />
              <Line type="monotone" dataKey="value" stroke="#f59e0b" strokeWidth={2} dot={{ r: 2 }} />
              <ReferenceLine y={0} stroke="#9ca3af" strokeDasharray="2 2" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Chart 2: POA 및 PV 출력 */}
        <ChartCard
          title={poaAndPvOutputData.title}
          description="선택 기준일의 일사량 변화에 따른 PV 출력 반응을 나타냅니다."
          basisLabel={poaAndPvOutputData.basisLabel}
          basisValue={poaAndPvOutputData.basisValue}
          className="mb-4"
        >
          <ResponsiveContainer width="100%" height={160}>
            <ComposedChart data={poaAndPvOutputData.data} margin={{ top: 4, right: 40, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="hour" tick={{ fontSize: 9 }} interval={1} />
              <YAxis yAxisId="left" tick={{ fontSize: 9 }} width={40} label={{ value: 'W/m²', angle: -90, position: 'insideLeft', fontSize: 8, offset: 10 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 9 }} width={40} label={{ value: 'kW', angle: 90, position: 'insideRight', fontSize: 8, offset: 10 }} />
              <Tooltip />
              <Legend iconSize={9} wrapperStyle={{ fontSize: '10px' }} />
              <Bar yAxisId="left" dataKey="poa" fill="#e8eaf6" stroke="#9fa8da" strokeWidth={1} name="POA (W/m²)" />
              <Line yAxisId="right" type="monotone" dataKey="pvOutput" stroke="#313DB8" strokeWidth={2} dot={false} name="PV출력 (kW)" />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Chart 3: 시스템 운전 효율 */}
        <ChartCard
          title={hourlySystemEfficiencyData.title}
          description="발전이 발생하는 시간대(일출~일몰)의 시스템 운전 효율 변화를 나타냅니다."
          basisLabel={hourlySystemEfficiencyData.basisLabel}
          basisValue={hourlySystemEfficiencyData.basisValue}
          className="mb-4"
        >
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={hourlySystemEfficiencyData.data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="hour" tick={{ fontSize: 9 }} label={{ value: '시간 (h)', position: 'insideBottom', offset: -2, fontSize: 9 }} />
              <YAxis tick={{ fontSize: 9 }} unit="%" domain={[0, 100]} width={34} />
              <Tooltip formatter={(v) => [`${v}%`, '시스템 효율']} labelFormatter={(l) => `${l}시`} />
              <ReferenceLine y={50.5} stroke="#f59e0b" strokeDasharray="3 3" label={{ value: '연평균 50.5%', fill: '#f59e0b', fontSize: 8 }} />
              <Line type="monotone" dataKey="value" stroke="#313DB8" strokeWidth={2} dot={{ r: 3, fill: '#313DB8' }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <AnalysisComment
          text="대표일(2026-06-25) 기준 PV 시스템은 오전 5시부터 발전을 시작하여 오후 12시~1시경 최대 출력 1,249 kW를 달성합니다. 시스템 운전 효율은 낮 시간대 최대 70.8%에 도달하며, 일출·일몰 전후 시간대에는 효율이 낮아집니다."
        />
      </ReportPage>

      {/* Page 10: Monthly PV-Load-POA */}
      <ReportPage pageNumber={10}>
        <SectionHeader sectionNumber="4.3" title="PV 발전 성능 분석 — 월별 비교" />

        <ChartCard
          title={monthlyPvEnergyLoadPoaData.title}
          description={monthlyPvEnergyLoadPoaData.description}
          basisLabel={monthlyPvEnergyLoadPoaData.basisLabel}
          basisValue={monthlyPvEnergyLoadPoaData.basisValue}
          className="mb-5"
        >
          <ResponsiveContainer width="100%" height={250}>
            <ComposedChart data={monthlyPvEnergyLoadPoaData.data} margin={{ top: 8, right: 40, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 9 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 9 }} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} width={42} label={{ value: 'kWh', angle: -90, position: 'insideLeft', fontSize: 8, offset: 10 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 9 }} width={36} label={{ value: 'kWh/m²', angle: 90, position: 'insideRight', fontSize: 8, offset: 10 }} />
              <Tooltip formatter={(v, name) => [
                name === 'poa' ? `${v} kWh/m²` : `${Number(v).toLocaleString()} kWh`,
                name === 'pvOutput' ? 'PV 발전량' : name === 'load' ? '전력부하' : 'POA',
              ]} />
              <Legend iconSize={10} wrapperStyle={{ fontSize: '10px', paddingTop: '8px' }} />
              <Bar yAxisId="left" dataKey="pvOutput" fill="#313DB8" radius={[2, 2, 0, 0]} name="PV 발전량 (kWh)" />
              <Bar yAxisId="left" dataKey="load" fill="#c5cae9" radius={[2, 2, 0, 0]} name="전력부하 (kWh)" />
              <Line yAxisId="right" type="monotone" dataKey="poa" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} name="POA (kWh/m²)" />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>

        <AnalysisComment
          text="연간 PV 발전량은 9,900,990 kWh로, 전체 전력 부하(29,978,974 kWh)의 약 33.0%를 충당합니다. 5월에 가장 많은 발전량(1,320,000 kWh)이 발생하며, POA 일사량과 발전량은 강한 양의 상관관계를 보입니다. 하절기(7~8월)에는 일사량 대비 발전 효율이 다소 낮아지는데, 이는 고온에 의한 PV 셀 온도 상승의 영향입니다."
        />
      </ReportPage>
    </>
  );
}
