export default function GradientOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Top-right cyan orb */}
      <div
        className="cyan__gradient absolute -right-[20%] -top-[10%] h-[500px] w-[500px] rounded-full"
      />
      {/* Mid-left blue orb */}
      <div
        className="blue__gradient absolute -left-[15%] top-[30%] h-[400px] w-[400px] rounded-full opacity-20 dark:opacity-10"
      />
      {/* Bottom-right pink orb */}
      <div
        className="pink__gradient absolute -right-[25%] top-[60%] h-[300px] w-[300px] rounded-full opacity-[0.03]"
      />
      {/* Bottom-left white orb */}
      <div
        className="white__gradient absolute -left-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full"
      />
    </div>
  );
}
