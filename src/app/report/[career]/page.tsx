
import ReportClientPage from './ReportClientPage';

interface ReportPageProps {
  params: {
    career: string;
  };
}

export default function ReportPage({ params }: ReportPageProps) {
  const careerName = decodeURIComponent(params.career);

  return <ReportClientPage careerName={careerName} />;
}
