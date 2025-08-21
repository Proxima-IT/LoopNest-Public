interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  className = '',
  centered = false 
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
          {subtitle}
        </p>
      )}
    </div>
  );
}