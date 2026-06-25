// ─── Project Info ────────────────────────────────────────────────────────────
export const projectInfo = {
  reportTitle: '산업단지 재생에너지 설계 시뮬레이션 결과 보고서',
  projectName: '대덕 산업단지 재생에너지 설계 프로젝트',
  siteName: '대덕 제2 국가산업단지',
  siteAddress: '대전광역시 대덕구 신일동 일원',
  analysisPurpose: 'RE100 대응',
  analysisPeriod: '20년 (2025~2044)',
  analysisDate: '2026-06-25',
  platform: 'EGRI 재생에너지 시뮬레이션 플랫폼',
  industry: '금속·기계·전기전자 복합업종',
  area: '1,450,000 m²',
  contractPower: '28,500 kW',
  annualConsumption: '29,978,974 kWh',
  peakDemand: '4,353 kW',
};

// ─── Selected Complex Energy Consumption ─────────────────────────────────────
export const selectedComplexEnergyConsumption = {
  comparedAddresses: 43,
  totalConsumption: 29978974,
  avgConsumption: 58099,
  loadFactor: 0.78,
  peakDemand: 4353,
  top10PercentShare: 45.1,
};

// ─── Weather File Header ──────────────────────────────────────────────────────
export const weatherFileHeaderData = {
  latitude: '36.44 degrees',
  longitude: '127.41 degrees',
  timezone: 'UTC+9',
  elevation: '37.70 m',
  timeStep: '60 minutes',
  location: '대전광역시 대덕구 신일동',
};

// ─── Weather Annual Averages ──────────────────────────────────────────────────
export const weatherAnnualAverages = {
  ghi: '160.24 kWh/m²/year',
  relativeHumidity: '67.15%',
  surfacePressure: '1001.89 hPa',
  dewPoint: '5.92°C',
  dryBulbTemp: '12.46°C',
  windSpeed: '2.24 m/s',
};

// ─── Calculation Method ───────────────────────────────────────────────────────
export const calculationMethod = {
  selected: 'basic',
  options: [
    {
      id: 'basic',
      name: 'Basic TMY-based Calculation',
      description: 'TMY 기상 데이터를 기반으로 한 기본 계산 방식으로, 기본 재생에너지 설계 검토 및 초기 계획에 적합합니다.',
    },
    {
      id: 'detailed',
      name: 'Detailed 3D Calculation',
      description: '3D 건물 및 공간 조건을 반영한 상세 계산 방식으로, 그림자, 건물 형태, 설치 조건 등을 반영한 정밀 분석에 적합합니다.',
    },
  ],
};

// ─── Simulation Type ──────────────────────────────────────────────────────────
export const simulationType = {
  selected: 're100',
  options: [
    {
      id: 're100',
      name: 'RE100',
      description: '전력수요만을 기반으로 한 단순 시뮬레이션으로, 기본적인 재생에너지 설계 및 RE100 대응 검토에 적합합니다.',
    },
    {
      id: 'carbon',
      name: 'Carbon Neutrality',
      description: 'CHP, 연료전지 및 열에너지 모듈을 포함한 통합 탄소중립 계획 수립용 시뮬레이션입니다.',
    },
  ],
};

// ─── Facility Configuration ───────────────────────────────────────────────────
export const facilityConfiguration = {
  pv: {
    capacity: '9,800 kWp',
    type: '옥상 고정형',
    tiltAngle: '30°',
    area: '65,000 m²',
    efficiency: '20.5%',
  },
  ess: {
    capacity: '16,782.5 kWh',
    pcsCapacity: '969 kW',
    strategy: '자가소비 우선 + 피크저감',
    excessPower: '계통 역송 (PPA 연계)',
  },
  pvt: { capacity: '미적용', note: '향후 확장 예정' },
  st: { capacity: '미적용', note: '향후 확장 예정' },
  operatingStrategy: {
    selfConsumptionPriority: true,
    ppaLinked: true,
    essStrategy: '야간 충전 / 주간 피크시간대 방전',
    excessHandling: '계통 역송 (PPA 연계)',
  },
};

// ─── Load Simulation Results ─────────────────────────────────────────────────
export const loadSimulationResults = {
  comparedAddresses: 43,
  annualTotal: 29978973,
  peakMonth: 'Aug',
  peakMonthConsumption: 2812480,
};

// ─── Environment Simulation Results ──────────────────────────────────────────
export const environmentSimulationResults = {
  avgDryBulbTemp: 12.5,
  avgDewPoint: 5.9,
  avgHumidity: 67.1,
  avgPressure: 1001.9,
  avgWindSpeed: 2.2,
  annualGHI: 1403734,
};

// ─── PV Simulation Results ────────────────────────────────────────────────────
export const pvSimulationResults = {
  annualMetrics: {
    pvOutputAvg: 1127,
    pvOutputSum: 9900990,
    loadAvg: 82134,
    loadSum: 29978974,
    poaAvg: 158,
    poaSum: 1384,
    ghiAvg: 160,
    ghiSum: 1408,
    systemEfficiencyAvg: 50.5,
    ambientTempAvg: 12.5,
    cellTempAvg: 17.7,
  },
};

// ─── ESS Simulation Results ───────────────────────────────────────────────────
export const essSimulationResults = {
  analysisPeriod: 366,
  totalCharging: 2522969.2,
  totalDischarging: 1587795.4,
  avgDailyCharging: 160.3,
  avgDailyDischarging: 100.9,
  roundTripEfficiency: 60.9,
  maxPeakWithoutESS: 4844.8,
  maxPeakWithESS: 3875.8,
  peakReductionAmount: 969,
  peakReductionRate: 20,
  analysisUnit: 'Hour',
  currentPeakLoad: 4844.78,
  targetPeakLoad: 3875.82,
  targetReductionAmount: 968.95,
  targetReductionRate: 20.0,
  selectedPCS: 969.0,
  selectedESSCapacity: 16782.5,
  maxContinuousPeakDuration: 0.0,
};

// ─── Economic Analysis Results ────────────────────────────────────────────────
export const economicAnalysisResults = {
  conditions: {
    operatingPeriod: '20 Years',
    discountRate: 5,
    inflationRate: 3.24,
    equityRatio: 80,
    debtRatio: 20,
    interestRate: 5,
    loanRepaymentPeriod: 5,
  },
  results: {
    npv: -29153229143,
    irr: -0.42,
    discountedPayback: 2.34,
    payback: 9.82,
  },
};

// ─── Quantitative Effects ─────────────────────────────────────────────────────
export const quantitativeEffects = {
  annualRenewableGeneration: 9900990,
  annualConsumption: 29978974,
  re100Rate: 33.0,
  peakReductionRate: 20.0,
  annualGHGReduction: 4555.5,
  cumulativeGHGReduction: 91110,
  annualElectricityCostSaving: 1287128700,
};

// ─── Summary ──────────────────────────────────────────────────────────────────
export const summary = {
  projectName: '대덕 산업단지 재생에너지 설계 프로젝트',
  siteName: '대덕 제2 국가산업단지',
  analysisPurpose: 'RE100 대응',
  analysisPeriod: '20년 (2025~2044)',
  facilities: 'PV (9,800 kWp) + ESS (16,782.5 kWh / 969 kW PCS)',
  annualConsumption: '29,978,974 kWh',
  annualPVGeneration: '9,900,990 kWh',
  peakReduction: '969 kW (20%)',
  essEffect: 'ESS 피크저감 20%, 피크부하 4,844.8 kW → 3,875.8 kW',
  economicResult: 'NPV: -291.5억원, IRR: -0.42%, 단순회수기간: 9.82년',
  re100Rate: '33.0%',
  ghgReduction: '연간 4,555.5 tCO₂eq 감축',
  conclusion:
    '본 시뮬레이션 결과, 대상 산업단지는 PV 및 ESS를 연계 운영할 경우 재생에너지 기반 전력 자가소비 확대와 피크부하 저감 효과를 기대할 수 있습니다. 다만 경제성 분석 결과는 투자비, 전력요금, REC/SMP 가격, 운영비 조건에 따라 달라질 수 있으므로, 실제 견적 및 운영 조건을 반영한 추가 검토가 필요합니다.',
};

// ─────────────────────────────────────────────────────────────────────────────
// CHART DATA
// ─────────────────────────────────────────────────────────────────────────────

// 단지 24h 평균 통합 부하 프로파일
export const complex24hAggregateProfileData = {
  id: 'complex24h',
  title: '단지 24시간 평균 통합 부하 프로파일',
  originalTitle: 'Complex 24h Aggregate Profile (kWh)',
  basisType: 'aggregation' as const,
  basisLabel: '집계기준',
  basisValue: '연평균 일일 패턴',
  unit: 'kWh',
  description: '선택 단지의 연평균 24시간 전력사용 패턴을 나타낸 그래프로, 단지 전체의 일일 부하 흐름과 피크 시간대를 확인할 수 있습니다.',
  data: [
    { hour: '00', value: 2840 }, { hour: '01', value: 2710 }, { hour: '02', value: 2620 },
    { hour: '03', value: 2580 }, { hour: '04', value: 2600 }, { hour: '05', value: 2750 },
    { hour: '06', value: 3120 }, { hour: '07', value: 3680 }, { hour: '08', value: 4210 },
    { hour: '09', value: 4580 }, { hour: '10', value: 4820 }, { hour: '11', value: 4950 },
    { hour: '12', value: 4780 }, { hour: '13', value: 4860 }, { hour: '14', value: 4920 },
    { hour: '15', value: 4880 }, { hour: '16', value: 4760 }, { hour: '17', value: 4490 },
    { hour: '18', value: 4050 }, { hour: '19', value: 3680 }, { hour: '20', value: 3380 },
    { hour: '21', value: 3210 }, { hour: '22', value: 3050 }, { hour: '23', value: 2940 },
  ],
};

// 사업장별 월별 전력사용량 비교
export const monthlyComparisonByAddressData = {
  id: 'monthlyComparison',
  title: '사업장별 월별 전력사용량 비교',
  originalTitle: 'Monthly Comparison by Address (kWh)',
  basisType: 'aggregation' as const,
  basisLabel: '집계기준',
  basisValue: '1–12월',
  unit: 'kWh',
  description: '사용량 상위 사업장의 월별 전력사용량을 비교한 그래프로, 사업장별 사용 규모와 계절적 변동 패턴을 확인할 수 있습니다.',
  addresses: ['사업장 A', '사업장 B', '사업장 C', '사업장 D', '사업장 E', '사업장 F', '평균'],
  data: [
    { month: '1월', A: 185000, B: 142000, C: 98000, D: 76000, E: 65000, F: 58000, avg: 104000 },
    { month: '2월', A: 178000, B: 138000, C: 94000, D: 73000, E: 63000, F: 56000, avg: 100333 },
    { month: '3월', A: 192000, B: 148000, C: 102000, D: 79000, E: 68000, F: 61000, avg: 108333 },
    { month: '4월', A: 195000, B: 152000, C: 105000, D: 82000, E: 71000, F: 63000, avg: 111333 },
    { month: '5월', A: 208000, B: 162000, C: 112000, D: 87000, E: 76000, F: 68000, avg: 118833 },
    { month: '6월', A: 235000, B: 185000, C: 128000, D: 99000, E: 86000, F: 77000, avg: 135000 },
    { month: '7월', A: 258000, B: 204000, C: 141000, D: 109000, E: 95000, F: 85000, avg: 148667 },
    { month: '8월', A: 272000, B: 215000, C: 149000, D: 115000, E: 100000, F: 89000, avg: 156667 },
    { month: '9월', A: 228000, B: 180000, C: 124000, D: 96000, E: 84000, F: 75000, avg: 131167 },
    { month: '10월', A: 205000, B: 160000, C: 110000, D: 85000, E: 74000, F: 66000, avg: 116667 },
    { month: '11월', A: 195000, B: 152000, C: 105000, D: 81000, E: 70000, F: 63000, avg: 111000 },
    { month: '12월', A: 188000, B: 146000, C: 101000, D: 78000, E: 67000, F: 60000, avg: 106667 },
  ],
};

// 사업장별 시간대 평균 부하 프로파일
export const hourlyAverageProfileByAddressData = {
  id: 'hourlyProfile',
  title: '사업장별 시간대 평균 부하 프로파일',
  originalTitle: 'Hourly Average Profile by Address (kWh)',
  basisType: 'month' as const,
  basisLabel: '지정월',
  basisValue: '2024-12',
  unit: 'kWh',
  description: '선택 월 기준 주요 사업장의 시간대별 평균 부하 패턴을 비교한 그래프로, 사업장별 운영시간과 전력사용 집중 시간대를 확인할 수 있습니다.',
  data: [
    { hour: '00', A: 4200, B: 3200, C: 2200, D: 1700, E: 1500, F: 1300, avg: 2350 },
    { hour: '01', A: 4050, B: 3100, C: 2100, D: 1600, E: 1400, F: 1200, avg: 2242 },
    { hour: '02', A: 3950, B: 3000, C: 2050, D: 1580, E: 1380, F: 1180, avg: 2190 },
    { hour: '03', A: 3900, B: 2980, C: 2020, D: 1560, E: 1360, F: 1160, avg: 2163 },
    { hour: '04', A: 3920, B: 2990, C: 2030, D: 1570, E: 1370, F: 1170, avg: 2175 },
    { hour: '05', A: 4100, B: 3150, C: 2150, D: 1650, E: 1450, F: 1250, avg: 2292 },
    { hour: '06', A: 4580, B: 3520, C: 2420, D: 1870, E: 1630, F: 1410, avg: 2572 },
    { hour: '07', A: 5200, B: 4020, C: 2780, D: 2150, E: 1880, F: 1620, avg: 2942 },
    { hour: '08', A: 6800, B: 5300, C: 3680, D: 2850, E: 2490, F: 2150, avg: 3878 },
    { hour: '09', A: 7800, B: 6100, C: 4230, D: 3280, E: 2860, F: 2470, avg: 4457 },
    { hour: '10', A: 8200, B: 6420, C: 4450, D: 3450, E: 3010, F: 2600, avg: 4688 },
    { hour: '11', A: 8450, B: 6620, C: 4590, D: 3560, E: 3100, F: 2680, avg: 4833 },
    { hour: '12', A: 8100, B: 6350, C: 4400, D: 3400, E: 2970, F: 2560, avg: 4630 },
    { hour: '13', A: 8300, B: 6500, C: 4510, D: 3490, E: 3050, F: 2630, avg: 4747 },
    { hour: '14', A: 8380, B: 6560, C: 4550, D: 3530, E: 3080, F: 2660, avg: 4793 },
    { hour: '15', A: 8260, B: 6470, C: 4490, D: 3480, E: 3040, F: 2620, avg: 4727 },
    { hour: '16', A: 7980, B: 6250, C: 4330, D: 3360, E: 2930, F: 2530, avg: 4563 },
    { hour: '17', A: 7400, B: 5800, C: 4020, D: 3110, E: 2720, F: 2350, avg: 4233 },
    { hour: '18', A: 6500, B: 5100, C: 3530, D: 2730, E: 2390, F: 2060, avg: 3718 },
    { hour: '19', A: 5800, B: 4550, C: 3150, D: 2440, E: 2130, F: 1840, avg: 3318 },
    { hour: '20', A: 5200, B: 4080, C: 2820, D: 2180, E: 1910, F: 1650, avg: 2973 },
    { hour: '21', A: 4900, B: 3840, C: 2660, D: 2060, E: 1800, F: 1550, avg: 2802 },
    { hour: '22', A: 4650, B: 3640, C: 2520, D: 1950, E: 1710, F: 1470, avg: 2657 },
    { hour: '23', A: 4380, B: 3430, C: 2370, D: 1830, E: 1600, F: 1380, avg: 2498 },
  ],
};

// 업종별 전력사용 통계
export const industryStatisticsData = {
  id: 'industryStats',
  title: '업종별 전력사용 통계',
  originalTitle: 'Industry Statistics',
  basisType: 'aggregation' as const,
  basisLabel: '집계기준',
  basisValue: '연간',
  unit: 'kWh',
  description: '업종별 총 전력사용량과 평균 사용량을 비교하여, 선택 단지 내 에너지 사용 비중이 높은 업종을 확인할 수 있습니다.',
  data: [
    { industry: '금속제조', total: 8450000, avg: 845000 },
    { industry: '기계부품', total: 6820000, avg: 620182 },
    { industry: '전기전자', total: 5940000, avg: 540000 },
    { industry: '화학소재', total: 4120000, avg: 514960 },
    { industry: '자동차부품', total: 2850000, avg: 475000 },
    { industry: '식품가공', total: 1798974, avg: 299829 },
  ],
};

// 월별 전력사용량
export const monthlyConsumptionData = {
  id: 'monthlyConsumption',
  title: '월별 전력사용량',
  originalTitle: 'Monthly Consumption (kWh)',
  basisType: 'aggregation' as const,
  basisLabel: '집계기준',
  basisValue: '1–12월',
  unit: 'kWh',
  description: '월별 전력사용량을 통해 단지 전체의 계절별 부하 패턴과 피크월을 확인할 수 있습니다.',
  data: [
    { month: '1월', value: 2285000 },
    { month: '2월', value: 2148000 },
    { month: '3월', value: 2380000 },
    { month: '4월', value: 2420000 },
    { month: '5월', value: 2560000 },
    { month: '6월', value: 2710000 },
    { month: '7월', value: 2780000 },
    { month: '8월', value: 2812480 },
    { month: '9월', value: 2645000 },
    { month: '10월', value: 2488000 },
    { month: '11월', value: 2360000 },
    { month: '12월', value: 2390493 },
  ],
};

// 환경 차트 데이터 (월평균)
export const environmentChartData = {
  id: 'envChart',
  title: '기상 데이터 월별 평균',
  basisType: 'aggregation' as const,
  basisLabel: '집계기준',
  basisValue: '월평균',
  unit: 'various',
  description: '',
  monthly: [
    { month: '1월', ghi: 76.2, temp: -1.2, dewPoint: -8.5, humidity: 58.2, pressure: 1021.4, windSpeed: 2.8 },
    { month: '2월', ghi: 98.4, temp: 1.5, dewPoint: -6.2, humidity: 57.8, pressure: 1017.6, windSpeed: 3.0 },
    { month: '3월', ghi: 134.6, temp: 7.2, dewPoint: -1.5, humidity: 60.5, pressure: 1012.3, windSpeed: 3.2 },
    { month: '4월', ghi: 165.2, temp: 13.5, dewPoint: 4.2, humidity: 62.8, pressure: 1008.7, windSpeed: 2.9 },
    { month: '5월', ghi: 185.8, temp: 18.9, dewPoint: 9.8, humidity: 64.5, pressure: 1006.2, windSpeed: 2.5 },
    { month: '6월', ghi: 178.4, temp: 23.4, dewPoint: 16.5, humidity: 70.8, pressure: 1004.1, windSpeed: 2.2 },
    { month: '7월', ghi: 154.6, temp: 26.8, dewPoint: 22.1, humidity: 80.5, pressure: 1002.5, windSpeed: 2.0 },
    { month: '8월', ghi: 162.8, temp: 27.2, dewPoint: 23.0, humidity: 82.1, pressure: 1003.4, windSpeed: 1.9 },
    { month: '9월', ghi: 148.4, temp: 21.5, dewPoint: 14.8, humidity: 72.6, pressure: 1007.8, windSpeed: 1.8 },
    { month: '10월', ghi: 126.2, temp: 14.2, dewPoint: 5.8, humidity: 65.4, pressure: 1013.5, windSpeed: 2.1 },
    { month: '11월', ghi: 84.6, temp: 6.5, dewPoint: -2.1, humidity: 62.8, pressure: 1018.2, windSpeed: 2.4 },
    { month: '12월', ghi: 64.8, temp: -0.2, dewPoint: -7.8, humidity: 59.2, pressure: 1022.1, windSpeed: 2.7 },
  ],
};

// 대표일 시간별 외기온도
export const hourlyAmbientTemperatureData = {
  id: 'hourlyAmbientTemp',
  title: '대표일 시간별 외기온도',
  originalTitle: 'Hourly Ambient Temperature',
  basisType: 'date' as const,
  basisLabel: '지정일',
  basisValue: '2026-06-25',
  unit: '°C',
  description: '선택 기준일의 시간별 외기온도 변화를 나타냅니다.',
  data: [
    { hour: '00', value: 19.2 }, { hour: '01', value: 18.8 }, { hour: '02', value: 18.4 },
    { hour: '03', value: 18.1 }, { hour: '04', value: 17.9 }, { hour: '05', value: 18.2 },
    { hour: '06', value: 19.5 }, { hour: '07', value: 21.3 }, { hour: '08', value: 23.4 },
    { hour: '09', value: 25.6 }, { hour: '10', value: 27.2 }, { hour: '11', value: 28.5 },
    { hour: '12', value: 29.1 }, { hour: '13', value: 29.8 }, { hour: '14', value: 30.2 },
    { hour: '15', value: 30.0 }, { hour: '16', value: 29.4 }, { hour: '17', value: 28.1 },
    { hour: '18', value: 26.5 }, { hour: '19', value: 24.8 }, { hour: '20', value: 23.5 },
    { hour: '21', value: 22.4 }, { hour: '22', value: 21.5 }, { hour: '23', value: 20.5 },
  ],
};

// POA 일사량 및 PV 출력 비교
export const poaAndPvOutputData = {
  id: 'poaAndPv',
  title: 'POA 일사량 및 PV 출력 비교',
  originalTitle: 'POA Irradiation and Power Output Comparison',
  basisType: 'date' as const,
  basisLabel: '지정일',
  basisValue: '2026-06-25',
  unit: 'W/m² / kW',
  description: '선택 기준일의 일사량 변화에 따른 PV 출력 반응을 나타냅니다.',
  data: [
    { hour: '00', poa: 0, pvOutput: 0 }, { hour: '01', poa: 0, pvOutput: 0 },
    { hour: '02', poa: 0, pvOutput: 0 }, { hour: '03', poa: 0, pvOutput: 0 },
    { hour: '04', poa: 0, pvOutput: 0 }, { hour: '05', poa: 12, pvOutput: 18 },
    { hour: '06', poa: 85, pvOutput: 124 }, { hour: '07', poa: 248, pvOutput: 362 },
    { hour: '08', poa: 452, pvOutput: 658 }, { hour: '09', poa: 621, pvOutput: 904 },
    { hour: '10', poa: 754, pvOutput: 1098 }, { hour: '11', poa: 835, pvOutput: 1216 },
    { hour: '12', poa: 858, pvOutput: 1249 }, { hour: '13', poa: 842, pvOutput: 1226 },
    { hour: '14', poa: 785, pvOutput: 1143 }, { hour: '15', poa: 682, pvOutput: 993 },
    { hour: '16', poa: 528, pvOutput: 769 }, { hour: '17', poa: 342, pvOutput: 498 },
    { hour: '18', poa: 158, pvOutput: 230 }, { hour: '19', poa: 42, pvOutput: 61 },
    { hour: '20', poa: 0, pvOutput: 0 }, { hour: '21', poa: 0, pvOutput: 0 },
    { hour: '22', poa: 0, pvOutput: 0 }, { hour: '23', poa: 0, pvOutput: 0 },
  ],
};

// 시간별 시스템 운전 효율
export const hourlySystemEfficiencyData = {
  id: 'hourlyEfficiency',
  title: '시간별 시스템 운전 효율',
  originalTitle: 'Hourly System Efficiency',
  basisType: 'date' as const,
  basisLabel: '지정일',
  basisValue: '2026-06-25',
  unit: '%',
  description: '발전이 발생하는 시간대의 시스템 운전 효율 변화를 나타냅니다.',
  data: [
    { hour: '05', value: 28.5 }, { hour: '06', value: 42.1 }, { hour: '07', value: 54.3 },
    { hour: '08', value: 61.8 }, { hour: '09', value: 65.2 }, { hour: '10', value: 68.4 },
    { hour: '11', value: 70.1 }, { hour: '12', value: 70.8 }, { hour: '13', value: 69.5 },
    { hour: '14', value: 67.3 }, { hour: '15', value: 63.8 }, { hour: '16', value: 58.9 },
    { hour: '17', value: 52.4 }, { hour: '18', value: 44.6 }, { hour: '19', value: 34.2 },
  ],
};

// 월별 PV 발전량·전력부하·POA 비교
export const monthlyPvEnergyLoadPoaData = {
  id: 'monthlyPvLoadPoa',
  title: '월별 PV 발전량 · 전력부하 · POA 일사량 비교',
  originalTitle: 'Monthly PV Energy · Load & POA',
  basisType: 'aggregation' as const,
  basisLabel: '집계기준',
  basisValue: '1–12월',
  unit: 'kWh / kWh/m²',
  description: '월별 PV 생산량, 전력부하, POA 일사량을 비교해 계절별 발전 성능과 부하 대응 가능성을 나타냅니다.',
  data: [
    { month: '1월', pvOutput: 548000, load: 2285000, poa: 76.2 },
    { month: '2월', pvOutput: 698000, load: 2148000, poa: 98.4 },
    { month: '3월', pvOutput: 956000, load: 2380000, poa: 134.6 },
    { month: '4월', pvOutput: 1174000, load: 2420000, poa: 165.2 },
    { month: '5월', pvOutput: 1320000, load: 2560000, poa: 185.8 },
    { month: '6월', pvOutput: 1268000, load: 2710000, poa: 178.4 },
    { month: '7월', pvOutput: 1098000, load: 2780000, poa: 154.6 },
    { month: '8월', pvOutput: 1156000, load: 2812480, poa: 162.8 },
    { month: '9월', pvOutput: 1054000, load: 2645000, poa: 148.4 },
    { month: '10월', pvOutput: 896000, load: 2488000, poa: 126.2 },
    { month: '11월', pvOutput: 602000, load: 2360000, poa: 84.6 },
    { month: '12월', pvOutput: 460990, load: 2390493, poa: 64.8 },
  ],
};

// Monthly Metrics 표 데이터
export const monthlyMetricsData = {
  months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  pvOutputAvg: [740, 880, 1285, 1630, 1775, 1760, 1476, 1555, 1464, 1204, 836, 619],
  pvOutputSum: [548000, 698000, 956000, 1174000, 1320000, 1268000, 1098000, 1156000, 1054000, 896000, 602000, 460990],
  loadAvg: [73065, 76714, 76129, 80667, 81935, 90333, 88903, 89951, 88167, 79613, 78667, 77113],
  loadSum: [2285000, 2148000, 2380000, 2420000, 2560000, 2710000, 2780000, 2812480, 2645000, 2488000, 2360000, 2390493],
  poaAvg: [102, 123, 181, 229, 250, 247, 208, 219, 205, 170, 117, 87],
  poaSum: [75.8, 96.8, 134.4, 164.7, 185.3, 177.8, 154.6, 162.5, 148.0, 125.8, 84.2, 64.6],
  ghiAvg: [100, 121, 178, 225, 246, 243, 205, 216, 202, 167, 115, 85],
  ghiSum: [74.2, 95.1, 132.0, 162.1, 182.5, 175.2, 152.4, 160.2, 145.7, 123.8, 82.7, 63.4],
  systemEfficiencyAvg: [42.1, 44.8, 49.2, 52.6, 53.8, 52.4, 48.5, 49.8, 49.2, 47.6, 44.1, 41.2],
  ambientTempAvg: [-1.2, 1.5, 7.2, 13.5, 18.9, 23.4, 26.8, 27.2, 21.5, 14.2, 6.5, -0.2],
  cellTempAvg: [4.5, 7.8, 14.2, 20.8, 26.1, 31.2, 34.5, 34.8, 28.4, 20.8, 12.5, 6.2],
};

// Annual Metrics
export const annualMetricsData = {
  pvOutputAvg: 1127,
  pvOutputSum: 9900990,
  loadAvg: 82134,
  loadSum: 29978974,
  poaAvg: 158,
  poaSum: 1384,
  ghiAvg: 160,
  ghiSum: 1408,
  systemEfficiencyAvg: 50.5,
  ambientTempAvg: 12.5,
  cellTempAvg: 17.7,
};

// 평균 및 피크 부하 (ESS)
export const averagePeakLoadData = {
  id: 'avgPeakLoad',
  title: '평균 및 피크 부하',
  originalTitle: 'Average & Peak Load',
  basisType: 'viewMode' as const,
  basisLabel: '표시기준',
  basisValue: 'Hour',
  unit: 'kW',
  description: 'ESS 적용 전후 평균부하 및 피크부하의 변화를 비교합니다.',
  data: Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    const baseWithout = 1800 + Math.sin((i - 6) * Math.PI / 12) * 1400 + (i > 8 && i < 18 ? 800 : 0);
    const baseWith = Math.min(baseWithout, 3875);
    return {
      hour: `${hour}:00`,
      withoutESS: Math.max(800, Math.round(baseWithout + Math.random() * 100)),
      withESS: Math.max(800, Math.round(baseWith + Math.random() * 80)),
      avgWithout: Math.round(baseWithout * 0.72),
      avgWith: Math.round(Math.min(baseWithout * 0.72, 3200)),
    };
  }),
};

// 피크 발생 분포
export const peakOccurrenceDistributionData = {
  id: 'peakDistribution',
  title: '피크 발생 분포',
  originalTitle: 'Peak Occurrence Distribution',
  basisType: 'viewMode' as const,
  basisLabel: '표시기준',
  basisValue: 'Hour',
  unit: '횟수',
  description: '피크 부하가 발생하는 시간대의 분포를 나타냅니다.',
  data: [
    { hour: '08:00', count: 12 }, { hour: '09:00', count: 28 }, { hour: '10:00', count: 42 },
    { hour: '11:00', count: 38 }, { hour: '12:00', count: 22 }, { hour: '13:00', count: 35 },
    { hour: '14:00', count: 48 }, { hour: '15:00', count: 45 }, { hour: '16:00', count: 31 },
    { hour: '17:00', count: 18 }, { hour: '18:00', count: 8 },
  ],
};

// ESS 운영 스케줄
export const essOperatingScheduleData = {
  id: 'essSchedule',
  title: 'ESS 운영 스케줄',
  originalTitle: 'ESS Operating Schedule',
  basisType: 'viewMode' as const,
  basisLabel: '표시기준',
  basisValue: '시간별',
  unit: 'kWh / %',
  description: 'ESS의 충전/방전 스케줄과 배터리 잔량(SOC) 변화를 나타냅니다.',
  data: [
    { hour: '00:00', charge: 155, discharge: 0, soc: 45 },
    { hour: '01:00', charge: 162, discharge: 0, soc: 55 },
    { hour: '02:00', charge: 158, discharge: 0, soc: 64 },
    { hour: '03:00', charge: 165, discharge: 0, soc: 74 },
    { hour: '04:00', charge: 160, discharge: 0, soc: 84 },
    { hour: '05:00', charge: 80, discharge: 0, soc: 89 },
    { hour: '06:00', charge: 0, discharge: 0, soc: 90 },
    { hour: '07:00', charge: 0, discharge: 0, soc: 90 },
    { hour: '08:00', charge: 0, discharge: 0, soc: 90 },
    { hour: '09:00', charge: 0, discharge: 120, soc: 83 },
    { hour: '10:00', charge: 0, discharge: 145, soc: 74 },
    { hour: '11:00', charge: 0, discharge: 162, soc: 64 },
    { hour: '12:00', charge: 0, discharge: 88, soc: 58 },
    { hour: '13:00', charge: 0, discharge: 142, soc: 50 },
    { hour: '14:00', charge: 0, discharge: 168, soc: 40 },
    { hour: '15:00', charge: 0, discharge: 155, soc: 31 },
    { hour: '16:00', charge: 0, discharge: 138, soc: 23 },
    { hour: '17:00', charge: 0, discharge: 95, soc: 17 },
    { hour: '18:00', charge: 0, discharge: 48, soc: 14 },
    { hour: '19:00', charge: 0, discharge: 0, soc: 14 },
    { hour: '20:00', charge: 0, discharge: 0, soc: 14 },
    { hour: '21:00', charge: 88, discharge: 0, soc: 19 },
    { hour: '22:00', charge: 148, discharge: 0, soc: 28 },
    { hour: '23:00', charge: 152, discharge: 0, soc: 37 },
  ],
};

// 경제성 현금흐름 데이터
export const cashFlowData = {
  id: 'cashFlow',
  title: '연도별 현금흐름',
  basisType: 'period' as const,
  basisLabel: '분석기간',
  basisValue: '20년',
  unit: '억원',
  description: '투자비와 연도별 운영현금흐름을 비교합니다.',
  data: (() => {
    const initialInvestment = -480;
    return Array.from({ length: 21 }, (_, i) => {
      if (i === 0) {
        return { year: `Y${i}`, investment: initialInvestment, operatingCashFlow: 0, salesRevenue: 0, operatingCost: 0 };
      }
      const revenue = 128.7 * Math.pow(1.032, i);
      const opCost = 14.4 * Math.pow(1.032, i);
      const cashFlow = revenue - opCost;
      return {
        year: `Y${i}`,
        investment: 0,
        operatingCashFlow: Math.round(cashFlow * 10) / 10,
        salesRevenue: Math.round(revenue * 10) / 10,
        operatingCost: Math.round(opCost * 10) / 10,
      };
    });
  })(),
};

// 누적 현금흐름 데이터
export const cumulativeCashFlowData = {
  id: 'cumulativeCashFlow',
  title: '누적 현금흐름',
  basisType: 'period' as const,
  basisLabel: '분석기간',
  basisValue: '20년',
  unit: '억원',
  description: '투자비 회수 흐름과 할인현금흐름 기준 회수 가능성을 나타냅니다.',
  data: (() => {
    let cumulative = 0;
    let cumulativeDiscounted = 0;
    const rate = 0.05;
    return Array.from({ length: 21 }, (_, i) => {
      if (i === 0) {
        cumulative = -480;
        cumulativeDiscounted = -480;
        return { year: `Y${i}`, cumulative, cumulativeDiscounted };
      }
      const revenue = 128.7 * Math.pow(1.032, i);
      const opCost = 14.4 * Math.pow(1.032, i);
      const cashFlow = revenue - opCost;
      const discountedCashFlow = cashFlow / Math.pow(1 + rate, i);
      cumulative += cashFlow;
      cumulativeDiscounted += discountedCashFlow;
      return {
        year: `Y${i}`,
        cumulative: Math.round(cumulative * 10) / 10,
        cumulativeDiscounted: Math.round(cumulativeDiscounted * 10) / 10,
      };
    });
  })(),
};

// 경제성 상세 표 데이터
export const economicTableData = (() => {
  const years = Array.from({ length: 21 }, (_, i) => i);
  return years.map(i => {
    if (i === 0) return {
      year: i,
      investment: -48000000000,
      salesRevenue: 0,
      operatingCost: 0,
      depreciation: 0,
      operatingProfit: 0,
      operatingCashFlow: -48000000000,
      cumulativeCashFlow: -48000000000,
      discountRate: 1.0,
      discountedCashFlow: -48000000000,
      cumulativeDiscountedCashFlow: -48000000000,
    };
    const revenue = 12870000000 * Math.pow(1.032, i);
    const opCost = 1440000000 * Math.pow(1.032, i);
    const depreciation = i <= 10 ? 4800000000 : 0;
    const operatingProfit = revenue - opCost - depreciation;
    const cashFlow = revenue - opCost;
    const discountFactor = 1 / Math.pow(1.05, i);
    const discountedCF = cashFlow * discountFactor;
    return {
      year: i,
      investment: 0,
      salesRevenue: Math.round(revenue),
      operatingCost: Math.round(opCost),
      depreciation: Math.round(depreciation),
      operatingProfit: Math.round(operatingProfit),
      operatingCashFlow: Math.round(cashFlow),
      cumulativeCashFlow: 0,
      discountRate: Math.round(discountFactor * 10000) / 10000,
      discountedCashFlow: Math.round(discountedCF),
      cumulativeDiscountedCashFlow: 0,
    };
  });
})();

// 정량 효과 데이터
export const quantitativeEffectData = {
  id: 'quantEffect',
  title: '기타 정량적 효과',
  basisType: 'aggregation' as const,
  basisLabel: '집계기준',
  basisValue: '연간',
  unit: 'various',
  description: '',
  data: [
    { label: '연간 재생에너지 발전량', value: 9900990, unit: 'kWh', category: 'energy' },
    { label: '연간 전력사용량', value: 29978974, unit: 'kWh', category: 'energy' },
    { label: 'RE100 달성률', value: 33.0, unit: '%', category: 'renewable' },
    { label: '피크절감률', value: 20.0, unit: '%', category: 'peak' },
    { label: '연간 온실가스 감축량', value: 4555.5, unit: 'tCO₂eq', category: 'ghg' },
    { label: '20년 누적 온실가스 감축량', value: 91110, unit: 'tCO₂eq', category: 'ghg' },
    { label: '연간 전기료 절감효과', value: 1287128700, unit: '원', category: 'economy' },
  ],
};
