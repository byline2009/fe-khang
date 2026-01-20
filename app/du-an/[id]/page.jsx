export default async function SolutionDetail({ params }) {
  const { id } = await params;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-center">Chi tiết dự án ${id}</h1>
    </div>
  );
}
