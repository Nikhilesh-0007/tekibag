import React from 'react';

export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[80px] md:blur-[120px] animate-blob" />
      
      {/* Blob 2 */}
      <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-accent/5 dark:bg-accent/10 blur-[80px] md:blur-[120px] animate-blob [animation-delay:2s]" />

      {/* Blob 3 */}
      <div className="absolute top-[75%] left-[5%] w-[40vw] h-[40vw] max-w-[480px] max-h-[480px] rounded-full bg-primary/5 dark:bg-accent/5 blur-[80px] md:blur-[120px] animate-blob [animation-delay:4s]" />
      
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
