'use client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Check, Copy } from 'lucide-react';
import React from 'react';

export function CodeBlock({ code }: { code: string }) {
  const [hasCopied, setHasCopied] = React.useState(false);
  const { toast } = useToast();

  const copyToClipboard = () => {
    // Modern clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(code)
        .then(() => {
          showSuccessToast();
        })
        .catch(err => {
          console.warn('Modern clipboard access failed. Falling back.', err);
          fallbackCopyToClipboard();
        });
    } else {
      // Fallback for insecure contexts or older browsers
      fallbackCopyToClipboard();
    }
  };

  const fallbackCopyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = code;
    // Make the textarea out of sight
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showSuccessToast();
    } catch (err) {
      console.error('Fallback copy to clipboard failed', err);
      toast({
        variant: 'destructive',
        title: 'Copy Failed',
        description: 'Could not copy the code to your clipboard.',
      });
    }
    document.body.removeChild(textArea);
  };

  const showSuccessToast = () => {
    setHasCopied(true);
    toast({
      title: 'Copied to clipboard!',
      description: 'The code has been copied to your clipboard.',
    });
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="overflow-x-auto rounded-md border bg-muted/50 p-4 font-code text-sm">
        <code>{code}</code>
      </pre>
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:bg-muted hover:text-foreground"
        onClick={copyToClipboard}
      >
        {hasCopied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        <span className="sr-only">Copy code</span>
      </Button>
    </div>
  );
}
