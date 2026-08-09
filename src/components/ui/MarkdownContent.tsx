import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-semibold prose-h2:mt-6 prose-h2:text-lg prose-h3:mt-4 prose-h3:text-base prose-p:leading-relaxed prose-table:text-sm prose-th:bg-slate-50 prose-td:align-top dark:prose-invert dark:prose-th:bg-slate-800/60">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
