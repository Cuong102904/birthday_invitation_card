import { CheckCircle2, Copy, Heart } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card } from '../../../components/ui/card';

export function SuccessStep({ summaryText, copied, onCopy }) {
  return (
    <Card className="p-6 sm:p-8">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blush-500 text-white shadow-glow">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <div className="space-y-2">
          <p className="inline-flex items-center gap-2 rounded-full bg-blush-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-blush-600">
            <Heart className="h-3.5 w-3.5 fill-current" />
            Thành công
          </p>
          <h2 className="text-3xl font-black text-blush-900">Đã chọn xong rồi đó</h2>
          <p className="text-sm leading-6 text-blush-800/80">
            Bạn có thể copy JSON bên dưới để gửi lại lựa chọn.
          </p>
        </div>
        <div className="w-full rounded-[1.5rem] bg-blush-950 p-4 text-left text-sm text-white shadow-2xl shadow-blush-500/20">
          <pre className="overflow-auto whitespace-pre-wrap break-words font-mono leading-6">{summaryText}</pre>
        </div>
        <Button onClick={onCopy} className="gap-2">
          <Copy className="h-4 w-4" />
          {copied ? 'Đã copy' : 'Copy JSON'}
        </Button>
      </div>
    </Card>
  );
}
