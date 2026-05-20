interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div>
      <p className="text-blue-400 font-medium">{eyebrow}</p>
      <h1 className="text-4xl font-bold mt-2">{title}</h1>
      <p className="text-slate-400 mt-3 max-w-3xl">{description}</p>
    </div>
  );
}
