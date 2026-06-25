import ReportPage from './ReportPage';
import { projectInfo } from '@/data/reportData';

export default function CoverPage() {
  return (
    <ReportPage isCover>
      {/* Top accent bar */}
      <div className="h-1.5 bg-[#313DB8] w-full" />

      {/* Main content */}
      <div className="flex flex-col h-full min-h-[calc(297mm-6px)]">
        {/* Header area */}
        <div className="bg-[#313DB8] px-16 pt-16 pb-12 relative overflow-hidden">
          {/* Abstract network pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 600 300"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Nodes */}
            {[
              [80, 60], [180, 40], [300, 80], [420, 50], [520, 70],
              [120, 140], [240, 160], [360, 130], [480, 150],
              [60, 220], [200, 200], [320, 240], [440, 210], [560, 230],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="5" fill="white" />
            ))}
            {/* Edges */}
            {[
              [80,60, 180,40], [180,40, 300,80], [300,80, 420,50], [420,50, 520,70],
              [80,60, 120,140], [180,40, 240,160], [300,80, 360,130], [420,50, 480,150],
              [120,140, 240,160], [240,160, 360,130], [360,130, 480,150],
              [120,140, 200,200], [240,160, 320,240], [360,130, 440,210], [480,150, 560,230],
              [60,220, 200,200], [200,200, 320,240], [320,240, 440,210], [440,210, 560,230],
              [300,80, 240,160], [360,130, 320,240],
            ].map(([x1,y1,x2,y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1" />
            ))}
            {/* Building rectangles */}
            {[[80,80,24,18],[240,100,32,20],[380,90,28,16],[500,105,20,14]].map(([x,y,w,h],i)=>(
              <rect key={i} x={x} y={y} width={w} height={h} fill="white" opacity="0.6" rx="1" />
            ))}
            {/* PV panels */}
            {[[155,55,18,10],[280,45,20,10],[400,62,16,9]].map(([x,y,w,h],i)=>(
              <rect key={i} x={x} y={y} width={w} height={h} fill="none" stroke="white" strokeWidth="1.5" rx="1" />
            ))}
          </svg>

          <div className="relative z-10">
            <div className="inline-block border border-white/40 rounded px-3 py-1 text-white/80 text-xs mb-6 tracking-widest">
              RENERGIS SIMULATION REPORT
            </div>
            <h1 className="text-white text-3xl font-bold leading-tight tracking-tight mb-2">
              산업단지 재생에너지
            </h1>
            <h1 className="text-white text-3xl font-bold leading-tight tracking-tight mb-2">
              설계 시뮬레이션 결과 보고서
            </h1>
            <div className="h-0.5 w-20 bg-white/40 mt-4" />
          </div>
        </div>

        {/* Project info area */}
        <div className="flex-1 px-16 py-10 bg-white">
          <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-4 text-sm">
            {[
              ['프로젝트명', projectInfo.projectName],
              ['대상지명', projectInfo.siteName],
              ['대상지 주소', projectInfo.siteAddress],
              ['분석 목적', projectInfo.analysisPurpose],
              ['분석 기간', projectInfo.analysisPeriod],
              ['분석일', projectInfo.analysisDate],
            ].map(([label, value]) => (
              <div key={label} className="contents">
                <span className="text-gray-500 font-medium whitespace-nowrap self-start pt-0.5">{label}</span>
                <span className="text-gray-800 font-semibold border-b border-gray-100 pb-3">{value}</span>
              </div>
            ))}
          </div>

          {/* Bottom platform info */}
          <div className="mt-auto pt-10">
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <div>
                <p className="text-xs text-gray-400">수행기관</p>
                <p className="text-sm font-semibold text-[#313DB8]">{projectInfo.platform}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">분석일</p>
                <p className="text-sm font-semibold text-gray-700">{projectInfo.analysisDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-2 bg-[#313DB8]/20" />
      </div>
    </ReportPage>
  );
}
