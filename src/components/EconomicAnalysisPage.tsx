import ReportPage from './ReportPage';
import SectionHeader from './SectionHeader';
import MetricCard from './MetricCard';
import ChartCard from './ChartCard';
import DataTable from './DataTable';
import AnalysisComment from './AnalysisComment';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
  economicAnalysisResults,
  cashFlowData,
  cumulativeCashFlowData,
  economicTableData,
} from '@/data/reportData';
import {
  ComposedChart, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine,
} from 'recharts';

function formatBillion(v: number): string {
  return `${(v / 100000000).toFixed(1)}억`;
}

export default function EconomicAnalysisPage() {
  const { conditions, results } = economicAnalysisResults;
  const conditionRows = [
    { item: '운영 기간', value: conditions.operatingPeriod },
    { item: '할인율', value: `${conditions.discountRate}%` },
    { item: '물가상승률', value: `${conditions.inflationRate.toFixed(2)}%` },
    { item: '자기자본 비율', value: `${conditions.equityRatio}%` },
    { item: '부채 비율', value: `${conditions.debtRatio}%` },
    { item: '이자율', value: `${conditions.interestRate}%` },
    { item: '대출 상환 기간', value: `${conditions.loanRepaymentPeriod} Years` },
  ];

  // Table: 0~10 years
  const tableRows1 = economicTableData.slice(0, 11).map((row) => ({
    year: `Y${row.year}`,
    investment: row.investment !== 0 ? formatBillion(row.investment) : '—',
    salesRevenue: row.salesRevenue !== 0 ? formatBillion(row.salesRevenue) : '—',
    operatingCost: row.operatingCost !== 0 ? formatBillion(row.operatingCost) : '—',
    operatingCashFlow: row.operatingCashFlow !== 0 ? formatBillion(row.operatingCashFlow) : '—',
  }));

  // Table: 11~20 years
  const tableRows2 = economicTableData.slice(11, 21).map((row) => ({
    year: `Y${row.year}`,
    investment: '—',
    salesRevenue: formatBillion(row.salesRevenue),
    operatingCost: formatBillion(row.operatingCost),
    operatingCashFlow: formatBillion(row.operatingCashFlow),
  }));

  return (
    <>
      {/* Page 16: Economic Analysis Overview */}
      <ReportPage pageNumber={16}>
        <SectionHeader
          sectionNumber="5."
          title="경제성 분석"
          subtitle="20년 분석기간 기준 투자비 대비 수익성을 평가합니다."
        />

        {/* 5.1 분석 조건 */}
        <h3 className="text-sm font-semibold text-gray-700 mb-2">5.1 분석 조건</h3>
        <DataTable
          columns={[
            { key: 'item', header: '항목', align: 'left' },
            { key: 'value', header: '값', align: 'right' },
          ]}
          data={conditionRows}
          className="mb-5"
          compact
        />

        <Separator className="mb-4" />

        {/* 5.2 경제성 결과 */}
        <h3 className="text-sm font-semibold text-gray-700 mb-3">5.2 경제성 결과</h3>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className={`border rounded-lg p-3 ${results.npv < 0 ? 'border-red-200 bg-red-50' : 'border-[#313DB8] bg-[#f0f2ff]'}`}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-gray-500">NPV (순현재가치)</span>
              {results.npv < 0 && <Badge variant="muted" className="text-[10px]">손실 구간</Badge>}
            </div>
            <p className={`text-xl font-bold ${results.npv < 0 ? 'text-red-600' : 'text-[#313DB8]'}`}>
              {(results.npv / 100000000).toFixed(1)}억원
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{results.npv.toLocaleString()}원</p>
          </div>
          <div className={`border rounded-lg p-3 ${results.irr < 0 ? 'border-orange-200 bg-orange-50' : 'border-[#313DB8] bg-[#f0f2ff]'}`}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-gray-500">IRR (내부수익률)</span>
              {results.irr < 0 && <Badge variant="muted" className="text-[10px]">기준 미달</Badge>}
            </div>
            <p className={`text-xl font-bold ${results.irr < 0 ? 'text-orange-600' : 'text-[#313DB8]'}`}>
              {results.irr.toFixed(2)}%
            </p>
          </div>
          <MetricCard label="단순 회수기간" value={`${results.payback} 년`} />
          <MetricCard label="할인 회수기간" value={`${results.discountedPayback} 년`} />
        </div>

        {/* Cash Flow Chart */}
        <ChartCard
          title="연도별 현금흐름"
          basisLabel={cashFlowData.basisLabel}
          basisValue={cashFlowData.basisValue}
        >
          <ResponsiveContainer width="100%" height={190}>
            <ComposedChart data={cashFlowData.data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="year" tick={{ fontSize: 8 }} interval={2} />
              <YAxis tick={{ fontSize: 9 }} tickFormatter={(v) => `${v}억`} width={38} />
              <Tooltip formatter={(v, name) => [`${v}억원`, name === 'investment' ? '투자비' : name === 'salesRevenue' ? '매출' : name === 'operatingCost' ? '운영비' : '운영현금흐름']} />
              <Legend iconSize={8} wrapperStyle={{ fontSize: '9px' }} />
              <Bar dataKey="investment" fill="#ef4444" name="투자비" />
              <Bar dataKey="salesRevenue" fill="#313DB8" name="매출" stackId="a" radius={[2, 2, 0, 0]} />
              <Bar dataKey="operatingCost" fill="#c5cae9" name="운영비" stackId="a" />
              <Line type="monotone" dataKey="operatingCashFlow" stroke="#f59e0b" strokeWidth={2} dot={false} name="운영현금흐름" />
              <ReferenceLine y={0} stroke="#9ca3af" />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </ReportPage>

      {/* Page 17: Cumulative + Economic Table */}
      <ReportPage pageNumber={17}>
        <SectionHeader sectionNumber="5." title="경제성 분석 — 누적현금흐름 및 투자수익 구조" />

        {/* Cumulative Cash Flow */}
        <ChartCard
          title="누적 현금흐름"
          description="투자비 회수 흐름과 할인현금흐름 기준 회수 가능성을 나타냅니다."
          basisLabel={cumulativeCashFlowData.basisLabel}
          basisValue={cumulativeCashFlowData.basisValue}
          className="mb-4"
        >
          <ResponsiveContainer width="100%" height={190}>
            <LineChart data={cumulativeCashFlowData.data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="year" tick={{ fontSize: 8 }} />
              <YAxis tick={{ fontSize: 9 }} tickFormatter={(v) => `${v}억`} width={42} />
              <Tooltip formatter={(v, name) => [`${v}억원`, name === 'cumulative' ? '누적현금흐름' : '할인누적현금흐름']} />
              <Legend iconSize={8} wrapperStyle={{ fontSize: '9px' }} />
              <ReferenceLine y={0} stroke="#9ca3af" strokeDasharray="3 3" />
              <Line type="monotone" dataKey="cumulative" stroke="#313DB8" strokeWidth={2} dot={false} name="누적현금흐름 (억원)" />
              <Line type="monotone" dataKey="cumulativeDiscounted" stroke="#f59e0b" strokeWidth={2} strokeDasharray="4 2" dot={false} name="할인누적현금흐름 (억원)" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <Separator className="mb-3" />

        <h3 className="text-xs font-semibold text-gray-700 mb-2">Investment and Profit Structure — Y0~Y10</h3>
        <DataTable
          columns={[
            { key: 'year', header: '연도', align: 'center' },
            { key: 'investment', header: '투자비', align: 'right' },
            { key: 'salesRevenue', header: '매출', align: 'right' },
            { key: 'operatingCost', header: '운영비', align: 'right' },
            { key: 'operatingCashFlow', header: '운영CF', align: 'right' },
          ]}
          data={tableRows1}
          compact
          className="mb-3"
        />

        <h3 className="text-xs font-semibold text-gray-700 mb-2">Investment and Profit Structure — Y11~Y20</h3>
        <DataTable
          columns={[
            { key: 'year', header: '연도', align: 'center' },
            { key: 'investment', header: '투자비', align: 'right' },
            { key: 'salesRevenue', header: '매출', align: 'right' },
            { key: 'operatingCost', header: '운영비', align: 'right' },
            { key: 'operatingCashFlow', header: '운영CF', align: 'right' },
          ]}
          data={tableRows2}
          compact
          className="mb-3"
        />

        <AnalysisComment
          text={`NPV ${(results.npv / 100000000).toFixed(1)}억원, IRR ${results.irr.toFixed(2)}%로 현재 조건에서는 투자비 회수가 어려운 구조입니다. 단순회수기간은 ${results.payback}년으로 분석기간(20년) 내 회수가 가능하나, 할인율을 적용한 경제성은 낮습니다. 전력요금 인상, REC 가격 조건 개선, 정부 지원금 등 추가 조건 반영 시 수익성이 크게 변화할 수 있습니다.`}
        />
      </ReportPage>
    </>
  );
}
